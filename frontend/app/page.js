'use client';
import { Hero } from './components/Hero';
import { Search } from './components/Search';
import { useState, React } from 'react';
import { Map } from './components/Map'; // Import the Map component

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  
  return (
    <div>
      <Hero/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Map /> {/* Add the Map component */}
    </div>
  );
}
