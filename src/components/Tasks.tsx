import style from './Tasks.module.css'
import { ThumbsUp, Trash } from 'phosphor-react';

interface TasksProps{
  text: string;
  done: boolean;
  id: string;
  onDelete: (taskId: string) => void;
}

export function Tasks({text, done, id, onDelete}: TasksProps){
  return(
    <div className={style.tasks}>
      <button>
        <ThumbsUp/>
      </button>
      <div className={style.boxText}>
        <p>
          {text}
        </p>
      </div>
      <button onClick={()=>{onDelete(id)}}>
        <Trash/>
      </button>
    </div>
  )
}