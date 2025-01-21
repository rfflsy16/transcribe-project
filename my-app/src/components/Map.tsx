"use client";

import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";

export default function CustomMap() {
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set a default location if geolocation fails
          setLocation([50.879, 4.6997]);
        }
      );
    } else {
      // Set a default location if geolocation is not supported
      setLocation([50.879, 4.6997]);
    }
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
      <Map
        defaultCenter={location}
        defaultZoom={11}
        boxClassname="w-full h-full"
      >
        <Marker width={50} anchor={location} />
      </Map>
    </div>
  );
}

/* 
  Map Section
        <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              Our Locations
            </h2>
            <CustomMap />
          </div>
        </AnimatedSection> 
*/
