/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function ColorSideFilter({ shoes, setShoes, defaultShoes }) {
  const colors = ['white', 'black', 'blue', 'green', 'brown', 'gray'];
  const [colorOpen, setColorOpen] = useState(false);
  const [arrColors, setArrColors] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  function handleColor(e) {
    const color = e.target.value;

    if (arrColors.includes(color)) {
      const copyArr = [...arrColors];
      const indexToRemove = arrColors.indexOf(color);
      copyArr.splice(indexToRemove, 1);
      setArrColors(copyArr);
      return;
    }

    setArrColors([...arrColors, color]);
  }

  useEffect(() => {
    if (arrColors.length === 0) {
      setShoes(defaultShoes);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrColors.length; i++) {
      const color = arrColors[i];
      const filtered = defaultShoes.filter((obj) => obj.color.includes(color));
      arrRes.push(filtered);
    }

    const noDuplicata = [...new Set(arrRes.flat())];
    setFilteredArr(noDuplicata);
  }, [arrColors]);

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
        <h4>Cor</h4>
        <button type="button" onClick={() => console.log(filteredArr)}>
          filteredArr
        </button>
        <button type="button" onClick={() => console.log(arrColors)}>
          arrColors
        </button>
        <button
          className="btn-color-add"
          type="button"
          onClick={() => setColorOpen(!colorOpen)}
        >
          {colorOpen ? (
            <ion-icon name="remove-outline" />
          ) : (
            <ion-icon name="add-outline" />
          )}
        </button>
      </div>
      {colorOpen ? (
        <ul className="ul-tags">
          {colors.map((element) => (
            <li key={element}>
              <label htmlFor={element}>
                <input
                  type="checkbox"
                  onClick={handleColor}
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

export default ColorSideFilter;
