import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import 'static/scss/styles.scss'

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Home />} />
        {/*
        <Route path='About' element={<About />} />
        <Route path='Art' element={<Art />}>
          <Route path='Sketches' element={<Sketches />} />
          <Route path='Illustrations' element={<Illustrations />} />
          <Route path='3D Renders' element={<ThreeRenders />} />
        </Route>
        <Route path='Code' element={<Code />}>
          <Route path='Web Apps' element={<WebApps />} />
          <Route path='3D Graphics' element={<ThreeGraphics />} />
        </Route>
        <Route path='Misc' element={<Misc />} />
        */}
      </Routes>
    </div>
  )
}

export default App;
