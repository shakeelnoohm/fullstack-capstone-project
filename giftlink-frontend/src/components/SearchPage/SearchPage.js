import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
import './SearchPage.css';

function SearchPage() {
    const [gifts, setGifts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [condition, setCondition] = useState('');
    const [ageYears, setAgeYears] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchGifts();
    }, []);

    const fetchGifts = async (queryParams = '') => {
        try {
            const url = `${urlConfig.backendUrl}/api/search${queryParams}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            setGifts(data);
        } catch (error) {
            console.log('Fetch error: ' + error.message);
        }
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('name', searchQuery);
        if (category) params.append('category', category);
        if (condition) params.append('condition', condition);
        if (ageYears) params.append('age_years', ageYears);

        const queryString = params.toString() ? `?${params.toString()}` : '';
        fetchGifts(queryString);
    };

    const goToDetailsPage = (productId) => {
        navigate(`/app/product/${productId}`);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="search-bar">
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search gifts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            className="form-select dropdown-filter mx-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Books">Books</option>
                            <option value="Toys">Toys</option>
                            <option value="Home Decor">Home Decor</option>
                            <option value="Sports">Sports</option>
                            <option value="Other">Other</option>
                        </select>
                        <select
                            className="form-select dropdown-filter mx-2"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option value="">All Conditions</option>
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                        <input
                            type="number"
                            className="form-control age-range-slider mx-2"
                            placeholder="Max Age (years)"
                            value={ageYears}
                            onChange={(e) => setAgeYears(e.target.value)}
                        />
                        <button className="btn btn-primary search-button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                {gifts.map((gift) => (
                    <div key={gift.id} className="col-md-4 mb-4">
                        <div className="card search-results-card">
                            <div className="image-placeholder">
                                {gift.image ? (
                                    <img src={gift.image} alt={gift.name} className="card-img-top" />
                                ) : (
                                    <div className="no-image-available">No Image Available</div>
                                )}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{gift.name}</h5>
                                <p className="card-text">{gift.category}</p>
                                <p className="card-text">{gift.condition}</p>
                                <p className="card-text date-added">{formatDate(gift.date_added)}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => goToDetailsPage(gift.id)} className="btn btn-primary w-100">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;