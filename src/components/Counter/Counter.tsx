import { useState } from 'react';
import styles from '../../Style/Counter.module.sass';
import styles2 from '../../Style/Counter2.module.sass';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.wrapper}>
      <p className={styles2.wrapper}>{counter}</p>
      <div className='buttons'>
        <button onClick={() => setCounter((prev) => prev + 1)}>increase</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>decrease</button>
      </div>
    </div>
  );
}
