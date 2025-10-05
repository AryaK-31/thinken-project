'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import InteractiveCard from './InteractiveCard';

// 🌀 Neon Torus Knot
const NeonTorusKnot = () => {
    const meshRef = useRef(null);

    const getScale = () => (window.innerWidth < 768 ? 0.7 : 1);

    useFrame(({ clock, pointer }) => {
        if (meshRef.current) {
            const elapsed = clock.getElapsedTime();
            meshRef.current.rotation.x = Math.sin(elapsed * 0.2) * Math.PI;
            meshRef.current.rotation.y = Math.cos(elapsed * 0.2) * Math.PI;

            const targetRotation = new THREE.Euler(pointer.y * 0.5, pointer.x * 0.5, 0);
            meshRef.current.rotation.x += (targetRotation.x - meshRef.current.rotation.x) * 0.02;
            meshRef.current.rotation.y += (targetRotation.y - meshRef.current.rotation.y) * 0.02;

            meshRef.current.scale.set(getScale(), getScale(), getScale());
            meshRef.current.position.y = window.innerWidth < 768 ? -0.5 : 0;
        }
    });

    return (
        <TorusKnot ref={meshRef} args={[1.5, 0.3, 300, 20]} position={[0, 0, 0]}>
            <meshStandardMaterial
                wireframe
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={2}
            />
        </TorusKnot>
    );
};

// 🌌 Motion Variants
const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

// 🌌 Header Component
const Header = () => {
    const cards = [
        {
            title: "Innovation",
            description: "Harnessing cutting-edge tech to transform bold ideas into real-world solutions.",
            image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
        },
        {
            title: "Design",
            description: "Fusing art and logic to craft intuitive, engaging digital experiences.",
            image: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
        },
        {
            title: "Engineering",
            description: "Delivering scalable and high-performance systems for global impact.",
            image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
        },
        {
            title: "Collaboration",
            description: "Empowering teams with agile workflows and transparent communication.",
            image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
        },
    ];

    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-t from-black via-black to-cyan-800 -mt-2">

            {/* LEFT SECTION — Text + 3D */}
            <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 h-[50vh] md:h-[90vh] text-center md:text-left ">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[10, 10, 10]} color="#00ffff" />
                        <Suspense fallback={null}>
                            <NeonTorusKnot />
                        </Suspense>
                        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
                    </Canvas>
                </div>

                <motion.div
                    className="relative z-10 max-w-2xl px-4 md:px-0 bg-black/90 p-[1rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textVariants}
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-wide mb-4"
                        variants={textVariants}
                    >
                        Engineering the Future
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 text-sm sm:text-base md:text-lg mb-6"
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                    >
                        We’re an innovation-driven team combining technology, creativity, and strategy
                        to design experiences that define the future.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 sm:px-6 sm:py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-md shadow-cyan-400/40 hover:shadow-cyan-400/60 transition"
                        variants={buttonVariants}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>

            {/* RIGHT SECTION — 2x2 Grid of 3D Cards */}
            <div className="z-10 w-full md:w-1/2 flex flex-col items-center py-6 px-4 md:py-[1.5rem] md:px-[4rem]">
                <motion.h2
                    className="text-xl sm:text-2xl text-center font-semibold mb-4 font-orbitron uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    Industry Specializations
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                    {cards.map((card, i) => (
                        <InteractiveCard
                            key={i}
                            {...card}
                            motionProps={{
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: { once: false, amount: 0.3 },
                                variants: cardVariants,
                                transition: { delay: i * 0.15 },
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
