/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function SelectFilter({ shoes, setShoes }) {
  const [option, setOption] = useState('Recomendados');

  function handleChange(e) {
    setOption(e.target.value);
  }

  useEffect(() => {
    if (option === 'Menor preço') {
      const copyArr = [...shoes.currentShoes];
      const sorted = copyArr.sort((a, b) => a.price - b.price);
      setShoes({...shoes, currentShoes: [...sorted]});
    }

    if (option === 'Maior preço') {
      const copyArr = [...shoes.currentShoes];
      const sorted = copyArr.sort((a, b) => b.price - a.price);
      setShoes({...shoes, currentShoes: [...sorted]});
    }

    if (option === 'Ordernar por') {
      const copyArr = [...shoes.currentShoes];
      const sorted = copyArr.sort(() => Math.random() - 0.5)
      setShoes({...shoes, currentShoes: [...sorted]});
    }
  }, [option]);

  return (
    <select onChange={handleChange}>
      <option value="Ordernar por">Ordenar por</option>
      <option value="Menor preço">Menor preço</option>
      <option value="Maior preço">Maior preço</option>
    </select>
  );
}

export default SelectFilter;
