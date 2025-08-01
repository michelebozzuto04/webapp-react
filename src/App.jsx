import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SingleMoviePage from './pages/SingleMoviePage'
import DefaultLayout from './layouts/DefaultLayout'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<SingleMoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
