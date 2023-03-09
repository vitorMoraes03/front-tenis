import styled from 'styled-components';
import bigImg from '../../../images/bigimg-2-option.png';

const StyedBigImage = styled.div`
  background-image: url(${bigImg});
  height: 45rem;
  background-size: cover;
  background-position: center;
`;

function BigImage() {
  return <StyedBigImage />;
}

export default BigImage;
