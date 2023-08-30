import Instagram from "@/Icons/Instagram";
import Twitter from "@/Icons/Twitter";
import Linkedin from "@/Icons/Linkedin";
import Github from "@/Icons/Github";
import Email from "@/Icons/Email";

const Footer = () => {
  return (
    <footer id="footer" className="bg-vantaBlack text-white">
      <div className="mx-[7%] sm:text-center pl-0 pr-0 sm:my-0 flex flex-col mx-[10$] my-0 p-6 pt-[5px] items-center md:flex-row md:p-[30px] font-light text-base sm:text-lg">
        <p className="mb-0 mb-2.5">
          Copyright © 2021{" "}
          <span className="font-medium sm:font-semibold">
            <a href="#navbar">Nonso Ndibe.</a>
          </span>
        </p>
        <ul className="flex flex-row m-auto md:m-0 md:ml-auto gap-[25px] text-[22px]">
          <li className="hover:rotate-45 hover:transition-all">
            <a
              href="https://www.instagram.com/edwardkolbe/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
          <li className="hover:rotate-45 hover:transition-all">
            <a
              href="https://twitter.com/pavlovpiper"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </li>
          <li className="hover:rotate-45 hover:transition-all">
            <a
              href="https://linkedin.com/in/ndibechinonso"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li className="hover:rotate-45 hover:transition-all">
            <a
              href="https://github.com/Ndibechinonso"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </li>
          <li className="hover:rotate-45 hover:transition-all">
            <a href="mailto:edwardndibe@gmail.com?subject = Feedback&body = Message">
              <Email />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
