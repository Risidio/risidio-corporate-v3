import type { Metadata } from 'next'
import Sustainability from './Sustainability';

export const metadata: Metadata = {
  title: 'Sustainable',
  description: '',
}

export default async function SustainabilityPage() {
  return (
    <>
     <Sustainability/>
    </>
  );
}
