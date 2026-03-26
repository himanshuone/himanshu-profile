import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// 🔥 icons (images)
import github from "../assets/github.png";
import leet from "../assets/leet.png";
import hackerrank from "../assets/hackerrank.png";
import gfg from "../assets/gfg.png";

// 🔥 icons (react-icons)
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaMediumM } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

// ---------------- FEEDBACK CARD ----------------
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// ---------------- MAIN COMPONENT ----------------
const Feedbacks = () => {
  const profiles = [
    {
      name: "github",
      image: github,
      link: "https://github.com/himanshuone",
    },
    {
      name: "leetcode",
      image: leet,
      link: "https://leetcode.com/u/himanshuone/",
    },
    {
      name: "hackerrank",
      image: hackerrank,
      link: "https://www.hackerrank.com/profile/himanshuone",
    },
    {
      name: "geeksforgeeks",
      image: gfg,
      link: "https://www.geeksforgeeks.org/profile/himanshuone",
    },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      
      {/* ---------- TESTIMONIAL HEADER ---------- */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* ---------- TESTIMONIAL CARDS ---------- */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>

      {/* ---------- MORE SECTION HEADER ---------- */}
      <div className={`flex items-center justify-center bg-gray-300 rounded-2xl ${styles.padding} min-h-[180px] mt-10`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Explore more</p>
          <h2 className={styles.sectionHeadText}>More.</h2>
        </motion.div>
      </div>

      {/* ---------- PROFILE CARDS ---------- */}
      <div className={`mt-16 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-6`}>
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.name}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="bg-black-200 p-6 rounded-2xl flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition"
            onClick={() => window.open(profile.link, "_blank")}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-3 text-white text-[14px] font-medium capitalize">
              {profile.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ---------- SOCIAL SECTION HEADER ---------- */}
      <div className={`flex items-center justify-center bg-red-300 rounded-2xl ${styles.padding} min-h-[180px] mt-10`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Social's.</h2>
        </motion.div>
      </div>

      {/* ---------- SOCIAL CARDS ---------- */}
      <div className={`mt-16 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-6`}>

        {/* LinkedIn (disabled) */}
        <motion.div
          variants={fadeIn("up", "spring", 0 * 0.3, 0.75)}
          className="bg-black-200 p-6 rounded-2xl flex flex-col items-center opacity-40 cursor-not-allowed"
        >
          <CiLinkedin className="w-16 h-16 text-white" />
          <p className="mt-3 text-white text-[14px] font-medium">Linkedin</p>
        </motion.div>

        {/* Medium */}
        <motion.div
          variants={fadeIn("up", "spring", 1 * 0.3, 0.75)}
          className="bg-black-200 p-6 rounded-2xl flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition"
          onClick={() => window.open("https://medium.com/@himanshuone", "_blank")}
        >
          <FaMediumM className="w-16 h-16 text-white" />
          <p className="mt-3 text-white text-[14px] font-medium">Medium</p>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeIn("up", "spring", 2 * 0.3, 0.75)}
          className="bg-black-200 p-6 rounded-2xl flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition"
          onClick={() => window.open("mailto:himanshucome1@gmail.com")}
        >
          <BiLogoGmail className="w-16 h-16 text-white" />
          <p className="mt-3 text-white text-[14px] font-medium">Email</p>
        </motion.div>

        {/* Instagram (disabled) */}
        <motion.div
          variants={fadeIn("up", "spring", 3 * 0.3, 0.75)}
          className="bg-black-200 p-6 rounded-2xl flex flex-col items-center opacity-40 cursor-not-allowed"
        >
          <CiInstagram className="w-16 h-16 text-white" />
          <p className="mt-3 text-white text-[14px] font-medium">Instagram</p>
        </motion.div>

      </div>

    </div>
  );
};

export default SectionWrapper(Feedbacks, "");