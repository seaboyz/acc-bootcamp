import Box from './Box'

import colors from './colors'

function App() {
  var [backgroundColor, borderColor] = colors
  return (
    <>
      <Box backgroundColor={backgroundColor} borderColor={borderColor} />
      <Box backgroundColor={backgroundColor} borderColor={borderColor} />
      <Box backgroundColor={backgroundColor} borderColor={borderColor} />
      <Box backgroundColor={backgroundColor} borderColor={borderColor} />
    </>
  )
}

export default App
