import styled from 'styled-components';

export const StyledShoeCard = styled.div`
  font-size: var(--font-big);

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
  }

  .shoe-card-text > p,
  .shoe-card-text > div {
    margin-bottom: 2px;
  }

  select {
    padding: 1px;
  }
`;

export const StyledDivColors = styled.div`
  display: flex;
  gap: 2px;
  margin: 3px 0;
`;

export const StyledTagColor = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: var(--font-big);
  height: var(--font-big);
`;
