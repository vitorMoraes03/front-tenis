import ColorSideFilter from '../Filters/Color';
import GenderSideFilter from '../Filters/Gender';
import PriceSideFilter from '../Filters/Price';
import CategorySideFilter from '../Filters/Category';
import SizeSideFilter from '../Filters/Size/size';
import { StyledShopSide } from './styles';

function SideShop({ setShoes, defaultShoes, shoes }) {
  return (
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
  );
}

export default SideShop;
