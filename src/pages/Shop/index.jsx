import { useState, useEffect, useContext } from 'react';
import {
  StyledShopContainer,
  StyledDivShop,
  StyledGridShop,
  StyledShopMain,
  StyledShopSide,
} from './styles';
import api from '../../api/api';
import { CartContext } from '../../contexts/cartContext';
import ShoeCard from '../../components/ShoeCard';
import ColorSideFilter from '../../components/Filters/Color';
import GenderSideFilter from '../../components/Filters/Gender';
import PriceSideFilter from '../../components/Filters/Price';
import CategorySideFilter from '../../components/Filters/Category';
import SizeSideFilter from '../../components/Filters/Size/size';
import SearchFilter from '../../components/Filters/Search';
import SelectFilter from '../../components/Filters/Select';

function Shop() {
  const { order, setOrder } = useContext(CartContext);
  const [shoes, setShoes] = useState([]);
  const [defaultShoes, setDefaultShoes] = useState([]);

  async function getAllShoes() {
    try {
      const allShoes = await api.get('/shoes');
      setShoes(allShoes.data);
      setDefaultShoes(allShoes.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllShoes();
  }, []);

  return (
    <StyledShopContainer>
      <StyledShopSide>
        <ColorSideFilter setShoes={setShoes} defaultShoes={defaultShoes} />
        <GenderSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
        <PriceSideFilter setShoes={setShoes} defaultShoes={defaultShoes} />
        <CategorySideFilter setShoes={setShoes} defaultShoes={defaultShoes} />
        <SizeSideFilter setShoes={setShoes} defaultShoes={defaultShoes} />
      </StyledShopSide>
      <StyledShopMain>
        <h1>Shop</h1>
        <StyledDivShop>
          <SearchFilter
            shoes={shoes}
            setShoes={setShoes}
            defaultShoes={defaultShoes}
          />
          <SelectFilter shoes={shoes} setShoes={setShoes} />
        </StyledDivShop>
        <StyledGridShop>
          {shoes.map((element) => (
            <ShoeCard
              element={element}
              orderState={{ order, setOrder }}
              key={element.shoesName}
            />
          ))}
        </StyledGridShop>
      </StyledShopMain>
    </StyledShopContainer>
  );
}

export default Shop;
