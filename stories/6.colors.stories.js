import React from 'react';

export default {
  title: 'Colors',
};


export const Basic = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="color-box color-white-bg color-black">White</div>
          <div className="color-box color-black-bg color-white">Black</div>
          <div className="color-box color-gray-bg">Gray</div>
          <div className="color-box color-primary-bg">Primary</div>
          <div className="color-box color-action-bg">Action</div>
        </div>
        <div className="row">
          <div className="color-box color-success-bg">Success</div>
          <div className="color-box color-info-bg">Info</div>
          <div className="color-box color-warning-bg">Warning</div>
          <div className="color-box color-danger-bg">Danger</div>
        </div>
      </div>
    </React.Fragment>
  );
};


export const Shades = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="color-scale-wrapper">
          <div className="color-scale color-gray-bg">Gray</div>
          <div className="color-scale color-gray-bg-100">100</div>
          <div className="color-scale color-gray-bg-200">200</div>
          <div className="color-scale color-gray-bg-300">300</div>
          <div className="color-scale color-gray-bg-400">400</div>
          <div className="color-scale color-gray-bg-500">500</div>
          <div className="color-scale color-gray-bg-600">600</div>
          <div className="color-scale color-gray-bg-700">700</div>
          <div className="color-scale color-gray-bg-800">800</div>
          <div className="color-scale color-gray-bg-900">900</div>
          <div className="color-scale color-gray-bg-light">light</div>
          <div className="color-scale color-gray-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-primary-bg">Primary</div>
          <div className="color-scale color-primary-bg-100">100</div>
          <div className="color-scale color-primary-bg-200">200</div>
          <div className="color-scale color-primary-bg-300">300</div>
          <div className="color-scale color-primary-bg-400">400</div>
          <div className="color-scale color-primary-bg-500">500</div>
          <div className="color-scale color-primary-bg-600">600</div>
          <div className="color-scale color-primary-bg-700">700</div>
          <div className="color-scale color-primary-bg-800">800</div>
          <div className="color-scale color-primary-bg-900">900</div>
          <div className="color-scale color-primary-bg-light">light</div>
          <div className="color-scale color-primary-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-action-bg">Action</div>
          <div className="color-scale color-action-bg-100">100</div>
          <div className="color-scale color-action-bg-200">200</div>
          <div className="color-scale color-action-bg-300">300</div>
          <div className="color-scale color-action-bg-400">400</div>
          <div className="color-scale color-action-bg-500">500</div>
          <div className="color-scale color-action-bg-600">600</div>
          <div className="color-scale color-action-bg-700">700</div>
          <div className="color-scale color-action-bg-800">800</div>
          <div className="color-scale color-action-bg-900">900</div>
          <div className="color-scale color-action-bg-light">light</div>
          <div className="color-scale color-action-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-success-bg">Success</div>
          <div className="color-scale color-success-bg-100">100</div>
          <div className="color-scale color-success-bg-200">200</div>
          <div className="color-scale color-success-bg-300">300</div>
          <div className="color-scale color-success-bg-400">400</div>
          <div className="color-scale color-success-bg-500">500</div>
          <div className="color-scale color-success-bg-600">600</div>
          <div className="color-scale color-success-bg-700">700</div>
          <div className="color-scale color-success-bg-800">800</div>
          <div className="color-scale color-success-bg-900">900</div>
          <div className="color-scale color-success-bg-light">light</div>
          <div className="color-scale color-success-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-info-bg">Info</div>
          <div className="color-scale color-info-bg-100">100</div>
          <div className="color-scale color-info-bg-200">200</div>
          <div className="color-scale color-info-bg-300">300</div>
          <div className="color-scale color-info-bg-400">400</div>
          <div className="color-scale color-info-bg-500">500</div>
          <div className="color-scale color-info-bg-600">600</div>
          <div className="color-scale color-info-bg-700">700</div>
          <div className="color-scale color-info-bg-800">800</div>
          <div className="color-scale color-info-bg-900">900</div>
          <div className="color-scale color-info-bg-light">light</div>
          <div className="color-scale color-info-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-warning-bg">Warning</div>
          <div className="color-scale color-warning-bg-100">100</div>
          <div className="color-scale color-warning-bg-200">200</div>
          <div className="color-scale color-warning-bg-300">300</div>
          <div className="color-scale color-warning-bg-400">400</div>
          <div className="color-scale color-warning-bg-500">500</div>
          <div className="color-scale color-warning-bg-600">600</div>
          <div className="color-scale color-warning-bg-700">700</div>
          <div className="color-scale color-warning-bg-800">800</div>
          <div className="color-scale color-warning-bg-900">900</div>
          <div className="color-scale color-warning-bg-light">light</div>
          <div className="color-scale color-warning-bg-dark">dark</div>
        </div>

        <div className="color-scale-wrapper">
          <div className="color-scale color-danger-bg">Danger</div>
          <div className="color-scale color-danger-bg-100">100</div>
          <div className="color-scale color-danger-bg-200">200</div>
          <div className="color-scale color-danger-bg-300">300</div>
          <div className="color-scale color-danger-bg-400">400</div>
          <div className="color-scale color-danger-bg-500">500</div>
          <div className="color-scale color-danger-bg-600">600</div>
          <div className="color-scale color-danger-bg-700">700</div>
          <div className="color-scale color-danger-bg-800">800</div>
          <div className="color-scale color-danger-bg-900">900</div>
          <div className="color-scale color-danger-bg-light">light</div>
          <div className="color-scale color-danger-bg-dark">dark</div>
        </div>
      </div>
    </div>
  );
};
