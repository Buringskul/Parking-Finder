'use client'
import { useState, React } from 'react';


export const Search = ({searchInput, setSearchInput}) => {

    return (
        <div className='flex justify-center'>
            <div className='border-2 border-gray-600'>
                <input name="searchbox" 
                placeholder="Search"
                input={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
            </div>
        </div>
    )
}
