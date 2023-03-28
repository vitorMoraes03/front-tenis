import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic_1.png';
import img2 from '../../../images/RRRRRR_sneaker_high_fear.png';
import img3 from '../../../images/vitoristvan_shoes_modern_style_ultrarealistic.png';
import { StyledBtnShop } from '../../Shop/styles';
import { StyledGallery, StyledImgContainer } from './styles';

// eslint-disable-next-line no-unused-vars
function Gallery({ searchInput, setSearchInput }) {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);
  const navigate = useNavigate();

  function handleBtn(string) {
    setSearchInput(string);
    navigate('/shop');
    window.scrollTo(0, 0);
  }

  return (
    <StyledGallery>
      <StyledImgContainer
        hover={firstHover}
        onMouseEnter={() => setFirstHover(true)}
        onMouseLeave={() => setFirstHover(false)}
      >
        <img src={img1} alt="Sample shoes 1" />
        <div>
          <StyledBtnShop onClick={() => handleBtn('Motion Sand')}>
            Comprar
          </StyledBtnShop>
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
          <StyledBtnShop onClick={() => handleBtn('Motion W.S.')}>
            Comprar
          </StyledBtnShop>
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
          <StyledBtnShop onClick={() => handleBtn('Asics Riverblue')}>
            Comprar
          </StyledBtnShop>
          <h3>Asics Riverblue</h3>
        </div>
      </StyledImgContainer>
    </StyledGallery>
  );
}

export default Gallery;
