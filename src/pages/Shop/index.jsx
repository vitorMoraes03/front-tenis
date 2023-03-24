import { useState, useEffect, useContext, useRef } from 'react';
import {
  StyledShopContainer,
  StyledDivShop,
  StyledGridShop,
  StyledShopMain,
  StyledBtnShop,
} from './styles';
import api from '../../api/api';
import { CartContext } from '../../contexts/cartContext';
import ShoeCard from '../../components/ShoeCard';
import SearchFilter from '../../components/Filters/Search';
import SelectFilter from '../../components/Filters/Select';
import SideShop from '../../components/SideShop';
import { shuffle, isSmallScreen } from '../../global';
import ModalSideFilter from '../../components/ModalSideFilter';

function Shop({ setModalCart, modalCart }) {
  const { order, setOrder } = useContext(CartContext);
  const [shoes, setShoes] = useState([]);
  const [defaultShoes, setDefaultShoes] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const btnRef = useRef(null);

  async function getAllShoes() {
    try {
      const allShoes = await api.get('/shoes');
      const shuffledShoes = shuffle(allShoes.data);
      setShoes(shuffledShoes);
      setDefaultShoes(shuffledShoes);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllShoes();
  }, []);

  return (
    <StyledShopContainer>
      {isSmallScreen() ? (
        <ModalSideFilter
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
          setFilterModal={setFilterModal}
          filterModal={filterModal}
          btnRef={btnRef}
        />
      ) : (
        <SideShop
          shoes={shoes}
          setShoes={setShoes}
          defaultShoes={defaultShoes}
        />
      )}
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
        {isSmallScreen ? (
          <div className="filter-mobile">
            <StyledBtnShop
              onClick={() => setFilterModal(!filterModal)}
              ref={btnRef}
            >
              Filtros
            </StyledBtnShop>
          </div>
        ) : null}
        <StyledGridShop>
          {shoes.map((element) => (
            <ShoeCard
              element={element}
              order={order}
              setOrder={setOrder}
              key={element.shoesName}
              setModalCart={setModalCart}
              modalCart={modalCart}
            />
          ))}
        </StyledGridShop>
      </StyledShopMain>
    </StyledShopContainer>
  );
}

export default Shop;
