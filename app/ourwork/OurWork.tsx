import { SliceZone } from '@prismicio/react';
import React from 'react';
import { Box } from '../../components/base';
import { components } from '../../slices';
import { createClient } from '../../prismicio';
import Head from 'next/head';

export default async function OurWork() {
  const client = createClient();
  const page = await client.getSingle('ourwork');

  return (
    <>
      <Head>
        <title>Our Work</title>
      </Head>
      <Box>
        <SliceZone slices={page.data.slices} components={components} />
      </Box>
    </>
  );
}

