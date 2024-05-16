import React from 'react';
import './ImageGrid.css';
import ImageCard from './ImageCard';

interface ImageGridProps {
    images: Array<{
        id: string;
        alt_description: string;
        urls: { small: string };
        description: string | null;
        links: { html: string };
    }>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map(image => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
}

export default ImageGrid;
