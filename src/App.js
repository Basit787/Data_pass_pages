import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page_One from './Page_One';
import Page_Two from './Page_Two';
import { useState } from 'react';


function App() {

  const [page, setPage] = useState("/pageone");
  const [params, setParams] = useState(null);

  const navigateTo = (route, data) => {
    setPage(route);
    setParams(data)
  }

  const getPageElement = () => {
    switch (page) {
      case "/pageone": return <Page_One state={params} navigateTo={navigateTo} />
      case "/pagetwo": return <Page_Two state={params} navigateTo={navigateTo} />
    }
  }

  return (
    <div>

      {getPageElement()}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page_One />} />
          <Route path='/pagetwo' element={<Page_Two />} />
        </Routes>
      </BrowserRouter> */}



    </div>
  );
}

export default App;
