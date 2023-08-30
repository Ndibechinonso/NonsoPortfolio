"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Resume from "./Icons/Resume";

export default function HeroSection() {
  return (
    <section
      id="name_section"
      className="relative h-screen w-screen bg-vantaBlack hero_section"
    >
      <a
        href={"assets/Ndibe_Chinonso_CV.pdf"}
        download
        target="blank"
        rel="noopener noreferrer"
        className="fixed top-[20px] right-[20px] z-10"
      >
        <Resume />
      </a>
      <div className="hidden xl:block">
        <video
          width="100%"
          height="100%"
          src="../../../assets/portfolio_hero_vid.mp4"
          autoPlay={true}
          loop={true}
        ></video>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-center flex flex-col items-center min-h-[500px] xl:min-h-[300px]">
        <h1 className="text-white xl:text-black font-bold text-6xl w-auto mb-10">
          <div className="bg-transparent xl:bg-[#d3d3d3] header">
            Ndib. E. Chinonso
          </div>
        </h1>
        <h2 className="text-3xl font-medium text-white">Software Developer</h2>
        <div className="mt-4 hero_arrow">
          <Link href="#aboutMe">
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              className="fa fa-chevron-circle-down fa-3x cursor-pointer"
              style={{ color: "#fff" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
