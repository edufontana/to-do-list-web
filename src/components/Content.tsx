import { Button } from './Button'
import style from './Content.module.css'
import { Input } from './Input'


export function Content(){
  return(
    <>
    <div className={style.wrapper}>
        <main className={style.main}> 
          <div className={style.wrapperContent}>
            <div className={style.wrapperInput}>
              <Input/>
            </div>
            <div className={style.wrapperButton}>
              <Button/>
            </div>
            
          </div>
          <div className={style.wrapperTask}>
            <div className={style.createTask}>
              <p>{`Tarefas criadas`}</p>
              <span>{0}</span>
            </div>
            <div className={style.doneTaks}>
              <p>{`Concluídas`}</p>
              <span>{0}</span>
            </div>
          </div>
          <div className={style.wrapperTasks}>
           <h1>aa</h1>
          </div>
        </main>
      </div> 
      </>
  )
}