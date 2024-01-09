import { Template } from '@/components/Templates/Template';

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
