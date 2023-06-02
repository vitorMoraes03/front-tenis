import { useEffect } from 'react';
import Main from './Main';

function Home({ setSearchInput }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Main setSearchInput={setSearchInput}/>;
}

export default Home;
