import '../public/styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/footer'
import { Layout } from '@/components/layout'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Risidio',
  description: 'Creating Decentralised Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
       <Layout>
         <PrismicPreview repositoryName={repositoryName} />
         <Navbar />
          {children}
         <Footer />
        </Layout>
      </body>
    </html>
  )
}
