import React from 'react';

const MediaCard = ({ media }) => {
  return (
    <div>
      {media.map((item, index) => (
        <div key={index} style={{ display: 'inline-block', width: '30%', margin: '1%' }}>
          <div style={{ border: '1px solid gray', padding: '10px' }}>
            <img src={item.thumbnailImage} alt={item.title} style={{ width: '100%' }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaCard;