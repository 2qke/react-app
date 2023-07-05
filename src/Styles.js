import logo from "./logo.svg"
import styles from './App.module.css';
import { Title } from "./Components";
import Tailwind from "./Tailwind";
import './tailwind.css'

function Styles() {
    return (
        <div className={styles.App}>

      <Tailwind />
      </div>
    )
}

export default Styles