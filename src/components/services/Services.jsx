import { useRef, Suspense, lazy } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const ServiceScene = lazy(() => import("../3d/ServiceScene"));

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          CEO at Forecorners Private Limited • Expert in Aerospace Systems
          <br /> Advanced Air Mobility Infrastructure & Agentic AI Architecture
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Strategic</motion.b> Excellence
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>In Complex</motion.b> Systems.
          </h1>
          <button>EXPERTISE</button>
        </div>
      </motion.div>
      <div className="canvasWrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceScene height={400} />
        </Suspense>
      </div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Agentic AI Architecture</h2>
          <p>
            Multi-agent AI systems using LangChain, LangGraph, and LLMs. Built autonomous test supervisors for eVTOL facilities automating safety protocols and telemetry monitoring with 80% latency reduction.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AAM Infrastructure</h2>
          <p>
            Advanced Air Mobility expertise: secured 13,000 sq. meters at Jakkur Aerodrome, led government consultations for AAM framework authorization, and strategic alliance with Indian Institute of Science for urban mobility research.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Aerospace Systems</h2>
          <p>
            ISRO researcher on Chandrayaan-3 telemetry and command networks. Expert in real-time anomaly detection, secure ground-to-air communication, and cryptographic protocols for mission-critical aerospace operations.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Systems & Strategy</h2>
          <p>
            Systems architect with experience in graph optimization for flight path planning, international trade management, and regulatory navigation. 400+ LeetCode problems in graph theory and dynamic programming.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
