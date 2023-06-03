import ColorSideFilter from '../Filters/Color';
import GenderSideFilter from '../Filters/Gender';
// import PriceSideFilter from '../Filters/Price';
import CategorySideFilter from '../Filters/Category';
import SizeSideFilter from '../Filters/Size/size';
import { StyledShopSide } from './styles';

function SideShop({ shoes, setFilter, filter }) {
  return (
    <StyledShopSide>
      <ColorSideFilter
        shoes={shoes}
        setFilter={setFilter}
        filter={filter}
      />
      <GenderSideFilter
        shoes={shoes}
        setFilter={setFilter}
        filter={filter}
      />
      {/* <PriceSideFilter shoes={shoes} setFilter={setFilter}  filter={filter}/> */}
      <CategorySideFilter
        shoes={shoes}
        setFilter={setFilter}
        filter={filter}
      />
      <SizeSideFilter
        shoes={shoes}
        setFilter={setFilter}
        filter={filter}
      />
    </StyledShopSide>
  );
}

export default SideShop;
