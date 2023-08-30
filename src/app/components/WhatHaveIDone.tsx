"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "./Data";
import DotRing from "./DotRing/DotRing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { parentTextAnimation, upMotion, upMotionx2 } from "./Animation";

export default function WhatHaveIDone() {
  const [projectImage, setProjectImage] = useState("");
  const [selectedProject, setProject] = useState<any>();
  const closeModal = () => {
    setProject(null);
  };
  return (
    <>
      {selectedProject && (
        <Modal
          name={selectedProject.name}
          description={selectedProject.description}
          url={selectedProject.url}
          img={selectedProject.img}
          github={selectedProject.github}
          figma={selectedProject.figma}
          stacks={selectedProject.stacks}
          closeModal={closeModal}
        />
      )}
      <motion.section
        variants={parentTextAnimation}
        initial="initial"
        whileInView="animate"
        className="z-1"
      >
        <div className="bg-vantaBlack pt-[50px] pb-[83px] px-5 md:px-20">
          <motion.h2
            variants={upMotion}
            initial="initial"
            whileInView="animate"
            className="text-[40px] py-[33px] font-medium text-[#ddd] text-center mb-8"
          >
            What have I done?
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-10 h-full md:h-[610px]">
            <div className="project_image_container hidden md:block basis-1/2 relative">
              {projectImage && (
                <Image src={projectImage} layout="fill" alt="project" />
              )}
            </div>
            <DotRing />
            <motion.ul
              variants={upMotionx2}
              initial="initial"
              whileInView="animate"
              className="projects basis-1/2 h-full md:h-[610px] overflow-auto"
            >
              {PROJECTS.map((project, index) => (
                <li
                  key={index}
                  className="text-white flex items-center justify-between py-6 border-y-2 border-white border-solid pr-2"
                  onMouseOver={() => setProjectImage(project.img)}
                  onMouseLeave={() => setProjectImage("")}
                  onClick={() => setProject(project)}
                >
                  <span className="flex left_section gap-4">
                    <span className="hidden arrow_icon">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className=""
                        style={{ color: "#fff", width: 24 }}
                      />
                    </span>
                    <span>{project.name}</span>
                  </span>

                  <span className="hidden md:inline">{project.type}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="bg-contact_me_img bg-fixed bg-cover no-repeat min-h-[400px]"></div>
      </motion.section>
    </>
  );
}
