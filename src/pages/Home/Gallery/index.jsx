import { useState } from 'react';
import img1 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic_1.png';
import img2 from '../../../images/RRRRRR_sneaker_high_fear.png';
import img3 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic.png';
import { StyledBtnShop } from '../../Shop/styles';
import { StyledGallery, StyledImgContainer } from './styles';

function Gallery() {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);

  return (
    <StyledGallery>
      <StyledImgContainer
        hover={firstHover}
        onMouseEnter={() => setFirstHover(true)}
        onMouseLeave={() => setFirstHover(false)}
      >
        <img src={img1} alt="Sample shoes 1" />
        <div>
          <StyledBtnShop>Comprar</StyledBtnShop>
          <h3>Motion Sand</h3>
        </div>
      </StyledImgContainer>
      <StyledImgContainer
        hover={secondHover}
        onMouseEnter={() => setSecondHover(true)}
        onMouseLeave={() => setSecondHover(false)}
      >
        <img src={img2} alt="Sample shoes 2" />
        <div>
          <StyledBtnShop>Comprar</StyledBtnShop>
          <h3>Motion W.S.</h3>
        </div>
      </StyledImgContainer>
      <StyledImgContainer
        hover={thirdHover}
        onMouseEnter={() => setThirdHover(true)}
        onMouseLeave={() => setThirdHover(false)}
      >
        <img src={img3} alt="Sample shoes 3" />
        <div>
          <StyledBtnShop>Comprar</StyledBtnShop>
          <h3>Asics Riverblue</h3>
        </div>
      </StyledImgContainer>
    </StyledGallery>
  );
}

export default Gallery;
