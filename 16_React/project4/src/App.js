import './App.css'

import Box from './Box'

import styles from './styles'

function App() {
  return styles.map(([backgroundColor, borderColor, borderStyle, size]) => (
    <Box
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderStyle={borderStyle}
      size={size}
    />
  ))
}

export default App
