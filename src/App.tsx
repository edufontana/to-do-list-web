import './global.css';
import style from './App.module.css'
import { Header } from "./components/Header"
import { Content } from './components/Content';


export const task = [
  {
    id: 1,
    isTrue: false,
    text: 'dasuhdusahdisuahdisuahdiusahdusahd'
  },
  {
    id: 2,
    isTrue: false,
    text: '43543trtrt'
  },
  {
    id: 3,
    isTrue: false,
    text: 'd232222222222222222222222222'
  },
  {
    id: 4,
    isTrue: false,
    text: 'fghfghfghfghfgh'
  },
  {
    id: 5,
    isTrue: false,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
]

function App() {

  return (
    <div className={style.container}>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
