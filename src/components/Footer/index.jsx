/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledFlex } from '../../global';
import { StyledFooter, StyledFooterMedia } from './styles';
import isSmallScreen from '../../smallFunctions/isSmallScreen';

function Footer() {
  const { t } = useTranslation();

  return isSmallScreen() ? (
    <StyledFooter>
      <StyledFlex>
        <Link to="https://www.linkedin.com/in/vitorr-moraes/" target="_blank">
          <ion-icon name="logo-linkedin" />
        </Link>
        <Link to="https://github.com/vitorMoraes03" target="_blank">
          <ion-icon name="logo-github" />
        </Link>
      </StyledFlex>
    </StyledFooter>
  ) : (
    <StyledFooter>
      <p>© 2023 {t('Sem fins comerciais')}.</p>
      <StyledFooterMedia>
        <h3>{t('Siga-nos')}</h3>
        <StyledFlex>
          <Link to="https://www.linkedin.com/in/vitorr-moraes/" target="_blank">
            <ion-icon name="logo-linkedin" />
          </Link>
          <Link to="https://github.com/vitorMoraes03" target="_blank">
            <ion-icon name="logo-github" />
          </Link>
        </StyledFlex>
      </StyledFooterMedia>
    </StyledFooter>
  );
}

export default Footer;
