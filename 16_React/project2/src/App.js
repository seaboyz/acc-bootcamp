import Box from './Box'
import colors from './colors'

function App() {
  return colors.map(([background, border]) => (
    <Box background={background} border={border} />
  ))
}

export default App
