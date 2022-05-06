
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        intev: props.intev
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        this.state.intev
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }
  
  function App() {
    return (
      <div>
        <Clock intev={1000} />
        <Clock intev={2000} />
        <Clock intev={3000} />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  