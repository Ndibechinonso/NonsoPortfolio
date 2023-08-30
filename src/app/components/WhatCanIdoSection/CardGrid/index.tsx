"use client";
import {
  leftMotion,
  parentTextAnimation,
  rightMotion,
  upMotion,
} from "@/Animation";
import "./CardGrid.css";
import Card from "@/Card";
import CustomisedButton from "@/CustomisedButton";
import { TOOLS, SOFTTOOLS, DEVTOOLS } from "@/Data";
import {
  faLaptopCode,
  faCode,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function CardGrid() {
  const gitButtonClass = `bg-vantaBlack text-white rounded-[5px] px-[30px] py-[15px]`;
  return (
    <motion.div
      variants={parentTextAnimation}
      initial="initial"
      whileInView="animate"
      className="cardsDiv"
    >
      <motion.div
        variants={rightMotion}
        initial="initial"
        whileInView="animate"
      >
        <Card
          tasks={DEVTOOLS}
          link={faLaptopCode}
          header="Software Developer"
          text="I also love building APIs and servers for web applications."
          language="Stacks"
          languages="NodeJs, MongoDb, Cypress."
          tool="Tools and Frameworks"
          certification="Certifications"
          button={
            <CustomisedButton
              className={gitButtonClass}
              title="Js Algorithms and Data Structures"
              link="https://www.freecodecamp.org/certification/maxkolbe/javascript-algorithms-and-data-structures"
              icon="freecodeCamp"
            />
          }
          button2={
            <CustomisedButton
              className={gitButtonClass}
              title="Backend Development and APIs"
              link="https://www.freecodecamp.org/certification/maxkolbe/back-end-development-and-apis"
              icon="freecodeCamp"
            />
          }
        />
      </motion.div>
      <motion.div variants={upMotion} initial="initial" whileInView="animate">
        <Card
          tasks={SOFTTOOLS}
          link={faCode}
          header="Web Developer"
          text="Building beautiful, functional & responsive websites."
          language="Stacks"
          languages="HTML5, CSS, SASS, TailwindCSS, TypeScript, JavaScript, ReactJS, NextJs, Angular."
          tool="Tools and Frameworks"
          certification="Certifications"
          button={
            <CustomisedButton
              className={gitButtonClass}
              title="Responsive Web Designs"
              link="https://www.freecodecamp.org/certification/maxkolbe/responsive-web-design"
              icon="freecodeCamp"
            />
          }
          button2={
            <CustomisedButton
              className={gitButtonClass}
              title="Frontend Libraries"
              link="https://www.freecodecamp.org/certification/maxkolbe/front-end-development-libraries"
              icon="freecodeCamp"
            />
          }
        />
      </motion.div>
      <motion.div variants={leftMotion} initial="initial" whileInView="animate">
        <Card
          tasks={TOOLS}
          link={faImages}
          header="Digital Artist"
          text="Creating minimal designs that are visually appealing to users."
          language="What I Enjoy"
          languages="Web, Photoshop, Nature."
          tool="Tools"
          certification="Certifications"
          button2={
            <CustomisedButton
              className={gitButtonClass}
              title="Adobe Photoshop CC"
              link="https://drive.google.com/file/d/1DaWX34hsatfuEweTGodkxxQXZrg3Rm7n/view?usp=sharing"
              icon="googleDrive"
            />
          }
        />
      </motion.div>
    </motion.div>
  );
}
