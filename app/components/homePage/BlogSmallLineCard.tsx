"use client";
import { Card, CardBody } from '@heroui/card'
import React from 'react'
import Image from 'next/image'

const BlogSmallLineCard = () => {
  return (
    <Card className='shadow-none'>
          <CardBody className="">
            <div className="flex space-x-2">
              <div className="flex flex-1 flex-col space-y-1">
                <h4 className="font-medium text-large">
                  The Future of Remote Work: Tools and Trends for 2026
                </h4>
                <p className="text-tiny  uppercase font-bold text-gray-700">5 Jan, 2026</p>
                <p className="text-tiny  uppercase font-bold line-clamp-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="relative w-20 h-20 rounded-lg bg-black overflow-hidden">
                <Image
                  fill
                  alt="Card background"
                  className="w-full h-full object-cover"
                  src="/ourMissonBanner.jpg"
                />
              </div>
            </div>
          </CardBody>
        </Card>
  )
}

export default BlogSmallLineCard