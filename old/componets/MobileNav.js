import { useState, useEffect } from 'react'
import styles from '../styles/MobileNav.module.scss'
export default function MobileNav({ done }) {
  const [checked, setCheked] = useState(false)
  const [hide, setHide] = useState(false)
  const [scrollUp, setScrollUp] = useState({
    lastPos: 0,
    scroll: false,
    onTop: true,
  })
  const [classes, setClasses] = useState([`${styles.mobile_nav}`])
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos > 120) {
      if (currentScrollPos < scrollUp.lastPos) {
        setScrollUp({
          lastPos: currentScrollPos,
          scroll: true,
          onTop: false,
        })
        setHide(false)
      } else {
        setScrollUp({
          lastPos: currentScrollPos,
          scroll: false,
          onTop: false,
        })
        setHide(true)
      }
    } else if (currentScrollPos === 0) {
      setScrollUp({
        ...scrollUp,
        onTop: true,
      })
    } else {
      setHide(false)
      setScrollUp({
        ...scrollUp,
        scroll: false,
        onTop: false,
      })
    }
  }

  useEffect(() => {
    if (done) {
      setClasses([`${styles.mobile_nav}`, 'ani-nav'])

      if (hide) {
        setCheked(false)
        setClasses([`${styles.mobile_nav}`, 'mnav-hide'])
      }
      if (scrollUp.scroll) {
        setClasses([`${styles.mobile_nav}`, 'ani-nav-scroll-down'])
      }

      if (scrollUp.onTop) {
        setClasses([`${styles.mobile_nav}`, 'ani-nav'])
      }
    }
  }, [hide, done, scrollUp.onTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollUp.lastPos])

  return (
    <nav className={classes.join(' ')}>
      <input
        checked={checked}
        onChange={() => setCheked(!checked)}
        type="checkbox"
        className={styles.mobile_nav_checkbox}
      />
      <div className={styles.mobile_nav_humberger}>
        <div></div>
      </div>

      <div className={styles.mobile_nav_link_container}>
        <div>
          <div>
            <ul className={styles.mobile_nav_link_list}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experiences">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.logo_container}>
        <a href="/Tenido-Ruther-V.-Resume.pdf" target="_blank">
          <button className={styles.mobilenav_btn_resume}>Resume</button>
        </a>

        <a href="#">
          <svg
            viewBox="22.875 162.594 395.203 100.813"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.paths}
              d="M 46.069 241.122 C 42.322 241.122 39.056 240.425 36.269 239.032 C 33.482 237.639 31.316 235.689 29.769 233.182 C 28.222 230.675 27.449 227.749 27.449 224.402 L 27.449 200.842 C 27.449 197.449 28.222 194.509 29.769 192.022 C 31.316 189.542 33.482 187.605 36.269 186.212 C 39.056 184.819 42.322 184.122 46.069 184.122 C 49.769 184.122 52.999 184.819 55.759 186.212 C 58.519 187.605 60.672 189.542 62.219 192.022 C 63.766 194.509 64.539 197.449 64.539 200.842 L 53.139 200.842 C 53.139 198.615 52.519 196.919 51.279 195.752 C 50.032 194.585 48.269 194.002 45.989 194.002 C 43.709 194.002 41.949 194.585 40.709 195.752 C 39.469 196.919 38.849 198.615 38.849 200.842 L 38.849 224.402 C 38.849 226.582 39.469 228.265 40.709 229.452 C 41.949 230.645 43.709 231.242 45.989 231.242 C 48.269 231.242 50.032 230.645 51.279 229.452 C 52.519 228.265 53.139 226.582 53.139 224.402 L 64.539 224.402 C 64.539 227.749 63.766 230.675 62.219 233.182 C 60.672 235.689 58.519 237.639 55.759 239.032 C 52.999 240.425 49.769 241.122 46.069 241.122 ZM 87.585 241.122 C 83.885 241.122 80.668 240.425 77.935 239.032 C 75.195 237.639 73.078 235.689 71.585 233.182 C 70.091 230.675 69.345 227.749 69.345 224.402 L 69.345 200.842 C 69.345 197.495 70.091 194.569 71.585 192.062 C 73.078 189.555 75.195 187.605 77.935 186.212 C 80.668 184.819 83.885 184.122 87.585 184.122 C 91.331 184.122 94.561 184.819 97.275 186.212 C 99.988 187.605 102.091 189.555 103.585 192.062 C 105.078 194.569 105.825 197.495 105.825 200.842 L 105.825 224.402 C 105.825 227.749 105.078 230.675 103.585 233.182 C 102.091 235.689 99.988 237.639 97.275 239.032 C 94.561 240.425 91.331 241.122 87.585 241.122 Z M 87.585 231.242 C 89.865 231.242 91.575 230.645 92.715 229.452 C 93.855 228.265 94.425 226.582 94.425 224.402 L 94.425 200.842 C 94.425 198.615 93.868 196.919 92.755 195.752 C 91.641 194.585 89.918 194.002 87.585 194.002 C 85.251 194.002 83.528 194.585 82.415 195.752 C 81.301 196.919 80.745 198.615 80.745 200.842 L 80.745 224.402 C 80.745 226.582 81.315 228.265 82.455 229.452 C 83.595 230.645 85.305 231.242 87.585 231.242 ZM 129.481 240.362 L 111.471 240.362 L 111.471 184.882 L 129.481 184.882 C 133.334 184.882 136.691 185.615 139.551 187.082 C 142.411 188.555 144.641 190.622 146.241 193.282 C 147.834 195.942 148.631 199.069 148.631 202.662 L 148.631 222.502 C 148.631 226.049 147.834 229.165 146.241 231.852 C 144.641 234.539 142.411 236.629 139.551 238.122 C 136.691 239.615 133.334 240.362 129.481 240.362 Z M 122.871 195.522 L 122.871 229.722 L 129.481 229.722 C 131.814 229.722 133.687 229.062 135.101 227.742 C 136.521 226.429 137.231 224.682 137.231 222.502 L 137.231 202.662 C 137.231 200.535 136.521 198.815 135.101 197.502 C 133.687 196.182 131.814 195.522 129.481 195.522 L 122.871 195.522 ZM 188.856 240.362 L 154.656 240.362 L 154.656 184.882 L 188.856 184.882 L 188.856 194.612 L 165.826 194.612 L 165.826 207.072 L 186.196 207.072 L 186.196 216.802 L 165.826 216.802 L 165.826 230.632 L 188.856 230.632 L 188.856 240.362 ZM 219.458 240.362 L 209.428 240.362 L 209.428 184.882 L 222.728 184.882 L 237.088 227.822 C 236.941 225.949 236.765 223.782 236.558 221.322 C 236.358 218.869 236.195 216.412 236.068 213.952 C 235.941 211.492 235.878 209.402 235.878 207.682 L 235.878 184.882 L 245.908 184.882 L 245.908 240.362 L 232.608 240.362 L 218.398 197.422 C 218.551 199.042 218.701 200.969 218.848 203.202 C 219.001 205.429 219.141 207.682 219.268 209.962 C 219.395 212.242 219.458 214.269 219.458 216.042 L 219.458 240.362 ZM 289.324 240.362 L 252.084 240.362 L 252.084 230.022 L 266.524 230.022 L 266.524 208.822 L 253.984 208.822 L 253.984 198.562 L 277.164 198.562 L 277.164 230.022 L 289.324 230.022 L 289.324 240.362 Z M 271.084 191.952 C 269.004 191.952 267.344 191.419 266.104 190.352 C 264.864 189.292 264.244 187.849 264.244 186.022 C 264.244 184.195 264.864 182.752 266.104 181.692 C 267.344 180.625 269.004 180.092 271.084 180.092 C 273.164 180.092 274.824 180.625 276.064 181.692 C 277.304 182.752 277.924 184.195 277.924 186.022 C 277.924 187.849 277.304 189.292 276.064 190.352 C 274.824 191.419 273.164 191.952 271.084 191.952 ZM 311.839 241.122 C 308.093 241.122 304.826 240.425 302.039 239.032 C 299.253 237.639 297.086 235.689 295.539 233.182 C 293.993 230.675 293.219 227.749 293.219 224.402 L 293.219 200.842 C 293.219 197.449 293.993 194.509 295.539 192.022 C 297.086 189.542 299.253 187.605 302.039 186.212 C 304.826 184.819 308.093 184.122 311.839 184.122 C 315.539 184.122 318.769 184.819 321.529 186.212 C 324.289 187.605 326.443 189.542 327.989 192.022 C 329.536 194.509 330.309 197.449 330.309 200.842 L 318.909 200.842 C 318.909 198.615 318.289 196.919 317.049 195.752 C 315.803 194.585 314.039 194.002 311.759 194.002 C 309.479 194.002 307.719 194.585 306.479 195.752 C 305.239 196.919 304.619 198.615 304.619 200.842 L 304.619 224.402 C 304.619 226.582 305.239 228.265 306.479 229.452 C 307.719 230.645 309.479 231.242 311.759 231.242 C 314.039 231.242 315.803 230.645 317.049 229.452 C 318.289 228.265 318.909 226.582 318.909 224.402 L 330.309 224.402 C 330.309 227.749 329.536 230.675 327.989 233.182 C 326.443 235.689 324.289 237.639 321.529 239.032 C 318.769 240.425 315.539 241.122 311.839 241.122 ZM 370.835 240.362 L 336.635 240.362 L 336.635 184.882 L 370.835 184.882 L 370.835 194.612 L 347.805 194.612 L 347.805 207.072 L 368.175 207.072 L 368.175 216.802 L 347.805 216.802 L 347.805 230.632 L 370.835 230.632 L 370.835 240.362 ZM 388.711 240.362 L 377.391 240.362 L 377.391 184.882 L 395.251 184.882 C 399.204 184.882 402.624 185.565 405.511 186.932 C 408.398 188.299 410.641 190.249 412.241 192.782 C 413.834 195.315 414.631 198.305 414.631 201.752 C 414.631 205.352 413.758 208.569 412.011 211.402 C 410.264 214.242 407.894 216.295 404.901 217.562 L 415.391 240.362 L 403.001 240.362 L 394.031 219.382 L 388.711 219.382 L 388.711 240.362 Z M 388.711 194.762 L 388.711 209.502 L 395.251 209.502 C 397.784 209.502 399.748 208.869 401.141 207.602 C 402.534 206.335 403.231 204.562 403.231 202.282 C 403.231 199.902 402.534 198.055 401.141 196.742 C 399.748 195.422 397.784 194.762 395.251 194.762 L 388.711 194.762 Z"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}
