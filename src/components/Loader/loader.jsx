import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
};