import styles from '../styles/Qoute.module.scss'
import { generalSetting } from '../utils/general'

export default function Qoute({ done }) {
  return (
    <div className={`${styles.qoute_container} ${done ? 'ani-quoute' : ''}`}>
      <div className={styles.qoute_horizontal_line}></div>
      <p>{generalSetting.quoute}</p>
      <div className={styles.qoute_horizontal_line}></div>
    </div>
  )
}
