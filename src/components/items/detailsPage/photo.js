import Container from '@/components/layout/container/container'
import Image from "next/image";

function DetailsPhoto({ currentBusinessPhoto }) {
    return (
        <Container className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section (Main Image) */}
                <div className="w-full flex justify-center items-center col-span-2">
                    {currentBusinessPhoto ? (
                        <img
                            src={currentBusinessPhoto?.[0]}
                            alt="Service main"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-md object-cover w-full h-auto"
                            
                        />
                    ) : (
                        <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-2xl">
                            <span className="text-gray-500">No image available</span>
                        </div>
                    )}
                </div>

                {/* Right Section (Additional Images) */}
                <div className="flex flex-col gap-4 justify-center items-center col-span-1 h-full">
                    <img
                        src={currentBusinessPhoto?.[1]}
                        alt="Service preview 1"
                        width={300}
                        height={200}
                        className="rounded-xl shadow-sm object-cover w-full"
                    />
                    <img
                        src={currentBusinessPhoto?.[2]}
                        alt="Service preview 2"
                        width={300}
                        height={200}
                        className="rounded-xl shadow-sm object-cover w-full"
                    />
                </div>
            </div>
        </Container>
    )
}

export default DetailsPhoto