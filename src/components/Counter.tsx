import { useState } from "react";
import s from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((state) => state + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className={s.button} onClick={handleClick}>Plus</button>
    </>
  )
}