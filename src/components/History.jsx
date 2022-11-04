import React from 'react';

const History = ({ history, movingTo,currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                movingTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to move ${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
