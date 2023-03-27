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
    align-items: center;
  }

  h4 {
    margin-bottom: var(--space-small);
    font-size: 2.2rem;
  }

  .shoe-card-text > p,
  .shoe-card-text > div {
    margin-bottom: 2px;
  }

  select {
    padding: 1px;
    width: 8rem;
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
