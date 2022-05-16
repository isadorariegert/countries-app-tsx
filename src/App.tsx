import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import CountriesList from './pages/CountriesList/CountriesList';
import CountryDetail from './pages/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<CountriesList />}></Route>
          <Route path='/countrydetail/:code' element={<CountryDetail />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
