'use client'

import React, { useState } from 'react';
import { Img, RichText, Box, Button, Input } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.Section4Slice} Section4Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section4Slice>} Section4Props
 * @param { Section4Props }
 */
const Section4 = ({ slice }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      action="https://formsubmit.co/2c772e29e767b6aa8cfe9c6fd5592ebd"
      method="POST"
      className="bg-bg-purple flex flex-col justify-center items-center py-48"
    >
      {/* <Box className="max-w-[353px] w-full"> */}
      <Img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {/* </Box> */}

      <span className="title">
        {slice.primary.title ? (
          <RichText
            className="text-white text-4xl text-center font-light"
            field={slice.primary.title}
          />
        ) : ""
        }
      </span>
      <Box className="max-w-xl flex flex-col sm:flex-row mt-10 justify-between w-full px-4">
        <Input
          placeholder="Name"
          className="sm:w-[48%] placeholder:text-xs"
          value={form.name}
          name="name"
          type="text"
          id="name"
          onChange={onChange}
        />
        <Input
          placeholder="Email"
          className="sm:w-[48%] placeholder:text-xs mt-6 sm:mt-0"
          value={form.email}
          name="email"
          type="email"
          id="email"
          onChange={onChange}
        />
      </Box>

      <Button
        type="submit"
        className="bg-primary text-white text-xs font-base hover:bg-white hover:text-primary from-slate-100 rounded-full px-10 py-3 mt-16"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default Section4;
