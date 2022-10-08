import styles from './section.module.scss'

export default function Section({ children }: any) {
  return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
      	{children}
			</div>
    </section>
  )
}