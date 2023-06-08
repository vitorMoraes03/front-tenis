/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledSideCard } from '../../../pages/Shop/styles';

function ColorSideFilter({ shoes, filter, setFilter }) {
  const { t } = useTranslation();
  const colorList = [
    'white',
    'black',
    'blue',
    'green',
    'brown',
    'gray',
    'orange',
    'yellow',
    'pink',
    'red',
    'purple',
  ];
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
      setFilteredArr([]);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrColors.length; i++) {
      const color = arrColors[i];
      const filtered = shoes.defaultShoes.filter((obj) =>
        obj.color.includes(color)
      );
      arrRes.push(filtered);
    }

    const noDuplicata = [...new Set(arrRes.flat())];
    setFilteredArr(noDuplicata);
  }, [arrColors]);

  useEffect(() => {
    if (filteredArr.length === 0) {
      setFilter({ ...filter, color: [] });
      return;
    }
    setFilter({ ...filter, color: [...filteredArr.map((obj) => obj._id)] });
  }, [filteredArr]);

  function translationColors(color) {
    switch (color) {
      case 'black':
        return 'Preto';
      case 'white':
        return 'Branco';
      case 'blue':
        return 'Azul';
      case 'green':
        return 'Verde';
      case 'brown':
        return 'Marrom';
      case 'gray':
        return 'Cinza';
      case 'orange':
        return 'Laranja';
      case 'pink':
        return 'Rosa';
      case 'yellow':
        return 'Amarelo';
      case 'red':
        return 'Vermelho';
      case 'purple':
        return 'Roxo';
      default:
        return undefined;
    }
  }

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>{t('Cor')}</h4>
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
        <ul className="ul-tags tags-colors">
          {colorList.map((element) => (
            <li key={element}>
              <label htmlFor={element}>
                <input
                  type="checkbox"
                  onClick={handleColor}
                  value={element}
                  id={element}
                />
                {t(`${translationColors(element)}`)}
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default ColorSideFilter;
