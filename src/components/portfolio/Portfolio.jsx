import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Autonomous Test Supervisor",
    img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Multi-agent AI system for eVTOL testing facilities. Built with Python, FastAPI, Docker, and LangChain reasoning loops. A Compliance Agent queries vectorized aviation regulations via RAG while a Telemetry Agent monitors live sensor feeds. Achieved 80% reduction in oversight latency through autonomous decision-making.",
  },
  {
    id: 2,
    title: "Forecorners Private Limited",
    img: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "CEO & Managing Director overseeing Advanced Air Mobility infrastructure. Secured 13,000 sq. meters at Jakkur Aerodrome, orchestrated government consultations for AAM framework authorization, and established strategic MOU with Indian Institute of Science for collaborative research in urban air mobility.",
  },
  {
    id: 3,
    title: "ISRO Chandrayaan-3 Mission",
    img: "https://images.pexels.com/photos/8729472/pexels-photo-8729472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Researcher on mission-critical telemetry and command network for India's lunar program. Focused on data reliability, real-time anomaly detection rooted in ISRO-standard data structures, and secure public project telemetry management.",
  },
  {
    id: 4,
    title: "Flight Path Optimization",
    img: "https://images.pexels.com/photos/3802506/pexels-photo-3802506.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Applied Dijkstra's algorithm variants to simulate urban air mobility flight paths. Manages vertiport congestion and battery thermal management optimization. Includes secure cryptographic handshake for ground-to-air communication preventing MITM attacks on aerospace command signals.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
