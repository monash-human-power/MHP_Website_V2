import React from 'react'

interface BikeContentProps {
    activeTab: String;
  }

const BikeContent = ({activeTab} : BikeContentProps) => {
    return (
        <div className="mt-4">
            {/* Depending on the item selected in the bike section sub nav bar, different bike subsections
            will render */}
            {activeTab==='overview' && <p>This is the overview subsection</p>}
            {activeTab==='gallery' && <p>This is the gallery subsection</p>}
        </div>
    );
};

export default BikeContent;