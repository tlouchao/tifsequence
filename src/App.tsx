import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import About from 'pages/About'
import Resources from 'pages/Resources'
import Misc from 'pages/Misc'
import 'static/scss/styles.scss'

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resources' element={<Resources />} />
        <Route path='misc' element={<Misc />} />
      </Routes>
    </div>
  )
}

export default App;
