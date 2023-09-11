import { ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './theme'
import Example from './components/test'

function App() {

  return (
    <ThemeProvider theme={theme}>
      main route
      <Example />
    </ThemeProvider>
  )
}

export default App
