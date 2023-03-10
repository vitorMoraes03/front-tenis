import { useState, useEffect } from 'react';
import { StyledSideCard } from '../../../pages/Shop/styles';

function ColorSideFilter({ shoes, setShoes, defaultShoes }) {
  const [colorsPick, setColorsPick] = useState([]);
  const colors = ['white', 'black', 'blue', 'green', 'brown', 'gray'];
  const [colorOpen, setColorOpen] = useState(false);

  useEffect(() => {
    function filterColor(element) {
      return element.color.some((item) => colorsPick.includes(item));
    }
    const filtered = shoes.filter(filterColor);

    if (colorsPick.length === 0) {
      setShoes(defaultShoes);
    } else setShoes(filtered);
  }, [colorsPick]);

  function handleColor(e) {
    if (colorsPick.includes(e.target.value)) {
      const filtered = colorsPick.filter(
        (element) => element !== e.target.value
      );
      setColorsPick(filtered);
      return;
    }
    setColorsPick([...colorsPick, e.target.value]);
  }

  return (
    <StyledSideCard>
      <div className="div-h4">
        <h4>Cor</h4>
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
