"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { Box, Button, Input, Text } from '../../components/base';

export default function Contactus() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <form
        action="https://formsubmit.co/2c772e29e767b6aa8cfe9c6fd5592ebd"
        method="POST"
        className="bg-bg-purple flex flex-col px-4 justify-center items-center py-28"
      >
        <Box className="max-w-xl flex flex-col  w-full">
          <Text className="text-white font-bold text-center text-base mb-4">
            Any thoughts, Questions, Just Want To Say Hello?
          </Text>
          <Text className="text-white text-center font-extralight text-4xl mb-2">
            Contact us
          </Text>
          <Box className="flex flex-row mt-2 justify-between w-full">
            <Input
              required
              placeholder="Your name"
              className="w-[47%] focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder-gray-100 placeholder:text-xs"
              value={form.name}
              name="name"
              type="text"
              id="name"
              onChange={onChange}
            />
            <Input
              required
              placeholder="Email"
              className="w-[47%] focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder-gray-100 placeholder:text-xs"
              value={form.email}
              name="email"
              type="email"
              id="email"
              onChange={onChange}
            />
          </Box>
          <Input
            placeholder="Subject"
            required
            className="mt-6  focus:bg-white focus:text-[#707070] focus:placeholder-black placeholder:text-xs placeholder-gray-100"
            value={form.subject}
            name="subject"
            type="text"
            id="subject"
            onChange={onChange}
          />
          <textarea
            value={form.message}
            name="message"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            id="name"
            placeholder="Your message.."
            className="mt-6  focus:bg-white focus:text-[#707070]  focus:placeholder-black block placeholder:text-xs placeholder-gray-100 w-full text-xs appearance-none bg-white/[.2] rounded-2xl  px-5 py-2 placeholder-gray-60 shadow-sm text-white focus:outline-none focus:ring-brand-500 sm:text-sm h-24 resize-none"
          />
        </Box>

        <Button
          type="submit"
          className="bg-primary text-xs text-white font-base hover:bg-white hover:text-primary from-slate-100 rounded-full px-10 py-2 mt-16"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
