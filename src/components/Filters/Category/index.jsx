/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function CategorySideFilter({ setShoes, defaultShoes }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [arrCategory, setArrCategory] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

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
      setShoes(defaultShoes);
      return;
    }

    const arrRes = [];
    for (let i = 0; i < arrCategory.length; i++) {
      const category = arrCategory[i];
      const filtered = defaultShoes.filter((obj) => obj.category === category);
      arrRes.push(filtered);
    }

    setFilteredArr(arrRes.flat());
  }, [arrCategory]);

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
        <h4>Categorias</h4>
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
              Casual
            </label>
          </li>
          <li>
            <label htmlFor="category-daily">
              <input
                type="checkbox"
                onClick={handleCategory}
                value="Dia a dia"
                id="category-daily"
              />
              Dia a dia
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
              Esportivo
            </label>
          </li>
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default CategorySideFilter;
