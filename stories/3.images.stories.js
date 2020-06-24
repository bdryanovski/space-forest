import React from 'react';

const image = 'https://images.8tracks.com/cover/i/012/528/791/Mechanical_Morty-467.png?rect=0,15,886,886&q=98&fm=jpg&fit=max&w=960&h=960';

export default {
  title: 'Images',
};

export const Roundness = () => {
  return (
    <div className="container">
      <div className="row center around">
        <img src={image} className="image-circle demo-image"/>
        <img src={image} className="image-round-xs demo-image" />
        <img src={image} className="image-round-md demo-image" />
        <img src={image} className="image-round-xl demo-image" />
        <img src={image} className="image-responsive demo-image" />
        <img src={image} className="image-flip demo-image" />
      </div>
    </div>
  );
};