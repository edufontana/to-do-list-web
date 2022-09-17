import style from './Input.module.css'



export function Input(){
  return(
    <textarea name="tarefa" className={style.input}></textarea>
  )
}