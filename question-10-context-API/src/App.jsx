
import './App.css'
import ThemeDisplay from './components/ThemeDisplay'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
  <>
  <ThemeProvider>
    <ThemeToggle/>
    <ThemeDisplay/>
  </ThemeProvider>
  </>
  )
}

export default App
