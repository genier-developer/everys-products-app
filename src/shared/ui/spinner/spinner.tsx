import s from './spinner.module.scss'
import {FC} from "react";

export const Spinner: FC = () => {
  return (
    <div className={s.spinner}>
      <div className={s.spinner}></div>
    </div>
  )
} 