import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { createClient } from "@/prismicio";
import { Box } from '../components/base';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('home');
  
  return (
    <Box>
        <Box className="w-screen bg-black">
          <video
            preload="auto"
            autoPlay
            muted
            loop
            id="myVideo"
            className="z-1 min-w-full min-h-full inset-0 fixed max-w-fit"
          >
            <source
              src="https://prismic-io.s3.amazonaws.com/risidio-journal/fcd75f30-c353-417e-a7fa-1797acb1a7c7_Smaller+Website+Background.mp4"
              type="video/mp4"
              className="w-screen"
            />
          </video>
        </Box>
        <SliceZone slices={page.data.slices} components={components} />
    </Box>
  )
}