import { Link } from 'react-router-dom';
import {
  StyledMain,
  StyledFeatured,
  StyledSecondSide,
} from './styles';
import isSmallScreen from '../../../smallFunctions/isSmallScreen';
import SingleItem from '../SingleItem';

function Main({ setSearchInput }) {
  return (
    <StyledMain>
      <StyledFeatured>
        <Link to="/shop">
          <div className="main-title">
            <div className="text-wrapper">
              <h1>Comece seu ano com leveza</h1>
              {isSmallScreen() ? null : <p>Espumas de última tecnologia</p>}
            </div>
          </div>
        </Link>
      </StyledFeatured>
      <StyledSecondSide>
        <div>
          <h2>Lançamento Nike Rexus</h2>
          <Link to="/shop">
            <p>Compre agora</p>
          </Link>
        </div>
      </StyledSecondSide>
      <SingleItem setSearchInput={setSearchInput}/>
    </StyledMain>
  );
}

export default Main;
