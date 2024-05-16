import React, { useState } from 'react';
import './ImageCard.css';

interface ImageCardProps {
    image: {
        id: string;
        alt_description: string;
        urls: { small: string };
        description: string | null;
        links: { html: string };
    };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div 
            className="image-card" 
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <img src={image.urls.small} alt={image.alt_description} />
            {showDetails && (
                <div className="image-details">
                    <p>{image.description || 'No description'}</p>
                    <a href={image.links.html} target="_blank" rel="noopener noreferrer">View on Unsplash</a>
                </div>
            )}
        </div>
    );
}

export default ImageCard;
