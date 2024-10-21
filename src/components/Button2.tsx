interface ButtonProps {
    description:string,
    disabled:boolean,
    style:string
}

function ButtonProps({description, disabled, style} : ButtonProps) {
  
  return (
    <>
        <button disabled={disabled} className={style}>{description}</button>
    </>
  )  
}

export default ButtonProps