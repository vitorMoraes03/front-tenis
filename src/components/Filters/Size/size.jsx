/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function SizeSideFilter({ shoes, filter, setFilter }) {
  const [sizeOpen, setSizeOpen] = useState(false);
  const [arrSizes, setArrSizes] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const sizeList = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  function handleSize(e) {
    const size = e.target.value;

    if (arrSizes.includes(size)) {
      const copyArr = [...arrSizes];
      const indexToRemove = arrSizes.indexOf(size);
      copyArr.splice(indexToRemove, 1);
      setArrSizes(copyArr);
      return;
    }

    setArrSizes([...arrSizes, size]);
  }

  useEffect(() => {
    if (arrSizes.length === 0) {
      setFilteredArr([]);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrSizes.length; i++) {
      const size = arrSizes[i];
      const filtered = shoes.defaultShoes.filter((obj) => obj.sizeAndStock[size] > 0);
      arrRes.push(filtered);
    }

    const uniqueArr = [...new Set(arrRes.flat())];
    setFilteredArr(uniqueArr);
  }, [arrSizes]);

  useEffect(() => {
    if (filteredArr.length === 0) {
      setFilter({...filter, size: []});
      return;
    }
    setFilter({...filter, size: [...filteredArr.map((obj) => obj._id)]});
  }, [filteredArr]);

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>Tamanho</h4>
        <button
          className="btn-color-add"
          type="button"
          onClick={() => setSizeOpen(!sizeOpen)}
        >
          {sizeOpen ? (
            <ion-icon name="remove-outline" />
          ) : (
            <ion-icon name="add-outline" />
          )}
        </button>
      </div>
      {sizeOpen ? (
        <ul className="ul-tags tags-price">
          {sizeList.map((element) => (
            <li key={element}>
              <label htmlFor={element}>
                <input
                  type="checkbox"
                  onClick={handleSize}
                  value={element}
                  id={element}
                />
                {element}
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default SizeSideFilter;
