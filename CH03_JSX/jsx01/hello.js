class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.nickname}</h1>
  }
}

ReactDOM.render(
  <Hello nickname="펭수" />,
  document.getElementById('root')
);