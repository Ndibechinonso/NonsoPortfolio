"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { appearMotion, parentTextAnimation } from "@/Animation";

export default function Card({
  link,
  header,
  text,
  language,
  languages,
  tool,
  tasks,
  button,
  button2,
}: any) {
  return (
    <motion.div
      variants={parentTextAnimation}
      initial="initial"
      whileInView="animate"
      className="flex flex-col p-5 pb-[70px] w-[270px] shadow-card_shadow text-vantaBlack text-center rounded-[9px] bg-white"
    >
      <motion.div
        variants={appearMotion}
        initial="initial"
        whileInView="animate"
        className="p-5"
      >
        <FontAwesomeIcon
          icon={link}
          className="fa fa-chevron-circle-down fa-5x cursor-pointer"
          style={{ color: "#000100", width: 80, margin: "auto" }}
        />
      </motion.div>
      <h2 className="h-[70px] text-2xl font-semibold">{header}</h2>
      <motion.p
        variants={appearMotion}
        initial="initial"
        whileInView="animate"
        className="h-[80px] text-[#454B1B] text-lg mb-[15px] mt-[5px]"
      >
        {text}
      </motion.p>
      <h3 className="text-xl font-medium">{language}</h3>
      <motion.p
        variants={appearMotion}
        initial="initial"
        whileInView="animate"
        className="h-[110px] text-[#454B1B] text-lg"
      >
        {languages}
      </motion.p>

      <h3 className="text-xl font-medium h-[60px]">{tool}</h3>
      <div className="h-[60px]">
        {tasks.map((data: any) => {
          return (
            <motion.div
              variants={appearMotion}
              initial="initial"
              whileInView="animate"
              key={data.language}
            >
              <li className="list-none text-[#454B1B] text-lg">
                {data.language}
              </li>
            </motion.div>
          );
        })}
      </div>
      <div className="my-5">
        <h3 className="text-xl font-medium">Certifications</h3>
      </div>
      <div className="flex flex-row gap-[5px] m-auto items-center align-center content-center	mb-0">
        {button && <div>{button}</div>}
        <div>{button2}</div>
      </div>
    </motion.div>
  );
}
