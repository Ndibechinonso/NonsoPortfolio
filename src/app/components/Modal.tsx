"use client";

import GitButton from "./CustomisedButton";

interface ModalProps {
  name: String;
  description: String;
  url: String;
  img: String;
  github: String;
  figma: String;
  stacks: String;
  closeModal: any;
}

const Modal = ({
  name,
  description,
  url,
  figma,
  github,
  stacks,
  closeModal,
}: ModalProps) => {
  return (
    <>
      <div
        className="modal_overlay fixed top-0 bg-overlay_bg z-50 w-[100vw] h-[100vh] overflow-hidden"
        onClick={() => closeModal()}
      >
        <div
          className="modal_container bg-white absolute w-[90%] md:w-[50%] h-[50%] top-0 bottom-0 right-0 left-0 m-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal_header text-xl text-end p-2">
            <span className="p-2 cursor-pointer" onClick={() => closeModal()}>
              x
            </span>
          </div>
          <div className="flex flex-col modal_body text-center h-[90%] p-4 md:p-10">
            <h2 className="text-2xl py-4">{name}</h2>
            <p className="text-center text-xl mb-4">{description}</p>
            <p className="text-xl">Built with {stacks.toString()}</p>
            <div className="flex flex-row justify-between mt-auto mb-4">
             {(figma || github) && <GitButton
                href="pppp"
                className="bg-vantaBlack text-white rounded-[5px] px-[30px] py-[15px]"
                title=""
                link={figma || github}
                icon="figma"
              />}
              <GitButton
                href="jjjj"
                className="bg-vantaBlack text-white rounded-[5px] px-[30px] py-[15px]"
                title=""
                link={url}
                icon=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
