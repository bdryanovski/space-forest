import React from 'react';
import {dummyContent} from '../.storybook/utils';

export default {
  title: 'Navigation',
};



export const Header = () => {
  return (
    <div className="container">

      <nav className="navigation">
        <a href="#" className="navigation-logo">Logo</a>
        <div className="navigation-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navigation-wrapper">
          <div className="navigation-body">
            <a href="#" className="navigation-item">Home</a>
            <a href="#" className="navigation-item">Products</a>
          </div>
        </div>
      </nav>

      <p className="color-white-bg p-5">
        { dummyContent() }
      </p>

    </div>
  );
};
