/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
import sortSelect from '../../smallFunctions/sortSelect';

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
  const [option, setOption] = useState('Recomendados');
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(shoes.currentShoes.length / itemsPerPage);

  console.log(shoes.defaultShoes);

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

    if (commonElements.length === 0) {
      if (allFiltered.flat().length === 0) {
        const copy = [...shoes.defaultShoes];
        setShoes({ ...shoes, currentShoes: sortSelect(option, copy) });
      } else {
        setShoes({ ...shoes, currentShoes: [] });
      }
      return;
    }

    const sorted = sortSelect(option, idToObjects.flat());
    setShoes({ ...shoes, currentShoes: [...sorted] });
  }, [filter]);

  useEffect(() => {
    getAllShoes();
    if (searchInput) return;
    setShoes({ ...shoes, currentShoes: shoes.defaultShoes });
  }, []);

  function getCurrentPageItems() {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shoes.currentShoes.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    return currentItems;
  }

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
          <SelectFilter
            shoes={shoes}
            setShoes={setShoes}
            option={option}
            setOption={setOption}
          />
        </StyledDivShop>
        <StyledBtnsContainer>
          {isSmallScreen() ? (
            <div className="filter-mobile">
              <StyledBtnShop
                onClick={() => setFilterModal(!filterModal)}
                ref={btnRef}
              >
                {t('Filtros')}
              </StyledBtnShop>
            </div>
          ) : null}
        </StyledBtnsContainer>
        <StyledGridShop>
          {shoes.currentShoes.length === 0 ? (
            <div className="loading-container">
              <h2>{t('Carregando')}...</h2>
            </div>
          ) : null}
          {getCurrentPageItems().map((element) => (
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
        <div className="pagination-icons-container">
          {currentPage === 1 || shoes.defaultShoes.length === 0 ? (
            <span> </span>
          ) : (
            <ion-icon
              name="chevron-back-circle-outline"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
          )}
          {currentPage === totalPages || shoes.defaultShoes.length === 0 ? (
            <span> </span>
          ) : (
            <ion-icon
              name="chevron-forward-circle-outline"
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          )}
        </div>
      </StyledShopMain>
    </StyledShopContainer>
  );
}

export default Shop;
