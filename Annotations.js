import React from 'react';

const Annotations = ({ annotations }) => {
  return (
    <div>
      {annotations.map((annotation, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${annotation.x}px`,
            top: `${annotation.y}px`,
            color: 'red',
            fontSize: '16px',
            pointerEvents: 'none',
          }}
        >
          {annotation.text}
        </div>
      ))}
    </div>
  );
};

export default Annotations;
