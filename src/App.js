import React from 'react'
import { Header, Footer } from './components'
import './scss/main.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'

const App = () => {
  return (
    <div className='ui-wrapper'>
      <Header isLogo />
      <div className='ui-content-wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
