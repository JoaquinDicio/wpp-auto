import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Appointments from './pages/Appointments'
import Templates from './pages/Templates'
import Schedules from './pages/Schedules'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/schedules" element={<Schedules />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
