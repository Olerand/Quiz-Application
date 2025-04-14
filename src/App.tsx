import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Achievments from './components/Achievments'
import History from './components/History'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="achievments" element={<Achievments />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default App
