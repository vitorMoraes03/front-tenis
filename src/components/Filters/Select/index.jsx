/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import sortSelect from '../../../smallFunctions/sortSelect';

function SelectFilter({ shoes, setShoes, option, setOption }) {
  const { t } = useTranslation();

  function handleChange(e) {
    setOption(e.target.value);
  }

  useEffect(() => {
    const sorted = sortSelect(option, shoes.currentShoes);
    setShoes({ ...shoes, currentShoes: [...sorted] });
  }, [option]);

  return (
    <div className='container-select'>
    <select onChange={handleChange}>
      <option value="Ordernar por">{t('Ordenar por')}</option>
      <option value="Menor preço">{t('Menor preço')}</option>
      <option value="Maior preço">{t('Maior preço')}</option>
    </select>
    <ion-icon name="chevron-down-outline"/>
    </div>
  );
}

export default SelectFilter;
