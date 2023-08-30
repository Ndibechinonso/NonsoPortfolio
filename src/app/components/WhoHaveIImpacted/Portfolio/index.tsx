"use client";
import React from "react";
import { motion } from "framer-motion";
import { WORKEXPERIENCE } from "@/Data";
import { downMotion, parentTextAnimation, upMotion } from "@/Animation";

export default function WhoHaveIImpacted() {
  return (
    <section>
      <div
        className="bg-bg_color_2 pt-[50px] pb-[83px] px-5 md:px-20"
        id="portfolio"
      >
        <motion.div
          variants={parentTextAnimation}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2
            variants={upMotion}
            initial="initial"
            whileInView="animate"
            className="text-[40px] py-[33px] font-medium text-[#666] text-center mb-8"
          >
            Who have I impacted?
          </motion.h2>

          <div className="flex flex-col text-[#666] gap-y-16">
            {WORKEXPERIENCE &&
              WORKEXPERIENCE.map((work, index) => (
                <div key={index}>
                  <motion.h4
                    variants={downMotion}
                    initial="initial"
                    whileInView="animate"
                    className="pb-2.5 text-xl font-bold text-vantaBlack"
                  >
                    {work.company}
                  </motion.h4>
                  <div className="flex flex-col md:flex-row justify-between font-bold text-[61677C]">
                    <motion.h5
                      variants={upMotion}
                      initial="initial"
                      whileInView="animate"
                    >
                      {work.jobRole}
                    </motion.h5>{" "}
                    <motion.h5
                      variants={upMotion}
                      initial="initial"
                      whileInView="animate"
                    >
                      {work.period}
                    </motion.h5>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
      <div className="bg-team_work_img bg-cover bg-fixed no-repeat opacity-70 min-h-[400px]"></div>
    </section>
  );
}
