'use client';

import React, { useState } from 'react'
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react'
import { link, read } from 'fs';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise software and what it means for businesses.",
    // author: "Jane Doe",
    date: "2024-10-13",
    readTime: 8,
    category: "Artificial Intelligence",
    // image: "./images/blog/the-future-of-ai-in-enterprise-software/ai-software.png",
    link: "/blog/the-future-of-ai-in-enterprise-software"
  },
  {
    id: 2,
    title: "Casio Ransomware Attack Highlights Data Security Concerns",
    excerpt: "Casio has confirmed a data breach due to a ransomware attack, exposing customer data and underscoring the urgent need for robust cybersecurity measures.",
    Date: "2024-10-14",
    readTime: 5,
    category: "Cybersecurity",
    // image: "./images/blog/casio/casio.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7252328711092334593"
  }
]

const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === "All" || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 pt-[160px]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Denovo Security Blog
        </h1>
        
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Featured Post</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={blogPosts[0].image} alt={blogPosts[0].title} />
              </div> */}
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blogPosts[0].category}</div>
                <a href="/blog/the-future-of-ai-in-enterprise-software" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">{blogPosts[0].title}</a>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{blogPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="ml-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime} min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter and Search */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200
              mt-1 block w-full pl-3 pr-10 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Posts
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or content"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* <img className="h-48 w-full object-cover" src={post.image} alt={post.title} /> */}
              <div className="p-6">
                <div className="flex items-center text-sm font-medium text-indigo-500 mb-1">
                  <Tag className="h-4 w-4 mr-1" />
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <a 
                  target='_blank'
                  href={post.link}
                  className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read More
                  <ChevronRight className="ml-2 -mr-0.5 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
              <span className="sr-only">Previous</span>
              <ChevronRight className="h-5 w-5 transform rotate-180" />
            </a>
            <a
              href="#"
              aria-current="page"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              1
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              2
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              8
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              9
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              10
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
