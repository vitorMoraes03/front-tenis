/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledBtnLogin } from '../LoginForm/styles';
import StyledCreateAcc from './styles';

function LoginCreateAcc() {
  const { t } = useTranslation();

  return (
    <StyledCreateAcc>
      <h3>{t('Cliente novo')}?</h3>
      <div>
        <p>{t('Crie uma conta e você será capaz de')}:</p>
        <ul>
          <li>{t('Finalizar seus pedidos')}</li>
          <li>{t('Frete gratuito para todo o Brasil')}</li>
          <li>{t('Promoções exclusivas')}</li>
          <li>{t('Editar o seu perfil')}</li>
        </ul>
        <Link to="/signup">
          <StyledBtnLogin>{t('Criar conta')}</StyledBtnLogin>
        </Link>
      </div>
    </StyledCreateAcc>
  );
}

export default LoginCreateAcc;
