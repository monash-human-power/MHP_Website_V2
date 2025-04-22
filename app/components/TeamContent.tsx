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
        
        </>
    );
};

export default TeamContent;