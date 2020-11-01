import Box from './Box'

import colors from './colors'

function App() {
  var [backgroundColor, borderColor] = colors
  var borders = ['dotted', 'dashed', 'solid', 'groove']
  return borders.map(border => (
    <Box
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderStyle={border}
    />
  ))
}

export default App
