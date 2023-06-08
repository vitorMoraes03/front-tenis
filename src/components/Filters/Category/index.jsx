/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledSideCard } from '../../../pages/Shop/styles';

function CategorySideFilter({ shoes, setFilter, filter }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [arrCategory, setArrCategory] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const { t } = useTranslation();

  function handleCategory(e) {
    const category = e.target.value;

    if (arrCategory.includes(category)) {
      const copyArr = [...arrCategory];
      const indexToRemove = arrCategory.indexOf(category);
      copyArr.splice(indexToRemove, 1);
      setArrCategory(copyArr);
      return;
    }

    setArrCategory([...arrCategory, category]);
  }

  useEffect(() => {
    if (arrCategory.length === 0) {
      setFilteredArr([]);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrCategory.length; i++) {
      const category = arrCategory[i];
      const filtered = shoes.defaultShoes.filter((obj) => obj.category === category);
      arrRes.push(filtered);
    }

    setFilteredArr(arrRes.flat());
  }, [arrCategory]);

  useEffect(() => {
    if (filteredArr.length === 0) {
      setFilter({...filter, category: []});
      return;
    }
    setFilter({...filter, category: [...filteredArr.map((obj) => obj._id)]});
  }, [filteredArr]);

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>{t('Categorias')}</h4>
        <button
          className="btn-color-add"
          type="button"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          {categoryOpen ? (
            <ion-icon name="remove-outline" />
          ) : (
            <ion-icon name="add-outline" />
          )}
        </button>
      </div>
      {categoryOpen ? (
        <ul className="ul-tags">
          <li>
            <label htmlFor="category-casual">
              <input
                type="checkbox"
                onClick={handleCategory}
                value="Casual"
                id="category-casual"
              />
              {t('Casual')}
            </label>
          </li>
          <li>
            <label htmlFor="category-daily">
              <input
                type="checkbox"
                onClick={handleCategory}
                value="Sofisticado"
                id="category-daily"
              />
              {t('Sofisticado')}
            </label>
          </li>
          <li>
            <label htmlFor="category-sports">
              <input
                type="checkbox"
                onClick={handleCategory}
                value="Esportivo"
                id="category-sports"
              />
              {t('Esportivo')}
            </label>
          </li>
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default CategorySideFilter;
