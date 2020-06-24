import React from 'react';

export default {
  title: 'Tabs',
};

export const Header = () => {
  return (
    <div className="container">

      <div className="tabs">

        <div className="tab">Tab 1</div>
        <div className="tab active">Tab 2</div>
        <div className="tab">Tab 3</div>
        <div className="tab">Tab 4</div>

      </div>

    </div>
  );
};
