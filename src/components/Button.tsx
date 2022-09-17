import style from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({text, ...rest}: ButtonProps){
  return(
    <button className={style.button} {...rest}>
      {text}
    </button>
  )
}