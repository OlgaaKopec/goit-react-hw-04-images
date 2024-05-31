  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import {Searchbar} from './Searchbar/searchbar.jsx';
  import {ImageGallery} from './ImageGallery/imageGallery.jsx';
  import {Button} from './Button/button.jsx';
  import {Loader} from './Loader/loader.jsx';
  import {Modal} from './Modal/modal.jsx';
  import './App.css';
  
  const BASE_URL = 'https://pixabay.com/api/';
  
  export const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState('');
  
    useEffect(() => {
      if (!query) return;
  
      const fetchImages = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${BASE_URL}?q=${query}&page=${page}&key=38305108-b7aaa23ed00d211293f6714ad&image_type=photo&orientation=horizontal&per_page=12`);
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
        } catch (error) {
          console.error('Error fetching images:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchImages();
    }, [query, page]);
  
    const handleSearch = (searchQuery) => {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    };
  
    const loadMore = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    const openModal = (largeImageURL) => {
      setLargeImageURL(largeImageURL);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setLargeImageURL('');
    };
  
    return (
      <div className="app">
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={images} onImageClick={openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={loadMore} />}
        {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
      </div>
    );
  }
