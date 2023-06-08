/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function SearchFilter({ setShoes, shoes, searchInput, setSearchInput }) {
  const { t } = useTranslation();

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    if (shoes.defaultShoes.length === 0) return;
    if (!searchInput) {
      setShoes({...shoes, shoes: [...shoes.defaultShoes]});
    }
    const filtered = shoes.defaultShoes.filter((obj) => {
      const objChars = obj.shoesName.toLowerCase().split('');
      const searchChars = searchInput.toLowerCase().split('');
      return searchChars.every((char, i) => char === objChars[i]);
    });
    setShoes({ ...shoes, currentShoes: [...filtered]});
  }, [searchInput, shoes.defaultShoes]);

  return (
    <div className="div-search-filter">
      <input
        placeholder={t('Pesquisar por nome')}
        value={searchInput}
        onChange={handleChange}
      />
      <ion-icon name="search-outline" />
    </div>
  );
}

export default SearchFilter;
