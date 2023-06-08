/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { StyledDivColors, StyledTagColor } from '../ShoeCard/styles';

const StyledShoeSmall = styled.div`
  display: flex;
  gap: var(--space-small);
  align-items: center;
  margin-bottom: var(--space-small);
  position: relative;

  .price-div {
    position: absolute;
    right: 0;
    color: var(--secondary-color);
  }

  .shoes-name {
    font-size: var(--font-big);
  }

  ion-icon {
    color: var(--main-color);
    font-size: var(--font-text);
    cursor: pointer;
  }

  .btn-trash {
    border: none;
    background: none;
    position: absolute;
    padding: 1rem;
    right: 0;
    bottom: 0;
  }
`;

function ShoeCardSmall({ element, order, setOrder }) {
  const { t } = useTranslation();

  function deleteItem() {
    const updatedOrder = order.filter((item) => item.idCart !== element.idCart);
    setOrder(updatedOrder);
    localStorage.setItem('storedOrder', JSON.stringify(updatedOrder));
  }

  return (
    <StyledShoeSmall>
      <img src={element.src} alt={element.alt} />
      <div>
        <p className='shoes-name'>{element.shoesName}</p>
        <p>{t('Tamanho')}: {element.size}</p>
        <p>{t(`${element.gender}`)}</p>
        <StyledDivColors>
          {element.color.map((singleColor) => (
            <StyledTagColor
              backgroundColor={singleColor}
              key={`${singleColor}-${element.shoesName}-smallcard`}
            />
          ))}
        </StyledDivColors>
      </div>
      <div className="price-div">
        <p>R${element.price.toFixed(2)}</p>
      </div>
      <button
        className="btn-trash"
        onClick={(e) => {
          e.stopPropagation();
          deleteItem();
        }}
        type="button"
      >
        <ion-icon name="trash" />
      </button>
    </StyledShoeSmall>
  );
}

export default ShoeCardSmall;
