import { SliceZone } from '@prismicio/react';
import React from 'react';
import { Box } from '../../components/base';
import { components } from '../../slices';
import Head from 'next/head';
import { createClient } from '../../prismicio';

export default async function Sustainability() {
  const client = createClient();
  const page = await client.getSingle('sustainability');

  return (
    <>
      <Head>
        <title>Sustainable</title>
      </Head>
      <Box>
        <SliceZone slices={page.data.slices} components={components} />
      </Box>
    </>
  );
}
