import styled from 'styled-components';

export const StyledShoeCard = styled.div`
  width: 28rem;
  height: 50rem;

  ion-icon {
    font-size: var(--icons-size);
    align-self: center;
    cursor: pointer;
  }

  ion-icon:hover {
    color: var(--main-shade);
  }

  p,
  select {
    font-size: var(--font-big);
  }

  p:last-child {
    font-size: var(--font-medium);
    font-style: italic;
  }

  button {
    font-weight: 600;
    padding: 1rem;
  }

  img {
    width: 100%;
    border-radius: 2px;
  }

  .shoe-card-infos {
    padding: var(--space-small);
    display: flex;
    justify-content: space-between;
  }

  .shoe-card-tags {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h4 {
    margin-top: var(--space-small);
    font-size: 2.2rem;
    text-align: center;
  }

  .shoe-card-text > p,
  .shoe-card-text > div {
    margin-bottom: 2px;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: var(--font-text);
    font-weight: 600;
  }

  .size-select-container {
    display: flex;
    gap: 2px;
    align-items: center;
    padding: 2px;
    border: 1px solid var(--main-shade);
    border-radius: 2px;
    margin-top: 4px;
    width: fit-content;
  }

  .size-select-container > ion-icon {
    font-size: 1.2rem;
    margin-top: 3px;
    cursor: inherit;

    &:hover {
      color: var(--main-color);
    }
  }

  .container-card-btn {
    text-align: center;
  }

  button {
    width: 90%;
  }

  .p-gender {
    font-weight: 450;
  }

  .size-pick {
    font-size: var(--space-small);
  }

  @media (max-width: 600px) {
    height: 45rem;

    .container-img {
      text-align: center;
    }

    img {
      width: 80%;
    }

    ion-icon {
      align-self: flex-end;
    }
  }
`;

export const StyledDivColors = styled.div`
  display: flex;
  gap: 2px;
  margin: 3px 0;
`;

export const StyledTagColor = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 2.2rem;
  height: 2.2rem;
`;
