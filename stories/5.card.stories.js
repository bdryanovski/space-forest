import React from 'react';

export default {
  title: 'Cards',
};


export const Card = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <h5>Simple card</h5>
          <p>Hello World!</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Cards = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="column">
          <div className="card mb-4">
            <h5>First card</h5>

            <p>Orci nulla pellentesque dignissim enim sit amet venenatis. Justo eget magna fermentum iaculis. Tempus imperdiet nulla malesuada pellentesque. Mauris nunc congue nisi vitae suscipit. Etiam dignissim diam quis enim lobortis scelerisque.</p>
          </div>

          <div className="card">
            <h5>Second card</h5>

            <p>Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Placerat vestibulum lectus mauris ultrices eros. Quisque non tellus orci ac auctor augue mauris augue. Et odio pellentesque diam volutpat commodo sed egestas. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const CardsGrouped = () => {
  return (
    <div className="container">
      <div className="card-group">
        <div className="card">
          <h5>Simple card</h5>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tempor ligula quis consequat congue.</p>
        </div>
        <div className="card">
          <h5>Simple card</h5>
          <p>Nunc arcu ligula, consectetur at varius ut, eleifend sed elit. Sed sit amet est sit amet velit malesuada dignissim sit amet ac sapien. Fusce lorem risus, feugiat nec posuere eu, laoreet quis turpis.</p>
        </div>
        <div className="card">
          <h5>Simple card</h5>
          <p>Duis egestas blandit ullamcorper. Quisque non ligula sit amet felis suscipit auctor nec non sapien. Praesent pharetra tortor in justo luctus semper. Vestibulum mollis magna lacus, vel viverra erat tempor id. Cras vestibulum sodales risus sit amet varius. Vivamus id sapien ut tellus dapibus cursus. Nunc eget finibus libero. Aenean at mauris at purus egestas facilisis at at massa. Mauris sed iaculis augue. Fusce ac eleifend odio.</p>
        </div>
      </div>
    </div>
  );
};