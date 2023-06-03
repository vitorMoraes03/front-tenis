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
  const [filterModal, setFilterModal] = useState(false);
  const btnRef = useRef(null);
  const [shoes, setShoes] = useState({
    currentShoes: [],
    defaultShoes: [],
  });
  const [filter, setFilter] = useState({
    color: [],
    category: [],
    size: [],
    price: [],
    gender: [],
  });

  // tenho que separar o que é shoes e o q é filter
  // toda vez que filter muda eu atualizo shoes
  // se forem o msm objeto, vai bugar o useEfect

  async function getAllShoes() {
    try {
      const allShoes = await api.get('/shoes');
      const shuffledShoes = shuffle(allShoes.data);
      setShoes({ ...shoes, defaultShoes: [...shuffledShoes] });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log('filter', filter);

    const allFiltered = [
      filter.color,
      filter.category,
      filter.gender,
      filter.size,
      filter.price,
    ];

    const commonElements = allFiltered.reduce((acc, curr) => {
      if (curr.length === 0) {
        return acc;
      }
      if (acc.length === 0) {
        return curr;
      }
      return acc.filter((element) => curr.includes(element));
    });

    const idToObjects = commonElements.map((element) =>
      shoes.defaultShoes.filter((shoe) => shoe._id === element)
    );

    console.log('commonElements', commonElements);

    if (commonElements.length === 0) {
      if (allFiltered.flat().length === 0) {
        setShoes({ ...shoes, currentShoes: shoes.defaultShoes });
      } else {
        setShoes({ ...shoes, currentShoes: [] });
      }
      return;
    }

    setShoes({ ...shoes, currentShoes: [...idToObjects.flat()] });

    // select bugando
  }, [filter]);

  useEffect(() => {
    getAllShoes();
    if (searchInput) return;
    setShoes({ ...shoes, currentShoes: shoes.defaultShoes });
  }, []);

  const seeAll = () => {
    setShoes({ ...shoes, currentShoes: shoes.defaultShoes });
    setSearchInput('');
  };

  return (
    <StyledShopContainer>
      {isSmallScreen() ? (
        <ModalSideFilter
          shoes={shoes}
          setShoes={setShoes}
          setFilter={setFilter}
          filter={filter}
          setFilterModal={setFilterModal}
          filterModal={filterModal}
          btnRef={btnRef}
        />
      ) : (
        <SideShop
          shoes={shoes}
          setShoes={setShoes}
          setFilter={setFilter}
          filter={filter}
        />
      )}
      <StyledShopMain>
        <h1>Shop</h1>
        <StyledDivShop>
          <SearchFilter
            shoes={shoes}
            setShoes={setShoes}
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
          {shoes.currentShoes.length === 0 ? (
            <div className="loading-container">
              <h2>Carregando...</h2>
            </div>
          ) : null}
          {shoes.currentShoes.map((element) => (
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
