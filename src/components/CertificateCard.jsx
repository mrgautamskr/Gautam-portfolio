import React from 'react';
import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi';

export default function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      className="certificate-item"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="certificate-icon">
        <HiDocumentText size={20} />
      </div>
      <div className="certificate-info">
        <div className="certificate-name">{certificate.name}</div>
        <div className="certificate-provider">{certificate.provider}</div>
      </div>
      <div className="certificate-date">{certificate.date}</div>
    </motion.div>
  );
}