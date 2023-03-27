import { Link } from 'react-router-dom';
import {
  StyledMain,
  StyledFeatured,
  StyledSecondSide,
  StyledThirdSide,
} from './styles';
import { isSmallScreen } from '../../../global';

function Main() {
  return (
    <StyledMain>
      <StyledFeatured>
        <div className="main-title">
          <div className="text-wrapper">
            {isSmallScreen() ? (
              <Link to="/shop">
                {' '}
                <h1>Comece seu ano com leveza</h1>
              </Link>
            ) : (
              <h1>Comece seu ano com leveza</h1>
            )}

            {isSmallScreen() ? null : <p>Espumas de última tecnologia</p>}
          </div>
        </div>
      </StyledFeatured>
      <StyledSecondSide>
        <div>
          <h2>Lançamento Nike Rexus</h2>
          <Link to="/shop">
            <p>Compre agora</p>
          </Link>
        </div>
      </StyledSecondSide>
      <StyledThirdSide>
        <div>
          <h2>Bem vindo ao futuro</h2>
          <Link to="/shop">
            <p>Os últimos lançamentos do mercado</p>
          </Link>
        </div>
      </StyledThirdSide>
    </StyledMain>
  );
}

export default Main;
