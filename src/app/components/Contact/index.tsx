"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { parentTextAnimation, upMotion } from "@/Animation";
import Loader from "@/Loader/Loader";

export default function Contact() {
  const inputStyle = " w-full border-0 outline-0 text-white bg-vantaBlack p-5";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    feedback: "",
  };
  function submitAlert() {
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("* Please enter a name"),
    email: Yup.string()
      .email()
      .required("* Please enter a valid email account"),
    feedback: Yup.string().required("* Please enter your feedback"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      axios
        .post("api/contact", {
          name: values.name,
          email: values.email,
          feedback: values.feedback,
        })
        .then((response) => {
          setIsSubmitted(true);
          resetForm({ values: initialValues });
          submitAlert();
        })
        .catch((error) => {
          const errorMsg = error.message;
          console.log(errorMsg, "errorMsg");
        })
        .finally(() => setIsLoading(false));
    },
  });

  return (
    <motion.div
      variants={parentTextAnimation}
      initial="initial"
      whileInView="animate"
      className="flex flex-col items-center py-[50px] px-5 md:px-0"
    >
      <motion.h2
        variants={upMotion}
        initial="initial"
        whileInView="animate"
        className="text-[40px] text-center text-[#666] font-bold py-[33px] mb-8"
      >
        How to contact Me?
      </motion.h2>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[340px] md:max-w-[700px] w-full"
      >
        <div className="flex flex-col gap-4 content-center m-auto">
          <motion.div
            variants={upMotion}
            initial="initial"
            whileInView="animate"
            className=""
          >
            <input
              className={`rounded-t-lg ${inputStyle}`}
              id="name"
              name="name"
              type="text"
              placeholder="Max Payne"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-error">{formik.errors.name}</div>
            )}
          </motion.div>

          <motion.div
            variants={upMotion}
            initial="initial"
            whileInView="animate"
            className=""
          >
            <input
              className={inputStyle}
              id="email"
              name="email"
              type="email"
              placeholder="maxpayne@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-error">{formik.errors.email}</div>
            )}
          </motion.div>

          <motion.div
            variants={upMotion}
            initial="initial"
            whileInView="animate"
            className=""
          >
            <textarea
              className={`${inputStyle} rounded-bl-lg`}
              id="feedback"
              name="feedback"
              rows={6}
              placeholder="How can I help ?"
              onChange={formik.handleChange}
              value={formik.values.feedback}
            />
            {formik.errors.feedback && formik.touched.feedback && (
              <div className="text-error">{formik.errors.feedback}</div>
            )}
          </motion.div>

          {isSubmitted && (
            <div className="bg-[#4BB543] border-0 font-medium text-center">
              <p className="text-white">
                Your message was sent successfully. Thanks!
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <motion.button
              variants={upMotion}
              initial="initial"
              whileInView="animate"
              disabled={isLoading}
              className="rounded-br-lg min-w-[100px] font-bold border-[3px] border-solid border-vantaBlack px-5 py-2.5 cursor-pointer hover:border-white hover:bg-vantaBlack hover:text-white disabled:bg-vantaBlack disabled:text-white"
              type="submit"
            >
              {isLoading ? <Loader /> : "SUBMIT"}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
