import styles from '../styles/home.module.scss'
import MainLayout from "../layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.center}>
        <h1 className="h1">Wellcome</h1>
        <h3>This gather best track</h3>
      </div>
    </MainLayout>
  )
}
