import styled from 'styled-components';
// import bigImg from '../../../images/vitoristvan_modern_urban__some_people.png';
// import bigImg from '../../../images/vitoristvan_man_wearing_vertical_striped.png';
import bigImg from '../../../images/vitoristvan_urban_environment_at_night_1.png';
// import bigImg from '../../../images/vitoristvan_photography_by_night.png';

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
