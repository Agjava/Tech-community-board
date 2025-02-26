import React from 'react';
import Card from './Card';
import './Board.css';

function Board({ items }) {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Board;
