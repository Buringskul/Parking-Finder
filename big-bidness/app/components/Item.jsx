import React from 'react'

export const Item = ({data}) => {
      {/* <div className="card card-compact bg-base-100 w-3/4 shadow-xl">
      <div className='flex justify-center items-center'>
        <figure className=' mt-4'>
          <img className='h-40'
            src={data.image}
            alt="Image" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>${data.price}</p>
        <div className="card-actions justify-center mt-5">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div> */}
  return (
    <div className='w-11/12 block border-black border-2'>
      <div className='justify-items-center pt-2'>
        <img className='w-full px-2 h-full'
          src={data.image}
          alt="Image" />
      </div>
      <div>
        <h1>
          {data.name}
        </h1>
        <p>
          {data.price}
        </p>
      </div>
      <div>
        <button>
          Buy Now
        </button>
      </div>
    </div>
  )
}
