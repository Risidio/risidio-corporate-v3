import { SliceZone } from '@prismicio/react';
import React from 'react';
import { Box } from '../../components/base';
import { components } from '../../slices';
import { createClient } from '../../prismicio';
import Head from 'next/head';

export default async function Aboutus() {
  const client = createClient();
  const page = await client.getSingle('aboutpage');
  
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Box>
        <SliceZone slices={page.data.slices} components={components} />
      </Box>
    </>
  );
}
