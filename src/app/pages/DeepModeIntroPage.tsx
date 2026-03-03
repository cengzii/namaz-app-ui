import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export function DeepModeIntroPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/flow/${id}`, { replace: true });
  }, [id, navigate]);

  return null;
}
