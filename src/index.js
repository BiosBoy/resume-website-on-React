import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import './styles/style.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

class Wrapper extends React.Component {
  render() {
    return <App/>;
  }
}

ReactDOM.render(
  <Wrapper/>,
  document.getElementById('root')
);

