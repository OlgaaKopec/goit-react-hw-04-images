import PropTypes from 'prop-types';
import './imageGalleryItem.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  return (
    <li className="imageGalleryItem" onClick={() => onImageClick(largeImageURL)}>
      <img className="img" src={webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};