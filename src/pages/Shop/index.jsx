import { useState, useEffect, useContext } from 'react';
import {
  StyledShopContainer,
  StyledDivShop,
  StyledGridShop,
  StyledBtnShop,
  StyledShopMain,
  StyledShopSide,
} from './styles';
import api from '../../api/api';
import { CartContext } from '../../contexts/cartContext';
import ShoeCard from '../../components/ShoeCard';
import ColorSideFilter from '../../components/SideFilter/Color';
import GenderSideFilter from '../../components/SideFilter/Gender';
import PriceSideFilter from '../../components/SideFilter/Price';
import CategorySideFilter from '../../components/SideFilter/Category';
import SizeSideFilter from '../../components/SideFilter/Size/size';

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
        <ColorSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
        <GenderSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
        <PriceSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
        <CategorySideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
        <SizeSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
      </StyledShopSide>
      <StyledShopMain>
        <h1>Shop</h1>
        <StyledDivShop>
          <StyledBtnShop>Filter green</StyledBtnShop>
          <StyledBtnShop onClick={() => console.log('teste')}>
            genderPick
          </StyledBtnShop>
          <select>
            <option>Teste 1</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
          </select>
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
