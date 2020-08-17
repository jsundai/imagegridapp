import React, {Component} from 'react'
import './App.css';
import ButtonAppBar from './components/Header'
import TitlebarGridList from './components/Cards'
import MyButton from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <TitlebarGridList />
        <MyButton/>
      </div>
    );
  }
}

export default App;