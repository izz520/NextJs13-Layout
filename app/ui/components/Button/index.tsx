import React, { FunctionComponent } from 'react'
export enum BUTTONTYPE {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = "link"
}
export enum BUTTONSIZE {
    Large = 'lg',
    Small = 'sm',
}
interface IBaseButton {
  className?: string;
  disabled?: boolean;
  size?: BUTTONSIZE;
  btnType?: BUTTONTYPE;
  href?: string;
}
const Button:FunctionComponent<IBaseButton> = () => {
  return (
    <div>Button</div>
  )
}

export default Button