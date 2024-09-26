import React from 'react'
import Image from 'next/image';

interface BikeContentProps {
    activeTab: String;
    children?: React.ReactNode;
    bikeData: any;
    bike: string;
  }

  interface BikeGalleryImages {
    id: string;
    src: string;
    alt: string;
}
  

  const BikeContent: React.FC<BikeContentProps> = ({ activeTab, bikeData, bike }) => {

    const bikeGalleryImages = bikeData[bike].gallery.map((image: string, index: number) => ({
        id: (index + 1).toString(),
        src: image,
        alt: `Image ${index + 1} of ${bike}`,
    }));
    return (

        <div>
            {activeTab === 'Overview' && (
                <div className="flex text-xl h-full">
                <div className="flex flex-col sm:flex-row justify-center items-center h-full w-full">
                    <div className="flex justify-center items-center h-full flex-1 py-3">
                    <div className="flex flex-col items-center">
                        <p className="text-6xl text-center bg-gradient-to-r from-white via-green to-green inline-block bg-clip-text text-transparent pt-3">{bikeData[bike].max_speed.toString()} KM/H</p>
                        <p className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl text-green">MAX SPEED</p>
                    </div>
                    </div>
                    <div className="flex justify-center items-center h-full flex-1">
                    <div className="flex flex-col text-center items-center">
                        <p className="pt-3">{bikeData[bike].description}</p>
                    </div>
                    </div>
                </div>
                </div>
            )}
            {activeTab === "Gallery" && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {bikeGalleryImages.map((image: BikeGalleryImages) => (
                        <div key={image.id} className="relative bg-white rounded-lg shadow-lg w-100 h-60">
                            <Image
                                src={image.src}   
                                alt={image.alt}
                                layout="fill"
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