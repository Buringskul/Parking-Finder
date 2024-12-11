'use client';
import { Hero } from './components/Hero';
import { Search } from './components/Search';
import { useState, React } from 'react';
import { Map } from './components/Map'; // Import the Map component

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  
  return (
    <div className="relative"> {/* Make the wrapper take full height */}
      {/* Map component with absolute positioning */}
      <div className="absolute inset-0 z-0">
        <Map />
      </div>
      
      {/* Hero and Search components on top of the map */}
      <div className="relative z-10">
        <Hero />
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
}
