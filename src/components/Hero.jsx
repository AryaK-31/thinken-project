'use client';

import { Search, User, Share2, Award, Headphones } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    const navItems = [
        { label: 'About', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'Contact', href: '#' },
    ]

    const features = [
        {
            icon: Share2,
            title: "Comprehensive Installation",
            description: "Commissioning Support Included",
        },
        {
            icon: Award,
            title: "ASME-Compliant",
            description: "ISO 9001:2015 Certified ",
        },
        {
            icon: Headphones,
            title: "Dedicated Engineering Support",
            description: "Expert Technical Consultation",
        },
    ];

    return (
        <div className='relative h-screen w-auto overflow-hidden'>
            {/* 🔹 Background Video with subtle zoom animation */}
            <motion.video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="videos/bgVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* 🔹 Dark Gradient Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/95 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false, amount: 0.3 }}
            ></motion.div>

            {/* 🔹 Page Content */}
            <div className='relative z-20 h-full w-full py-[1.5rem] px-[4rem]'>
                <header>
                    <div className='nav-top text-white text-sm font-semibold flex items-center justify-between'>
                        <motion.p
                            className='tracking-wide'
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Free shipping on orders over $75. Call us 123-456-789
                        </motion.p>

                        <div className='flex items-center gap-8'>
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-cyan-400 transition-colors duration-300" />
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="pl-10 w-64 h-9 bg-transparent border border-white rounded-full focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                                />
                            </div>
                            <motion.button
                                className="flex items-center gap-2 group"
                                whileHover={{ scale: 1.05, x: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <User className="h-4 w-4 group-hover:text-cyan-400 transition-colors duration-300" />
                                <p className="group-hover:text-cyan-400 transition-colors duration-300">Log in</p>
                            </motion.button>
                        </div>
                    </div>

                    <div className='nav-divider h-[0.1px] mt-8 bg-white'></div>

                    <div className='nav-bottom flex items-center justify-between mt-4'>
                        <motion.div
                            className='text-white flex items-center gap-2'
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="text-2xl font-orbitron font-bold tracking-widest text-white">
                                <span className="text-cyan-400">Q</span>UANTUM
                            </div>
                        </motion.div>

                        <nav className='flex gap-6 font-semibold'>
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 font-orbitron"
                                    whileHover={{ scale: 1.1, color: "#00ffff" }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>
                    </div>
                </header>

                <main className='absolute top-[30%] text-white flex flex-col gap-8'>
                    <motion.h2
                        className='text-[1.8rem]'
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Engineering Solution for a sustainable tomorrow
                    </motion.h2>

                    <motion.h1
                        className='text-[3.5rem] font-bold leading-tight'
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Engineer Your Sustainable Future. <br /> Custom Solutions Available
                    </motion.h1>

                    <motion.h2
                        className='text-xl font-semibold tracking-wide font-orbitron uppercase'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Precision | Innovation | Excellence.
                    </motion.h2>

                    <motion.button
                        className="self-start bg-cyan-400 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Shop Now
                    </motion.button>

                    <div className="container mx-auto mt-[2rem]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 md:gap-6 group cursor-pointer"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex-shrink-0 text-cyan-400 group-hover:rotate-12 transition-transform duration-500">
                                        <feature.icon
                                            className="w-12 h-12 md:w-14 md:h-14"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div className="flex-1 relative">
                                        <h3 className="font-medium text-lg md:text-xl mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="italic text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {index < features.length - 1 && (
                                        <div className="hidden md:block w-[2px] h-16 bg-cyan-400 ml-auto group-hover:h-20 transition-all duration-500" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Hero
