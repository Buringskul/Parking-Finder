import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

export const Item = ({ data }) => {
  return (
    <a href={data.productUrl} className="block cursor-pointer">
      <Card className="mt-6 w-90 m-1 border border-gray-300 rounded-lg shadow-md">
        <CardHeader color="blue-gray" className="relative h-56">
          <img 
            src={data.image} 
            alt="Product" 
            className="w-full h-full object-cover rounded-t-lg" 
          />
        </CardHeader>
        <CardBody className="p-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.name}
          </Typography>
          <Typography color="gray" className="mb-2">
            {data.price}
          </Typography>
          <Typography color="gray" className="mb-2">
            {data.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-black text-white hover:bg-gray-800 py-2 px-4 text-lg rounded-lg">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </a>
  );
}
