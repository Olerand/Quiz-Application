import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Achievments from './components/Achievments'
import History from './components/History'
import QuizPage from './components/QuizPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path="achievments" element={<Achievments />} />
        <Route path="history" element={<History />} />
        <Route path="quiz/:id" element={<QuizPage />} />
      </Route>
    </Routes>
  )
}

export default App
