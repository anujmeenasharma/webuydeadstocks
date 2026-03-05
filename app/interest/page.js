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
    <div  id="categories" className='h-fit w-full relative'>
        <div className="relative h-[50vh] w-full">
                    <Image
                        src="/images/carrer.webp"
                        alt="Some title"
                        fill
                        className="object-cover object-[50%_4 0%]"
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
                    
                    <h1 className="text-white text-6xl sm:text-6xl lg:text-6xl font-medium leading-tight max-w-5xl">
                        Our Interest
                    </h1>

                    <div className="text-white text-lg mb-3 tracking-wide max-w-5xl">
                        We purchase a wide range of used and unused surplus, overstock or dead inventory and scrap from multiple industries, including manufacturing, construction, IT and retail. Discover the stocks we love.
                    </div>
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
    </div>
  );
}