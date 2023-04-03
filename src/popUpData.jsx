import React from 'react';
import './popUpData.css';

function DataPopup({ data, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>X</button>
        <img className="popup-image" src={data.image} alt="" />
        <h2 className="popup-name">{data.name}</h2>
        <p className="popup-title">{data.title}</p>
        <p className="popup-description">{data.description}</p>
      </div>
    </div>
  );
}

export default DataPopup;
