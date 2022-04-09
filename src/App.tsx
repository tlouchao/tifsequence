import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import About from 'pages/About'
import Art from 'pages/Art'
import Code from 'pages/Code'
import Other from 'pages/Other'
import 'static/scss/styles.scss'

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='art' element={<Art />}>
          {/*
          <Route path='Sketches' element={<Sketches />} />
          <Route path='Illustrations' element={<Illustrations />} />
          <Route path='3D Renders' element={<ThreeRenders />} />
          */}
        </Route>
        <Route path='code' element={<Code />}>
          {/*
          <Route path='Web Apps' element={<WebApps />} />
          <Route path='3D Graphics' element={<ThreeGraphics />} />
          */}
        </Route>
        <Route path='other' element={<Other />} />
      </Routes>
    </div>
  )
}

export default App;
