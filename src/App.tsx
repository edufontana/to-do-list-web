import './global.css';
import style from './App.module.css'
import { Header } from "./components/Header"
import { Content } from './components/Content';

function App() {

  return (
    <div className={style.container}>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
