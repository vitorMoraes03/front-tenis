import { useEffect } from 'react';
import Main from './Main';
import Gallery from './Gallery';
import BigImage from './BigImage';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main />
      <Gallery />
      <BigImage />
    </>
  );
}

export default Home;
