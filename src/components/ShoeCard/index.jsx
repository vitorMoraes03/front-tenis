/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledShoeCard, StyledDivColors, StyledTagColor } from './styles';

function ShoeCard({ order, setOrder, element, setModalCart, modalCart }) {
  const objectKeys = Object.keys(element.sizeAndStock);
  const [selectedOption, setSelectedOption] = useState(objectKeys[0]);

  function handleSelectChange(e) {
    setSelectedOption(e.target.value);
  }

  function addShoes() {
    if (modalCart) return;
    setModalCart(true);
    setOrder([
      ...order,
      {
        shoesName: element.shoesName,
        id: element._id,
        size: selectedOption,
        gender: element.gender,
        price: element.price,
        color: element.color,
        src: element.src,
        alt: element.alt,
        idCart: uuidv4(),
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem('storedOrder', JSON.stringify(order));
  }, [addShoes]);

  return (
    <StyledShoeCard key={element._id}>
      <div className="container-img">
        <img alt={element.alt} src={element.src} />
      </div>
      <div className="shoe-card-infos">
        <div className="shoe-card-text">
          <h4>{element.shoesName}</h4>
          <p>R$ {element.price.toFixed(2)}</p>
          <StyledDivColors>
            {element.color.map((singleColor) => (
              <StyledTagColor
                backgroundColor={singleColor}
                key={`${singleColor}-${element.shoesName}-card`}
              />
            ))}
          </StyledDivColors>
          <p className="p-gender">{element.gender}</p>
          <p>{element.category}</p>
          <div>
            <select onChange={handleSelectChange} value={selectedOption}>
              {objectKeys.map((key) => (
                <option value={key} key={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ion-icon
          name="bag-add-outline"
          onClick={(e) => {
            e.stopPropagation();
            addShoes();
          }}
        />
      </div>
    </StyledShoeCard>
  );
}

export default ShoeCard;
