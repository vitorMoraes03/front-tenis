/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import logosImg from '../../images/logos-credit-card.png';
import { StyledFlex, isSmallScreen } from '../../global';
import { StyledFooter, StyledFooterMedia } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <p>© 2023 Sem fins comerciais.</p>
      <StyledFooterMedia>
        <h3>Siga-nos</h3>
        <StyledFlex>
          <Link to="https://www.linkedin.com/in/vitorr-moraes/" target="_blank">
            <ion-icon name="logo-linkedin" />
          </Link>
          <Link to="https://github.com/vitorMoraes03" target="_blank">
            <ion-icon name="logo-github" />
          </Link>
        </StyledFlex>
      </StyledFooterMedia>
      {isSmallScreen ? null : <img src={logosImg} alt="Logos credit card" />}
    </StyledFooter>
  );
}

export default Footer;
