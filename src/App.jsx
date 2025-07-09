import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Home from './pages/home/index';
import Detail from './pages/detail/index';

import WatchList from './pages/watch-list/index';
import { useDispatch } from 'react-redux';
import { getWatchList } from './redux/actions/listActions';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchList())
  }, [])
  return (
    <div className=' flex flex-col h-screen p-5 md:p-10 lg:px-15 xl:px-20'>
      <BrowserRouter>
        <Header />
        <div className='flex-1'>  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/watch-list" element={<WatchList />} />
        </Routes></div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;