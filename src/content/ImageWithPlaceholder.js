import React, { useState } from 'react';

function ImageWithPlaceholder({ imageUrl }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="image-container" style={{ width: '400px', height: '300px', position: 'relative', border: '1px solid #ccc' }}>
      {isLoading && (
        <div className="image-placeholder" style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="placeholder-text" style={{ color: '#999', fontStyle: 'italic' }}>Loading...</span>
        </div>
      )}
      <img className="actual-image" src={imageUrl} alt="Placeholder Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} onLoad={handleImageLoad} />
    </div>
  );
}

export default ImageWithPlaceholder;
