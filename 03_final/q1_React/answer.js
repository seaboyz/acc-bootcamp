// 1. For the class component, the function should be put after the constructor() method

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
}

// 2. For the function component, the function should be put in the function component.

function App() {
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
}
