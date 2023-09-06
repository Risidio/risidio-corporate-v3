import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.GalleryRowSlice} GalleryRowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryRowSlice>} GalleryRowProps
 * @param { GalleryRowProps }
 */
const GalleryRow = ({ slice }) => (
  <section>
    <span >
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : ""
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : ""
    }
  </section>
)

export default GalleryRow