import React from 'react'
import Image from 'next/image';

interface TeamContentProps {
    activeTab: String;
    children?: React.ReactNode;
    teamData: any;
    team: string;
  }

  interface TeamGalleryImages {
    id: string;
    src: string;
    alt: string;
}
  

  const TeamContent: React.FC<TeamContentProps> = ({ activeTab, teamData, team }) => {

    const teamGalleryImages = teamData[team].image.map((image: string, index: number) => ({
        id: (index + 1).toString(),
        src: image,
        alt: `Image ${index + 1} of ${team}`,
    }));
    return (
        <>
        <div>
            {activeTab === 'Overview' && (
                <div className="flex text-xl h-full">
                <div className="flex flex-col sm:flex-row justify-center items-center h-full w-full">
                    <div className="flex justify-center items-center h-full flex-1 py-3">
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center space-x-4">
                            <p className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl text-center bg-gradient-to-r from-white to-green inline-block bg-clip-text text-transparent pt-3">{teamData[team].max_speed.toString()}</p>
                            <p className="text-4xl sm:text-5xl sm:px-0.5 md:text-5xl lg:text-5xl text-center text-green inline-block pt-8">KM/H</p>
    
                        </div>
                        <p className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-white to-green bg-clip-text text-transparent">MAX SPEED</p>
                    </div>
                    </div>
                    <div className="flex justify-center items-center h-full flex-1">
                    <div className="flex flex-col text-center items-center">
                        <p className="pt-3">{teamData[team].description}</p>
                    </div>
                    </div>
                </div>
                </div>
            )}
            {activeTab === "Responsibilities" && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {teamGalleryImages.map((image: TeamGalleryImages) => (
                        <div key={image.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden gap-4 h-60">
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
        </>
    );
};

export default TeamContent;