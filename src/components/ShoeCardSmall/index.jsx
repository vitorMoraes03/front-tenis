import styled from 'styled-components';
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

// eslint-disable-next-line no-unused-vars
function ShoeCardSmall({ element, order, setOrder }) {
  function deleteItem() {
    const updatedOrder = order.filter((item) => item.idCart !== element.idCart);
    setOrder(updatedOrder);
    localStorage.setItem('storedOrder', JSON.stringify(updatedOrder));
  }

  return (
    <StyledShoeSmall>
      <img src={element.src} alt={element.alt} />
      <div>
        <p>{element.shoesName}</p>
        <StyledDivColors>
          {element.color.map((singleColor) => (
            <StyledTagColor
              backgroundColor={singleColor}
              key={`${singleColor}-${element.shoesName}-smallcard`}
            />
          ))}
        </StyledDivColors>
        <p>Tamanho: {element.size}</p>
        <p>{element.gender}</p>
      </div>
      <div className="price-div">
        <p>R${element.price}</p>
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
