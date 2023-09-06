import type { Metadata } from 'next'
import Contactus from './Contactus';

export const metadata: Metadata = {
  title: 'Contact',
  description: '',
}

export default async function Contact() {
  return (
    <>
     <Contactus/>
    </>
  );
}
