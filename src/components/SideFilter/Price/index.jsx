/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function PriceSideFilter({ shoes, setShoes, defaultShoes }) {
  const [priceOpen, setPriceOpen] = useState(false);
  const [pricesPick, setPricesPick] = useState([]);

  function handlePrice(e) {
    if (pricesPick.includes(e.target.value)) {
      const filtered = pricesPick.filter(
        (element) => element !== e.target.value
      );
      setPricesPick(filtered);
      return;
    }
    const conversionToNum = e.target.value.split(',');
    setPricesPick([...pricesPick, conversionToNum]);
  }

  useEffect(() => {
    if (pricesPick.length === 0) return;
    const arr = [];
    for (let i = 0; i < pricesPick.length; i + 1) {
      // const item = pricesPick[i];
      const filtered = shoes.filter(
        (element) =>
          element.price >= pricesPick[i][0] && element.price <= pricesPick[i][1]
      );
      arr.push(filtered);
    }
    console.log(arr);
  }, [pricesPick]);

  // 0 a 350
  // 350 a 600
  // 600 a 900
  // 900 a 1500
  // 1500 a 10000

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
        <button type="button" onClick={() => console.log(pricesPick)}>
          see pricepicks
        </button>
      </div>
      {priceOpen ? (
        <ul className="ul-tags">
          <li>
            <label htmlFor="less-600">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={[0, 350]}
                id="less-600"
              />
              Menos de R$ 600
            </label>
          </li>
          <li>
            <label htmlFor="350-600">
              <input
                type="checkbox"
                onClick={handlePrice}
                value={[350, 600]}
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
                value={[600, 900]}
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
                value={[900, 1500]}
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
                value={[1500, 10000]}
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
