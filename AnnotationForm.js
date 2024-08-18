import React, { useState } from 'react';

const AnnotationForm = ({ onAddAnnotation }) => {
  const [text, setText] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnnotation({ text, x, y });
    setText('');
    setX(0);
    setY(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Annotation text"
        required
      />
      <input
        type="number"
        value={x}
        onChange={(e) => setX(parseInt(e.target.value, 10))}
        placeholder="X position"
        required
      />
      <input
        type="number"
        value={y}
        onChange={(e) => setY(parseInt(e.target.value, 10))}
        placeholder="Y position"
        required
      />
      <button type="submit">Add Annotation</button>
    </form>
  );
};

export default AnnotationForm;
