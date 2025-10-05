'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = ({ title, description, image, motionProps }) => {
    const cardRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const text = textRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -20;
        const rotateY = ((x / rect.width) - 0.5) * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

        if (text) {
            text.style.transform = `translateX(${rotateY / 4}px) translateY(${rotateX / 4}px)`;
        }
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const text = textRef.current;

        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        if (text) text.style.transform = `translateX(0) translateY(0)`;
    };

    return (
        <motion.div
            {...motionProps} // Pass scroll animation props here
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                relative
                flex flex-col
                bg-black/20 
                backdrop-blur-xl 
                border border-cyan-400/40
                rounded-2xl
                p-4 
                text-left 
                text-white 
                shadow-[0_0_20px_rgba(0,255,255,0.3)]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]
                transition-all 
                duration-200 
                ease-out
                cursor-pointer
                h-auto
            "
        >
            {/* Image at top */}
            {image && (
                <div className="w-full h-[2/5] rounded-xl overflow-hidden mb-3">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Text content */}
            <div ref={textRef} className="relative z-10 flex-1">
                <h3 className="text-lg font-extrabold mb-2 text-cyan-400 tracking-wide">
                    {title}
                </h3>
                <p className="text-sm text-gray-300">{description}</p>
            </div>

            {/* Neon glow border */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-20 animate-pulse pointer-events-none"></div>
        </motion.div>
    );
};

export default InteractiveCard;
