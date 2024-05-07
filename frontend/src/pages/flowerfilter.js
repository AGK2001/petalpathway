import React, { useState } from 'react';

function FlowerFilter({ flowers, setFilteredFlowers }) {
  const [color, setColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    const filteredFlowers = flowers.filter(flower => {
      let colorMatch = true;
      let priceMatch = true;

      if (color && flower.color !== color) {
        colorMatch = false;
      }

      if (minPrice && flower.price < minPrice) {
        priceMatch = false;
      }

      if (maxPrice && flower.price > maxPrice) {
        priceMatch = false;
      }

      return colorMatch && priceMatch;
    });

    setFilteredFlowers(filteredFlowers);
  };

  return (
    <div>
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
      </label>
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={e => setMinPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FlowerFilter;
