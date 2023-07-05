import logo from "./logo.svg"
import styles from './App.module.css';
import { Title } from "./Components";
import Tailwind from "./Tailwind";
import './tailwind.css'

function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>

      <p>
        {process.env.REACT_APP_EBUNUMBER}
      </p>
    <Tailwind />
    </div>
  );
}

export default App;
