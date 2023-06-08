/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { StyledShoeCard, StyledDivColors, StyledTagColor } from './styles';
import { StyledBtnShop } from '../../pages/Shop/styles';

function ShoeCard({ order, setOrder, element, setModalCart, modalCart }) {
  const objectKeys = Object.keys(element.sizeAndStock);
  const [selectedOption, setSelectedOption] = useState(objectKeys[0]);
  const { t } = useTranslation();
 
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
      <h4>{t(`${element.shoesName}`)}</h4>
      <div className="shoe-card-infos">
        <div className="shoe-card-text">
          <p>R$ {element.price.toFixed(2)}</p>
          <p className="p-gender">{t(`${element.gender}`)}</p>
          <p>{t(`${element.category}`)}</p>
        </div>
        <div className="shoe-card-tags">
          <StyledDivColors>
            {element.color.map((singleColor) => (
              <StyledTagColor
                backgroundColor={singleColor}
                key={`${singleColor}-${element.shoesName}-card`}
              />
            ))}
          </StyledDivColors>
          <div className='size-select-container'>
          <select onChange={handleSelectChange} value={selectedOption}>
            {objectKeys.map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
          <ion-icon name="chevron-down-outline" />
          </div>
        </div>
      </div>
      <div className="container-card-btn">
        <StyledBtnShop
          onClick={(e) => {
            e.stopPropagation();
            addShoes();
          }}
        >
          {t('Comprar')}
        </StyledBtnShop>
      </div>
    </StyledShoeCard>
  );
}

export default ShoeCard;
