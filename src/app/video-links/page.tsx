'use client';

import React, { useState } from 'react';
import { Play, Clock, Calendar } from 'lucide-react';

// Sample video data
const videos = [
  {
    id: 1,
    title: "Denovo Security - Cybersecurity Video",
    description: "Denovo Security - Cybersecurity Video",
    thumbnail: "../images/video/Denovo Security - Cybersecurity Video.png",
    duration: "01:43",
    date: "2024-10-13",
    url: "https://vimeo.com/995913472"
  },
];

export default function VideoLinks() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4 pt-[160px]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Denovo Security Video Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                {hoveredVideo === video.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300"
                    >
                      <Play className="mr-2" size={20} />
                      Watch Now
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{video.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {video.duration}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {video.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}