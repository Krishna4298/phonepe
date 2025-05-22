"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    src: '/images/banner1.jpg',
    alt: 'Mobile recharge Plans Have Changed! Get New PhonePe Offers On Recharge.'
  },
  {
    id: 2,
    src: '/images/banner2.jpg',
    alt: 'PhonePe ₹100 Cashback on mobile recharge'
  }
];

const PromoBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2">
      <div className="mt-2">
        <div className="swiper-wrapper">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`transition-opacity duration-500 ${
                index === currentBanner ? 'block' : 'hidden'
              }`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={404}
                height={161}
                className="rounded-xl w-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
