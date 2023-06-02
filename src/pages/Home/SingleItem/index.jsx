import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic_1.png';
import img2 from '../../../images/RRRRRR_sneaker_high_fear.png';
import img3 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic.png';
import { StyledBtnShop } from '../../Shop/styles';
import { StyledImgContainer, StyledSingleItem } from './styles';

function SingleItem({ setSearchInput }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  function handleBtn(string) {
    setSearchInput(string);
    navigate('/shop');
    window.scrollTo(0, 0);
  }

  const sampleShoes = [{
    src: img1,
    alt: 'Sample shoes 1',
    shoesName: 'Motion Sand',
  }, {
    src: img2,
    alt: 'Sample shoes 2',
    shoesName: 'Motion W.S.',
  }, {
    src: img3,
    alt: 'Sample shoes 3',
    shoesName: 'Asics Riverblue',
  }]

  const [shoesPick, setShoesPick] = useState(sampleShoes[0]);

  useEffect(() => {
    setShoesPick(sampleShoes[Math.floor(Math.random() * sampleShoes.length)]);
  }, []);

  return (
    <StyledSingleItem>
      <StyledImgContainer
        hover={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={shoesPick.src} alt={shoesPick.alt} />
        <div>
          <StyledBtnShop onClick={() => handleBtn(shoesPick.shoesName)}>
            Comprar
          </StyledBtnShop>
          <h3>{shoesPick.shoesName}</h3>
        </div>
      </StyledImgContainer>
    </StyledSingleItem>
  );
}

export default SingleItem;
