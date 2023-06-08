import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { StyledMain, StyledFeatured, StyledSecondSide } from './styles';
import isSmallScreen from '../../../smallFunctions/isSmallScreen';
import SingleItem from '../SingleItem';
import imgSideSecond from '../../../images/teste-1.png';
import imgSideThird from '../../../images/DenizD_wearing_neon_jordan_shoes.png';

function Main({ setSearchInput }) {
  const images = [imgSideSecond, imgSideThird];
  const [img, setImg] = useState(images[0]);
  const { t } = useTranslation();

  useEffect(() => {
    setImg(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <StyledMain>
      <StyledFeatured>
        <Link to="/shop">
          <div className="main-title">
            <div className="text-wrapper">
              <h1>{t('O Conforto em seus pés')}</h1>
              {isSmallScreen() ? null : <p>{t('Espumas de última tecnologia')}</p>}
            </div>
          </div>
        </Link>
      </StyledFeatured>
      <StyledSecondSide imgName={img}>
        <div>
          <h2>{t('Novos Lançamentos')}</h2>
          <Link to="/shop">
            <p>{t('Compre agora')}</p>
          </Link>
        </div>
      </StyledSecondSide>
      <SingleItem setSearchInput={setSearchInput} />
    </StyledMain>
  );
}

export default Main;
