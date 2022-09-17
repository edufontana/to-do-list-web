import { Button } from './Button'
import style from './Content.module.css'
import { Input } from './Input'


export function Content(){
  return(
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
        </main>
      </div>
  )
}