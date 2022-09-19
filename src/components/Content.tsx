import { Button } from './Button'
import style from './Content.module.css'
import { Input } from './Input'
import { Tasks } from './Tasks'
import {task} from '../App'
import { useState } from 'react'
import uuid from 'react-uuid';


export function Content(){

  interface TasksProps{
    id: string;
    done: boolean;
    text: string;
  }

  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState('')



  function handleAddNewTask(){

    if(newTask === ''){
      alert('preencha o campo')
      return;
    }

    setTasks([...tasks, {
      id: uuid(),
      done: false,
      text: newTask,
    }])
    setNewTask('')
  }

  const tasksDone = tasks.filter((item)=>{
    if(item.done === false){
      return false
    }
    return item
  })


  function handleDeleteTask(taskId: string){
    const newArrayTask = tasks.filter((item) =>{
      if(item.id === taskId){
        return false
      }
      return item
    })
    console.log(newArrayTask)
    setTasks(newArrayTask)
  }

  function handleDoneTask(taskId: string){

    const newArray = tasks.map((item)=>{
      if(taskId === item.id){
        return{
          ...item,
          done: !item.done,
        }
      }
      return item;
    })
    console.log(newArray)
    setTasks(newArray)
    /* const taksIndex = tasks.findIndex((task) =>{
      return task.id === taskId;
    })
      tasks[taksIndex].done = !tasks[taksIndex].done
      setTasks([...tasks]) */
  }

  return(
    <>
    <div className={style.wrapper}>
        <main className={style.main}> 
          <div className={style.wrapperContent}>
            <div className={style.wrapperInput}>
              <textarea 
              name="tarefa" 
              className={style.input}
              value={newTask}
              onChange={(t) => setNewTask(t.target.value)}
              />
            </div>
            <div className={style.wrapperButton}>
              <Button text={'Criar'} onClick={() =>{
                handleAddNewTask()
              }}/>
            </div>
            
          </div>
          <div className={style.wrapperTask}>
            <div className={style.createTask}>
              <p>{`Tarefas criadas`}</p>
              <span>{tasks.length}</span>
            </div>
            <div className={style.doneTaks}>
              <p>{`Concluídas`}</p>
              <span>{`${tasksDone.length} de ${tasks.length}`}</span>
            </div>
          </div>
         {tasks.length !== 0 ? 
          <div className={style.wrapperTasks}>
          {tasks.map(item =>(
            <Tasks 
            text={item.text} 
            done={item.done}
            id={item.id} 
            onDelete={handleDeleteTask}
            onEditTaskDone={handleDoneTask}/>
          ))}
        </div> :
          <div className={style.noTasks}>
            <p>Você ainda não tem tarefas</p>
          </div>
        }
        </main>
      </div> 
      </>
  )
}