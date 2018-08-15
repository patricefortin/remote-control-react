import React from 'react';

export const Card = ({children, title}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {children}
    </div>
  </div>
);