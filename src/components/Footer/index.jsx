/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import logosImg from '../../images/logos-credit-card.png';
import { StyledFlex } from '../../global';
import {
  StyledFooter,
  StyledFooterMain,
  StyledFooterBottom,
  StyledFooterCta,
  StyledFooterMedia,
  StyledFooterUls,
} from './styles';

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterMain>
        <StyledFooterCta>
          <h3>Receba novidades</h3>
          <div>
            <input placeholder="Registre seu Email" />
            <ion-icon name="chevron-forward-outline" />
          </div>
        </StyledFooterCta>
        <StyledFooterUls>
          <div>
            <Link to="">
              <li>Garantia</li>
            </Link>
            <Link to="">
              <li>Contato</li>
            </Link>
            <Link to="">
              <li>FAQ</li>
            </Link>
          </div>
          <div>
            <Link to="">
              <li>Sobre</li>
            </Link>
            <Link to="">
              <li>Licença</li>
            </Link>
          </div>
        </StyledFooterUls>
        <StyledFooterMedia>
          <h3>Siga-nos</h3>
          <StyledFlex>
            <ion-icon name="logo-linkedin" />
            <ion-icon name="logo-github" />
          </StyledFlex>
        </StyledFooterMedia>
      </StyledFooterMain>
      <StyledFooterBottom>
        <p>© 2023 Made Shoes Copyright</p>
        <img src={logosImg} alt="Logos credit card" />
      </StyledFooterBottom>
    </StyledFooter>
  );
}

export default Footer;
