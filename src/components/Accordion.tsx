import { useState } from 'react'
import styles from './Accordion.module.css'

type Props = {
  title: string
  children: React.ReactNode
}

const Accordion = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CABECERA */}
      <div className={styles.accordeon__title}>
        <h3>{title}</h3>
        <button
          onClick={() => setOpen(!open)}
          className={styles.accordeon__button}
        >
          {open ? 'Cerrar' : 'Abrir'}
        </button>
      </div>

      {/* CONTENIDO */}
      {
        open && (
          <div className={styles.accordeon__content}>
            {children}
          </div>
        )
      }
    </>
  )
}

export default Accordion