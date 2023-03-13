/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function PriceSideFilter({ setShoes, defaultShoes }) {
  const [priceOpen, setPriceOpen] = useState(false);
  const arrOfValues = [
    [0, 350],
    [350, 600],
    [600, 900],
    [900, 1500],
    [1500, 10000],
  ];
  const [arrPrices, setArrPrices] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  function handlePrice(e) {
    const item = e.target.value;
    if (arrPrices.includes(item)) {
      const copyArr = [...arrPrices];
      const indexToRemove = arrPrices.indexOf(item);
      copyArr.splice(indexToRemove, 1);
      setArrPrices(copyArr);
      return;
    }
    setArrPrices([...arrPrices, item]);
  }

  useEffect(() => {
    if (arrPrices.length === 0) {
      setShoes(defaultShoes);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrPrices.length; i++) {
      const range = arrPrices[i];

      const filtered = defaultShoes.filter(
        (obj) =>
          obj.price >= arrOfValues[range][0] &&
          obj.price <= arrOfValues[range][1]
      );

      arrRes.push(filtered);
    }

    setFilteredArr(arrRes.flat());
  }, [arrPrices]);

  useEffect(() => {
    if (filteredArr.length === 0) {
      setShoes([]);
      return;
    }
    setShoes(filteredArr);
  }, [filteredArr]);

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>Preço</h4>
        <button
          className="btn-color-add"
          type="button"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          {priceOpen ? (
            <ion-icon name="remove-outline" />
          ) : (
            <ion-icon name="add-outline" />
          )}
        </button>
      </div>
      {priceOpen ? (
        <ul className="ul-tags">
          <li>
            <label htmlFor="less-350">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={0}
                id="less-350"
              />
              Menos de R$ 350
            </label>
          </li>
          <li>
            <label htmlFor="350-600">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={1}
                id="350-600"
              />
              R$ 350 - R$ 600
            </label>
          </li>
          <li>
            <label htmlFor="600-900">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={2}
                id="600-900"
              />
              R$ 600 - R$ 900
            </label>
          </li>
          <li>
            <label htmlFor="900-1500">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={3}
                id="900-1500"
              />
              R$ 900 - R$ 1500
            </label>
          </li>
          <li>
            <label htmlFor="1500-1000">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={4}
                id="1500-10000"
              />
              Acima de R$ 1500
            </label>
          </li>
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default PriceSideFilter;
