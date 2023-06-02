import ColorSideFilter from '../Filters/Color';
import GenderSideFilter from '../Filters/Gender';
// import PriceSideFilter from '../Filters/Price';
import CategorySideFilter from '../Filters/Category';
import SizeSideFilter from '../Filters/Size/size';
import { StyledShopSide } from './styles';

function SideShop({ setShoes, shoes }) {
  return (
    <StyledShopSide>
      <ColorSideFilter setShoes={setShoes} shoes={shoes} />
      <GenderSideFilter
        shoes={shoes}
        setShoes={setShoes}
      />
      {/* <PriceSideFilter setShoes={setShoes} defaultShoes={defaultShoes} /> */}
      <CategorySideFilter setShoes={setShoes} shoes={shoes} />
      <SizeSideFilter setShoes={setShoes} shoes={shoes} />
    </StyledShopSide>
  );
}

export default SideShop;
