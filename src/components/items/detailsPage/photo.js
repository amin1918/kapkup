"use client"
import Container from '@/components/layout/container/container'
import { useState } from 'react'

function DetailsPhoto({ currentBusinessPhoto = [] }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <Container className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section: Main Image */}
                <div className="w-full flex justify-center items-center col-span-2">
                    {currentBusinessPhoto[0] ? (
                        <img
                            src={currentBusinessPhoto[0]}
                            alt="Service main"
                            className="rounded-2xl shadow-lg object-cover w-full max-h-[500px] transition-transform duration-300 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-2xl">
                            <span className="text-gray-400 text-lg">No image available</span>
                        </div>
                    )}
                </div>

                {/* Right Section: Additional Images */}
                <div className="flex flex-col gap-4 justify-start items-center col-span-1">
                    {currentBusinessPhoto.slice(1).map((photo, index) => (
                        <div
                            key={index}
                            className={`w-full h-[150px] overflow-hidden rounded-xl shadow-sm cursor-pointer transition-transform duration-300 ${hoveredIndex === index ? 'scale-105 shadow-md' : ''
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {photo ? (
                                <img
                                    src={photo}
                                    alt={`Service preview ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                    <span className="text-gray-400 text-sm">No image</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default DetailsPhoto
