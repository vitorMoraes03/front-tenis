import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function GenderSideFilter({ shoes, setShoes, defaultShoes }) {
  const [genderPick, setGenderPick] = useState([]);
  const [genderOpen, setGenderOpen] = useState(false);

  useEffect(() => {
    if (genderPick.length === 2) {
      setShoes(defaultShoes);
      return;
    }

    const filtered = shoes.filter(
      (element) => element.gender === genderPick[0]
    );

    if (filtered.length === 0) {
      setShoes(defaultShoes);
    } else setShoes(filtered);
  }, [genderPick]);

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

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>Gênero</h4>
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
              Feminino
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
              Masculino
            </label>
          </li>
        </ul>
      ) : null}
    </StyledSideCard>
  );
}

export default GenderSideFilter;
