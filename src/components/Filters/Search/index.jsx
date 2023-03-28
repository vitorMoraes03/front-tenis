import { useEffect } from 'react';

function SearchFilter({ setShoes, defaultShoes, searchInput, setSearchInput }) {
  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    if (defaultShoes.length === 0) return;
    if (!searchInput) {
      setShoes(defaultShoes);
    }
    const filtered = defaultShoes.filter((obj) => {
      const objChars = obj.shoesName.toLowerCase().split('');
      const searchChars = searchInput.toLowerCase().split('');
      return searchChars.every((char, i) => char === objChars[i]);
    });
    setShoes(filtered);
  }, [searchInput, defaultShoes]);

  return (
    <div className="div-search-filter">
      <input
        placeholder="Pesquisar por nome"
        value={searchInput}
        onChange={handleChange}
      />
      <ion-icon name="search-outline" />
    </div>
  );
}

export default SearchFilter;
