import type { Metadata } from 'next'
import Articles from './Articles';
import { createClient } from '../../prismicio';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'risidio latest articles about cryptocurrency, NFTs',
}

export default async function Article() {
  const client = createClient();
  const page = await client.getSingle('articles');

  return (
      <Articles slices={page.data.slices}/>
  );
}
