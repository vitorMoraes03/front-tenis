import { useEffect } from 'react';
import Main from './Main';
import Gallery from './Gallery';
import BigImage from './BigImage';

function Home({ searchInput, setSearchInput }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main />
      <Gallery   searchInput={searchInput}
  setSearchInput={setSearchInput}/>
      <BigImage />
    </>
  );
}

export default Home;
