import { useState, useEffect, useContext, useRef } from 'react';
import {
  StyledShopContainer,
  StyledDivShop,
  StyledGridShop,
  StyledShopMain,
  StyledBtnShop,
  StyledBtnsContainer,
} from './styles';
import api from '../../api/api';
import { CartContext } from '../../contexts/cartContext';
import ShoeCard from '../../components/ShoeCard';
import SearchFilter from '../../components/Filters/Search';
import SelectFilter from '../../components/Filters/Select';
import SideShop from '../../components/SideShop';
import ModalSideFilter from '../../components/ModalSideFilter';
import shuffle from '../../smallFunctions/shuffle';
import isSmallScreen from '../../smallFunctions/isSmallScreen';

function Shop({ setModalCart, modalCart, searchInput, setSearchInput }) {
  const { order, setOrder } = useContext(CartContext);
  const [shoes, setShoes] = useState([]);
  const [defaultShoes, setDefaultShoes] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const btnRef = useRef(null);

  async function getAllShoes() {
    try {
      const allShoes = await api.get('/shoes');
      const shuffledShoes = shuffle(allShoes.data);
      setDefaultShoes(shuffledShoes);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllShoes();
    if (searchInput) return;
    setShoes(defaultShoes);
  }, []);

  const seeAll = () => {
    setShoes(defaultShoes);
    setSearchInput('');
  };

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
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <SelectFilter shoes={shoes} setShoes={setShoes} />
        </StyledDivShop>
        <StyledBtnsContainer>
          {isSmallScreen() ? (
            <div className="filter-mobile">
              <StyledBtnShop
                onClick={() => setFilterModal(!filterModal)}
                ref={btnRef}
              >
                Filtros
              </StyledBtnShop>
            </div>
          ) : null}
          <StyledBtnShop onClick={seeAll}>Ver todos</StyledBtnShop>
        </StyledBtnsContainer>
        <StyledGridShop>
          {shoes.length === 0 ? (
            <div className="loading-container">
              <h2>Carregando...</h2>
            </div>
          ) : null}
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
