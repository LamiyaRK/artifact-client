import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedText = ({ text, as = "h1", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const Tag = as;

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <div
          key={i}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            style={{ display: "inline-block", willChange: "transform" }}
            initial={{ y: "100%" }}
            animate={
              isVisible
                ? {
                    y: 0,
                    transition: {
                      delay: i * 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 0.8, // I reduced duration for smoother animation
                    },
                  }
                : { y: "100%" }
            }
          >
            {word + (i !== words.length - 1 ? "\u00A0" : "")}
          </motion.div>
        </div>
      ))}
    </Tag>
  );
};

export default AnimatedText;
