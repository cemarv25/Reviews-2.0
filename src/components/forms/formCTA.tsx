import Button from '@/components/button';
import { useFormStatus } from 'react-dom';

type FormCTAProps = {
  text: string;
  loading?: boolean;
};

const FormCTA = ({ text, loading = false }: FormCTAProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} loading={pending || loading}>
      {text}
    </Button>
  );
};

export default FormCTA;
