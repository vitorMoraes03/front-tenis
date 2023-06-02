/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import SideShop from '../SideShop';
import { ModalSideContainer, OverlaySideFilter } from './style';

function ModalSideFilter({
  setShoes,
  shoes,
  setFilterModal,
  filterModal,
  btnRef,
}) {
  const sideRef = useRef(null);

  function handleClickOutside(e) {
    if (
      sideRef.current &&
      !sideRef.current.contains(e.target) &&
      !btnRef.current.contains(e.target)
    ) {
      setFilterModal(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }

  useEffect(() => {
    if (filterModal) {
      document.addEventListener('click', handleClickOutside);
    }
  }, [filterModal]);

  return (
    <>
      {filterModal ? <OverlaySideFilter /> : null}

      <ModalSideContainer filterModal={filterModal} ref={sideRef}>
        <div className="container-icon">
          <ion-icon
            name="close-outline"
            onClick={() => setFilterModal(false)}
          />
        </div>

        <SideShop
          shoes={shoes}
          setShoes={setShoes}
        />
      </ModalSideContainer>
    </>
  );
}

export default ModalSideFilter;
