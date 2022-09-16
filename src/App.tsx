import './global.css';
import style from './App.module.css'
import { Header } from "./components/Header"

function App() {

  return (
    <div className={style.container}>
      <Header/>
    </div>
  )
}

export default App
