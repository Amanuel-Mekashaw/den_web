'use client';

import React, { useState } from 'react';
import { FileText, Calendar, Download, Search } from 'lucide-react';

// Sample paper data
const papers = [
  {
    id: 1,
    title: "Cyber Security, Cyber Threats, Implications and Future Perspectives: A Review",
    authors: "Diptiben Ghelani",
    date: "2023-05-15",
    tags: ["cyber", "securitycyber", "threatsimplicationsweb"],
    description: "",
    url: "https://www.techrxiv.org/doi/full/10.22541/au.166385207.73483369"
  },
  // {
  //   id: 2,
  //   title: "Blockchain-based Solutions for IoT Security Challenges",
  //   authors: "Alice Johnson, Bob Williams",
  //   date: "2023-06-22",
  //   description: "An in-depth analysis of how blockchain technology can address security and privacy concerns in Internet of Things (IoT) ecosystems.",
  //   url: "/papers/blockchain-iot-security.pdf"
  // },
  // {
  //   id: 3,
  //   title: "Quantum Cryptography: Preparing for the Post-Quantum Era",
  //   authors: "Charlie Brown, Diana Clark",
  //   date: "2023-07-10",
  //   description: "This research paper discusses the implications of quantum computing on current cryptographic methods and proposes quantum-resistant algorithms.",
  //   url: "/papers/quantum-cryptography.pdf"
  // },
  // {
  //   id: 4,
  //   title: "Zero Trust Architecture: Implementation Strategies and Challenges",
  //   authors: "Eva Green, Frank White",
  //   date: "2023-08-05",
  //   description: "A comprehensive study on the principles of Zero Trust Architecture and its practical implementation in enterprise environments.",
  //   url: "/papers/zero-trust-architecture.pdf"
  // },
  // {
  //   id: 5,
  //   title: "AI-Driven Cybersecurity: Opportunities and Ethical Considerations",
  //   authors: "Grace Lee, Henry Davis",
  //   date: "2023-09-18",
  //   description: "This paper examines the role of artificial intelligence in enhancing cybersecurity measures while addressing the ethical implications of AI-driven security systems.",
  //   url: "/papers/ai-driven-cybersecurity.pdf"
  // }
];

export default function Papers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPapers = papers.filter(paper =>
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4 pt-[200px]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Research Papers
        </h1>
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search papers..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-6">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{paper.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{paper.authors}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {paper.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{paper.description}</p>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                <FileText className="mr-2 h-5 w-5" />
                Read Paper
              </a>
              {/* <a
                href={paper.url}
                download
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out ml-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a> */}
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No papers found matching your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}