import React from 'react';
import ServiceCard from '../components/ServiceCard';

const products = [
    {
        image: 'https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg',
        title: 'Process Equipment Manufacturing',
        subtitle: 'Custom-built reactors, pressure vessels, distillation columns, evaporators, dryers, condensers, fermenters, and heat exchangers, designed to meet strict ASME and global standards...',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 3,
    },
    {
        image: 'https://images.pexels.com/photos/9799727/pexels-photo-9799727.jpeg',
        title: 'CO₂ Recovery & Wastewater Treatment',
        subtitle: 'Capture and recycle CO₂ from industrial processes with high purity for reuse, reducing emissions and costs. Advanced treatment solutions ensure efficient wastewater management, regulatory compliance, and environmental sustainability.....',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 4,
    },
    {
        image: 'https://images.pexels.com/photos/14539148/pexels-photo-14539148.jpeg',
        title: 'Material Handling Systems',
        subtitle: 'Advanced design and supply of conveyors, mixers, agitators, storage hoppers, silos, and aggregate handling for smooth, energy-efficient industrial operations.....',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 4,
    },
    {
        image: 'https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg',
        title: 'Process Equipment Manufacturing',
        subtitle: 'Custom-built reactors, pressure vessels, distillation columns, evaporators, dryers, condensers, fermenters, and heat exchangers, designed to meet strict ASME and global standards...',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 3,
    },
    {
        image: 'https://images.pexels.com/photos/9799727/pexels-photo-9799727.jpeg',
        title: 'CO₂ Recovery & Wastewater Treatment',
        subtitle: 'Capture and recycle CO₂ from industrial processes with high purity for reuse, reducing emissions and costs. Advanced treatment solutions ensure efficient wastewater management, regulatory compliance, and environmental sustainability.....',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 4,
    },
    {
        image: 'https://images.pexels.com/photos/14539148/pexels-photo-14539148.jpeg',
        title: 'Material Handling Systems',
        subtitle: 'Advanced design and supply of conveyors, mixers, agitators, storage hoppers, silos, and aggregate handling for smooth, energy-efficient industrial operations.....',
        date: 'Jun 5, 2023',
        comments: 0,
        likes: 4,
    },
];

export default function Services() {
    return (
        <div className="bg-black min-h-screen px-[4rem] flex flex-col justify-center bg-gradient-to-br from-black via-black to-cyan-800">
            <h1 className="text-white text-4xl font-orbitron mb-8">Services</h1>
            <div
                className="flex gap-4 overflow-x-auto w-full pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900"
            >
                {products.map((p, i) => (
                    <ServiceCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
}
