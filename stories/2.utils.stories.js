import React from 'react';

export default {
  title: 'Utils',
};

export const CursorAndPointer = () => {
  return (
    <div className="container">
      <div className="row center around">
        <div className="pointer-default demo-cube">Default</div>
        <div className="pointer-help demo-cube">Help</div>
        <div className="pointer-pointer demo-cube">Pointer</div>
        <div className="pointer-grab demo-cube">Grab</div>
      </div>
    </div>
  );
};