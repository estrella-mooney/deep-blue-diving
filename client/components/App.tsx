import Divers from './Divers'
import Dives from './Dives'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <h1>Dive One Oh One Application</h1>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divers" element={<Divers />} />
          <Route path="/dives" element={<Dives />} />
          <Route path="/divers/add" element={<Divers />} />
          <Route path="/divers/add" element={<Dives />} />
          {/* <Route path="/divers/add" element={<UpdateDiver />} />
          <Route path="/divers/add" element={<UpdateDive />} /> */}
        </Routes>
      </section>
    </>
  )
}

export default App
