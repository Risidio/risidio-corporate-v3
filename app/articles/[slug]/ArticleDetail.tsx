import { Img, RichText } from '@/components/base';
import { createClient } from '@/prismicio';
import { Box } from '@mui/material';
import { PrismicLink } from '@prismicio/react';

interface ArcicleDetailProps {
  slug: string | string[];
}

export default async function ArcicleDetail({slug}: ArcicleDetailProps) {
  const client = createClient();
  const page = await client.getSingle("articles");
  let articles = page.data.slices ?? [];

  // Find the article
  let selectedArticle = Object.values(articles).filter(article => article.primary.slug[0]?.text === slug )
  let article = selectedArticle ? selectedArticle[0] : "";

  if (!article) return;

  return (
     <section className="w-full min-h-[75vh] bg-white">
         <Box className="max-w-screen-xl m-auto p-5">
           
            <Box className="flex flex-col gap-3">
               <Box className="flex items-center gap-1 text-base font-semibold w-full">
                  By <RichText
                      field={article.primary.article_author}
                      className="text-base font-semibold"
                    />
               </Box>
                <p> {article.primary.article_date && article.primary.article_date.toString()} (Published) </p> 
                <PrismicLink 
                         field={article.primary.article_link}
                         target="_blank"
                         className="text-risidio-yellow font-semibold"
                      >
                    Read Full Article
                </PrismicLink>
            </Box>

            <Box className="flex justify-center items-center pt-10 flex-col gap-5 m-auto">
                <RichText
                   field={article.primary.article_title}
                   className="text-2xl font-semibold text-center my-2"
                />
              
                <Box className="w-64 h-64 object-contain"> 
                    <Img
                      src={article.primary.article_image.url}
                      alt={article.primary.article_image.alt}
                      className="w-full h-full rounded-lg"
                    />
                </Box> 
            </Box> 

            <Box className="flex flex-col justify-center px-5 gap-3">
                <Box className='text-base font-normal text-justify leading-3 py-10'>
                    <RichText
                      field={article.primary.article_content}
                      className="w-full"
                    />
                </Box>
            </Box>

            <Box className="flex flex-col px-5 gap-5 leading-3">
              { article.items.map((item, i) => (
                   <Box key={i}>
                       <RichText
                           field={item.title}
                           className="text-xl font-medium my-2"
                       />
                       <RichText
                           field={item.desctiption}
                           className="text-base font-normal text-justify my-5"
                       />   

                      { item.image.url && (
                          <Box className="md:w-[60%] w-full flex justify-center items-center m-auto">
                           <Img
                             src={item.image.url}
                             alt={item.image.alt}
                             className="w-full h-full rounded-lg"
                          />
                         </Box>  
                        )
                      }       
                    
                   </Box>
               ))
              }
           </Box>

         </Box>
     </section>
  );
}
