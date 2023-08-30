"use client";
import { motion } from "framer-motion";
import { parentTextAnimation, upMotion } from "./Animation";

export default function AboutMeSection() {
  return (
    <section id="aboutMe">
      <motion.div
        variants={parentTextAnimation}
        initial="initial"
        whileInView="animate"
        className="bg-bg_color_2 py-[50px] px-5 md:px-20 text-center"
      >
        <motion.h2
          variants={upMotion}
          initial="initial"
          whileInView="animate"
          className="text-[40px] text-[#666] font-bold py-[33px] mb-8"
        >
          Who Am I?
        </motion.h2>

        <motion.p
          variants={upMotion}
          initial="initial"
          whileInView="animate"
          className="text-xl"
        >
          I possess substantial expertise as a front-end engineer, coupled with
          a profound enthusiasm for crafting adaptive web designs and developing
          and implementing online applications across various platforms. I have
          gained hands-on proficiency in collaborating efficiently within teams,
          both in physical and remote settings, irrespective of their scale. In
          2020, I opted for a career transition towards Software Engineering, a
          decision that has ignited a strong passion within me. With this
          platform, I aspire to chronicle every step of my journey as I delve
          into the realm of software development.
        </motion.p>
      </motion.div>
      <div className="bg-web_developer_img bg-cover bg-fixed no-repeat opacity-70 min-h-[400px]"></div>
    </section>
  );
}
