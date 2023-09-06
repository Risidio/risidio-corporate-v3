import type { Metadata } from 'next'
import Aboutus from './Aboutus';

export const metadata: Metadata = {
  title: 'About',
  description: 'Empowering creatives with Web 3.0 technology using the power of NFTs and crypto',
}

export default async function About() {
  return (
    <>
     <Aboutus/>
    </>
  );
}
