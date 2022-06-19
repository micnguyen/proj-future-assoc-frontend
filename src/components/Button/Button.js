import './Button.css'

export const Button = ({title, onClick}) => {
  return (
    <button class="my-button" onClick={onClick}>{title}</button>
  )
}