import { Template } from '@/components/Templates/Template';
import { useRouter } from 'next/navigation';

type PageType = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageType) {
  return (
    <Template>
      <div>GAME ID: {params.id}</div>
    </Template>
  );
}
