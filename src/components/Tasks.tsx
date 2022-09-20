import style from './Tasks.module.css'
import { ThumbsUp, Trash,  } from 'phosphor-react';

interface TasksProps{
  text: string;
  done: boolean;
  id: string;
  onDelete: (taskId: string) => void;
  onEditTaskDone: (taskId: string) => void;
}

export function Tasks({text, done, id, onDelete, onEditTaskDone}: TasksProps){
  return(
    <div className={style.tasks}>
      {done === false ?
        <button onClick={()=>{onEditTaskDone(id)}} className={style.undone}>
        </button> 
        :
        <button onClick={()=>{onEditTaskDone(id)}} className={style.done}>
         <p>x</p>
        </button>}
      <div className={style.boxText}>
        <p>
          {text}
        </p>
      </div>
      <button className={style.trashIcon} onClick={()=>{onDelete(id)}}>
        <Trash size={18} />
      </button>
    </div>
  )
}