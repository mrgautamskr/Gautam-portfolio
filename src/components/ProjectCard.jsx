import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Project Image */}
      <div className="project-image" style={{
        background: 'linear-gradient(135deg, #FEE2E2, #FECACA)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        minHeight: 180
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<span style="font-size:3rem">📊</span>`;
          }}
        />
      </div>

      {/* Content */}
      <div className="project-content">
        <h4 className="project-title">{project.title}</h4>
        <p className="project-desc">{project.description}</p>

        {/* Tech Tags */}
        <div className="tech-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            <HiExternalLink /> Live Demo
          </a>
          <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            <HiCode /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}