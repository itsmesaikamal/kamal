import React, { useState, FormEvent } from 'react';
import './App.css';
import { searchPhotos } from './services/unsplashService';
import ImageGrid from './components/ImageGrid';

const App: React.FC = () => {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await searchPhotos(query);
            setPhotos(response.data.results);
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <header>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for images"
                    />
                    <button type="submit">Search</button>
                </form>
            </header>
            <div className="photos">
                {loading && <p>Loading...</p>}
                {!loading && <ImageGrid images={photos} />}
            </div>
        </div>
    );
}

export default App;
