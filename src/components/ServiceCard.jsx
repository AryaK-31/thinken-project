'use client';
import React, { useRef } from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const ServiceCard = ({ image, title, subtitle, date, comments, likes }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6; // max 6deg tilt
    const rotateY = ((centerX - x) / centerX) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className="service-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-card-content">
        <div className="service-card-date">{date}</div>
        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-subtitle">{subtitle}</p>
        <div className="service-card-footer">
          <div className="flex items-center gap-1">
            <MessageCircle size={14} className="text-cyan-400" /> {comments}
          </div>
          <div className="flex items-center gap-1">
            <Heart size={14} className="text-cyan-400" /> {likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
