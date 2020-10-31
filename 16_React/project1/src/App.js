

import randomColor from 'randomcolor'

import Box from './Box'

var colors = randomColor({ count: 4 })

function App() {
  return colors.map(color => <Box color={color} />)
}

export default App
