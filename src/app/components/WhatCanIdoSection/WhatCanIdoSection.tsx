"use client";
import { motion } from "framer-motion";
import CardGrid from "./CardGrid";
import { downMotion, parentTextAnimation, upMotion } from "@/Animation";

export default function WhatCanIdoSection() {
  return (
    <>
      <motion.section
        variants={parentTextAnimation}
        initial="initial"
        whileInView="animate"
        className="bg-vantaBlack pt-[50px] pb-[83px] px-5 md:px-20"
      >
        <motion.h2
          variants={downMotion}
          initial="initial"
          whileInView="animate"
          className="text-[40px] py-[33px] font-medium text-[#ddd] text-center mb-8"
        >
          What can I do?
        </motion.h2>
        <CardGrid />
      </motion.section>
      <div className="bg-full_stack_img bg-cover bg-fixed no-repeat opacity-70 min-h-[400px]"></div>
    </>
  );
}
