/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function SearchFilter({ shoes, setShoes, defaultShoes }) {
  const [searchInput, setSearchInput] = useState('');

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    if (!searchInput) {
      setShoes(defaultShoes);
    }
    const filtered = defaultShoes.filter((obj) => {
      const objChars = obj.shoesName.toLowerCase().split('');
      const searchChars = searchInput.toLowerCase().split('');
      return searchChars.every((char, i) => char === objChars[i]);
    });
    setShoes(filtered);
  }, [searchInput]);

  return (
    <div className="div-search-filter">
      <input
        placeholder="Pesquisar por nome"
        value={searchInput}
        onChange={handleSearch}
      />
      <ion-icon name="search-outline" />
    </div>
  );
}

export default SearchFilter;
