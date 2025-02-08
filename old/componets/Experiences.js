import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../styles/Experience.module.scss'
import { useEffect, useState } from 'react'
import { experiences } from '../utils/experience-list'

export default function Experiences() {
  const defaultClass = `${styles.timeline_info}`
  const [index, setIndex] = useState(0)
  const [classes, setClasses] = useState([defaultClass])

  const onClickHandler = async (_index) => {
    if (_index !== index) {
      setIndex(_index)
      await setClasses([defaultClass, 'ani-show-exp'])
      setTimeout(() => {
        setClasses([defaultClass])
      }, 500)
    }
  }

  const selectedExp = experiences[index]
  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div id="experiences" className={styles.experience_card}>
        <div className={styles.experience_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>Experiences</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <div className={styles.experences}>
            <div className={styles.timeline}>
              <div className={styles.timeline_line}></div>
              <button
                onClick={() => onClickHandler(0)}
                className={`${styles.timeline_btn} ${
                  index === 0 ? 'btn-active' : ''
                }`}
              >
                11/2018
              </button>
              <button
                onClick={() => onClickHandler(1)}
                className={`${styles.timeline_btn} ${
                  index === 1 ? 'btn-active' : ''
                }`}
              >
                08/2020
              </button>
              <button
                onClick={() => onClickHandler(2)}
                className={`${styles.timeline_btn} ${
                  index === 2 ? 'btn-active' : ''
                }`}
              >
                03/2021
              </button>
              <button
                onClick={() => onClickHandler(3)}
                className={`${styles.timeline_btn} ${
                  index === 3 ? 'btn-active' : ''
                }`}
              >
                10/2021
              </button>
            </div>
            <div className={classes.join(' ')}>
              <div className={styles.timeline_heading}>
                <h4>{selectedExp.position}</h4>
                <h4>@ {selectedExp.companyName}</h4>
              </div>
              <p className={styles.timeline_date}>
                {selectedExp.dateFrom} - {selectedExp.dateTo}
              </p>
              <ul className={styles.timeline_work_list}>
                {selectedExp.actions.map((ac, i) => {
                  return <li key={i}>{ac}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
