import { useEffect } from 'react';
import sortSelect from '../../../smallFunctions/sortSelect';

function SelectFilter({ shoes, setShoes, option, setOption }) {
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
      <option value="Ordernar por">Ordenar por</option>
      <option value="Menor preço">Menor preço</option>
      <option value="Maior preço">Maior preço</option>
    </select>
    <ion-icon name="chevron-down-outline"/>
    </div>
  );
}

export default SelectFilter;
