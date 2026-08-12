-- Corrige: aluno conseguia aprovar a própria entrega e escrever o próprio XP.
-- No Postgres não dá pra revogar coluna de um GRANT feito no nível da tabela,
-- então revogamos o UPDATE inteiro e devolvemos só as colunas seguras.

-- 1. submissions: aluno só edita link e notes
REVOKE UPDATE ON public.submissions FROM authenticated;
GRANT UPDATE (link, notes) ON public.submissions TO authenticated;

-- 2. profiles: aluno edita o perfil, nunca o xp
REVOKE UPDATE ON public.profiles FROM authenticated;
GRANT UPDATE (display_name, gamertag, turma, avatar_seed) ON public.profiles TO authenticated;

-- 3. entrega aprovada vira imutável para o aluno
DROP POLICY IF EXISTS "submissions_update" ON public.submissions;
CREATE POLICY "submissions_update_own_pending" ON public.submissions
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id AND status <> 'aprovado')
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "submissions_delete_own" ON public.submissions;
CREATE POLICY "submissions_delete_own_pending" ON public.submissions
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id AND status <> 'aprovado');

-- 4. a correção passa a acontecer aqui, com o papel verificado no servidor.
--    SECURITY DEFINER: roda como dona da função, então escapa dos grants acima.
CREATE OR REPLACE FUNCTION public.grade_submission(
  _submission_id UUID,
  _status public.submission_status,
  _xp INTEGER,
  _feedback TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'professor') THEN
    RAISE EXCEPTION 'Apenas professor pode corrigir entregas';
  END IF;

  IF _status = 'enviado' THEN
    RAISE EXCEPTION 'Status invalido para correcao';
  END IF;

  UPDATE public.submissions
  SET status     = _status,
      xp_awarded = CASE WHEN _status = 'aprovado'
                        THEN LEAST(GREATEST(_xp, 0), 500)
                        ELSE 0 END,
      feedback   = _feedback
  WHERE id = _submission_id;
END;
$$;

REVOKE ALL ON FUNCTION public.grade_submission(uuid, public.submission_status, integer, text)
  FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.grade_submission(uuid, public.submission_status, integer, text)
  TO authenticated;
