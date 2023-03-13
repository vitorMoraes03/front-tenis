/* 

import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function PriceSideFilter({ shoes, setShoes, defaultShoes }) {
  const [priceOpen, setPriceOpen] = useState(false);
  const [arrOfPrices] = [
    [0, 350],
    [350, 600],
    [600, 900],
    [900, 1500],
    [1500, 10000]
  ];
  const [pricesKey, setPricesKey] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

function handlePrice(e) { // OK
  const priceCurrent = e.target.value.split(',').map(Number);

  // if(arrOfPrices.some(price => JSON.stringify(price) === JSON.stringify(priceCurrent))){
    // remover priceCurrent do arrOfPrices
    const index = arrOfPrices.findIndex((price) => price.every((num) => num === priceCurrent[index]));
    console.log(index);
  //   const arrCopy = arrOfPrices;
  //   arrCopy.splice(index, 1);
  //   setArrOfPrices(arrCopy);

  //   return
  // }

  setArrOfPrices([...arrOfPrices, priceCurrent]);
}

  useEffect(() => {
    // if(!pricesPick) return

     const filtered = defaultShoes.filter((element) => 
        element.price >= arrOfPrices[0] && element.price <= arrOfPrices[1]
     );

     // console.log(filtered);

    //  filtered.forEach((element) =>{
    //     console.log(filteredArr.some(item => item.shoesName === element.shoesName));
    //     if(filteredArr.includes(element)){
    //       const index = filteredArr.indexOf(element);
    //       const arrCopy = filteredArr;
    //       arrCopy.splice(index, 1);
    //       setFilteredArr(arrCopy);
    //     }
    //     else {
    //       setFilteredArr([...filteredArr, filtered].flat());
    //     }})
  }, [arrOfPrices]);

  // useEffect(() => {
  //   if(filteredArr.length === 0){
  //     setShoes(defaultShoes);  
  //     return
  //   }
  //   setShoes(filteredArr);
  // }, [filteredArr]); 

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
        <button type="button" onClick={() => console.log(arrOfPrices)}>
          see arrOfPrices
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

*/