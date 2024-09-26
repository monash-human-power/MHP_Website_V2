import React from 'react'
import Image from 'next/image';

interface BikeContentProps {
    activeTab: String;
    children?: React.ReactNode;
    bikeData: any;
    bike: string;
    bikeGalleryImages: BikeGalleryImages[];
  }

  interface BikeGalleryImages {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}
  

  const BikeContent: React.FC<BikeContentProps> = ({ activeTab, bikeData, bike, bikeGalleryImages }) => {

    return (

        <div>
            {activeTab === 'Overview' && (
                <div className="flex text-xl h-full">
                <div className="flex flex-row justify-center items-center h-full w-full">
                    <div className="flex justify-center items-center h-full flex-1 py-3">
                    <div className="flex flex-col items-center">
                        <p className="text-7xl pt-10">{bikeData[bike].max_speed.toString()} KM/H</p>
                        <p className="text-3xl">MAX SPEED</p>
                    </div>
                    </div>
                    <div className="flex justify-center items-center h-full flex-1">
                    <div className="flex flex-col items-center">
                        <p className="pt-3">{bikeData[bike].description}</p>
                    </div>
                    </div>
                </div>
                </div>
            )}
            {/* Render content based on activeTab */}
            {activeTab === "Gallery" && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {bikeGalleryImages.map((image: BikeGalleryImages) => (
                        <div key={image.id} className="bg-white rounded-lg shadow-lg">
                            <Image
                                src={image.src}   
                                alt={image.alt}
                                width={800}
                                height={500}
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                    ))}
                </div>
            )}


        </div>

    );

};



export default BikeContent;