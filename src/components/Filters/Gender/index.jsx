/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';
import { useTranslation } from 'react-i18next'; 

function GenderSideFilter({ shoes, filter, setFilter }) {
  const { t } = useTranslation();
  const [genderPick, setGenderPick] = useState([]);
  const [genderOpen, setGenderOpen] = useState(false);

  function handleGender(e) {
    if (genderPick.includes(e.target.value)) {
      const filtered = genderPick.filter(
        (element) => element !== e.target.value
      );
      setGenderPick(filtered);
      return;
    }
    setGenderPick([...genderPick, e.target.value]);
  }

  useEffect(() => {
    const allFiltered = [];
    genderPick.forEach((gender) => {
      const filtered = shoes.defaultShoes.filter(
        (element) => element.gender === gender
      );
      allFiltered.push(...filtered);
    });

    setFilter({ ...filter, gender: [...allFiltered.map((obj) => obj._id)] });
  }, [genderPick]);

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>{t('Gênero')}</h4>
        <button
          className="btn-color-add"
          type="button"
          onClick={() => setGenderOpen(!genderOpen)}
        >
          {genderOpen ? (
            <ion-icon name="remove-outline" />
          ) : (
            <ion-icon name="add-outline" />
          )}
        </button>
      </div>
      {genderOpen ? (
        <ul className="ul-tags">
          <li>
            <label htmlFor="input-feminino">
              <input
                type="checkbox"
                onClick={handleGender}
                value="Feminino"
                id="input-feminino"
              />
              {t('Feminino')}
            </label>
          </li>
          <li>
            <label htmlFor="input-masculino">
              <input
                type="checkbox"
                onClick={handleGender}
                value="Masculino"
                id="input-masculino"
              />
              {t('Masculino')}
            </label>
          </li>
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default GenderSideFilter;
