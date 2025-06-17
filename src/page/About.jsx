import React from 'react';
import Footer from '../Footer/Footer';

const timelineData = [
  {
    year: '2025',
    title: 'ROG Strix',
    description:
      'All Strix laptops sport the new NVIDIA GeForce RTX 50-series (up to RTX 5090) GPUs, paired with the latest AMD Ryzen 9 or Intel Core Ultra 9 CPUs. They run Windows 11, feature DDR5 RAM, PCIe 4.0 storage, and high-refresh “ROG Nebula” displays.',
  },
  {
    year: '1998',
    title: 'iMac',
    description:
      'iMac is a family of all-in-one Mac desktop computers by Apple. It debuted in August 1998 and has evolved through seven distinct forms.',
  },
  {
    year: '2001',
    title: 'iPod',
    description:
      'The iPod was Apple’s portable media player line. Launched in 2001 and discontinued in 2022, over 450 million units were sold.',
  },
  {
    year: '2007',
    title: 'iPhone',
    description:
      'The iPhone, Apple’s flagship smartphone, was introduced in 2007 by Steve Jobs. Over 2.2 billion iPhones have been sold as of 2018.',
  },
  {
    year: '2015',
    title: 'Apple Watch',
    description:
      'Apple Watch combines fitness tracking, health capabilities, and wireless communication. It integrates seamlessly with iOS devices.',
  },
];

export default function About() {
  return (
    <div className="mt-10 px-6 md:px-10 bg-gray-50 min-h-screen">
      <h3 className="text-3xl font-mono font-bold mb-3">About Us</h3>
      <p className="text-base text-gray-600 mb-10 max-w-2xl">
        Here's a timeline showcasing the evolution of some iconic tech products, including our powerful ROG Strix laptops.
      </p>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((item, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className={`${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'} mb-10`}>
              <time className="font-mono italic text-sm text-gray-500">{item.year}</time>
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>

      
    </div>
  );
}
