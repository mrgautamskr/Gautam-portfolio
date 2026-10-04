import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ skill, index }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (skill.percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 100);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <motion.div
      ref={ref}
      style={{ textAlign: 'center' }}
      initial={{ opacity: 0, y: 20 }}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="skill-ring">
        <svg viewBox="0 0 100 100">
          <circle className="ring-bg" cx="50" cy="50" r="45" />
          <circle
            className="ring-progress"
            cx="50"
            cy="50"
            r="45"
            stroke={skill.color}
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            style={{ transition: 'stroke-dashoffset 1.2s ease' }}
          />
        </svg>
        <div className="ring-text">{skill.percentage}%</div>
      </div>
      <div className="skill-label">{skill.name}</div>
    </motion.div>
  );
}