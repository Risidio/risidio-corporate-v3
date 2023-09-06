import type { Metadata } from 'next'
import OurWork from './OurWork';

export const metadata: Metadata = {
  title: 'Our Work',
  description: '',
}

export default async function Work() {
  return (
    <>
     <OurWork/>
    </>
  );
}
