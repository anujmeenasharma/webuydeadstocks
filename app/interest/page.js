'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Wrench, Settings, Home, Laptop, Anchor, ShoppingBag, Recycle } from 'lucide-react';
import Image from 'next/image';
import Category from './components/category';
import { categories } from '@/lib/data';
import { services } from '@/lib/data';




export default function Interest() {


  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section  id="categories">
        <div className="relative h-[50vh] w-full">
                    <Image
                        src="/images/categories/c1.webp"
                        alt="Some title"
                        fill
                        className="object-cover"
                        priority
                    />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
                
                {/* Content overlay */}
                <div className="relative h-full w-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
                    <Link 
                        href="/blogs" 
                        className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors text-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>
                    
                    <div className="text-white text-lg mb-3 tracking-wide">
                        Dead Stock Blog
                    </div>
                    
                    <h1 className="text-white text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight max-w-5xl">
                        Some title
                    </h1>
                </div>
        </div>
        <Category categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <section className="bg-white py-8 border-t border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          OUR SERVICES
        </h2>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-3">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="inline-block text-sm md:text-base text-green-600 hover:text-green-700 hover:underline transition-colors"
            >
              {service.name}
              {index < services.length - 1 && (
                <span className="text-gray-400 ml-3">|</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}