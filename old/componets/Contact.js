import styles from '../styles/Contact.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { generalSetting } from '../utils/general'

export default function Contact() {
  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div id="contact" className={styles.contact_card}>
        <div className={styles.contact_info}>
          <p className={styles.contact_sub_title}>Want to work Together?</p>
          <h1 className={styles.contat_title}>Get In Touch</h1>
          <p className={styles.contact_message}>
            I do enjoy freelancing but, I am currently looking for any
            opportunities, my inbox is always open. Whether you have an interest
            working with me or have any questions, I will be pleased to respond.
            God Speed!
          </p>
          <a href={generalSetting.emailTo} className={styles.contact_btn}>
            <button>Email Me</button>
          </a>
        </div>
      </div>
    </ScrollAnimation>
  )
}
