import logo from "./logo.svg"
import styles from './App.module.css';
import { Title } from "./Components";
import Tailwind from "./Tailwind";
import './tailwind.css'
import Button from "./components/Button";
import Tab from "./components/Tab";

function App() {
  return (
    <div className={styles.App}>
      <div style={{padding: 20}}>
        <Tab activeTab={1}>
          <Tab.Panel title="Profil">Tab Panel 1</Tab.Panel>
          <Tab.Panel title="Hakkında">Tab Panel 2</Tab.Panel>
          <Tab.Panel title="Ayarlar">Tab Panel 3</Tab.Panel>
        </Tab>
      </div>
      <div style={{padding: 20}}>
      <Button text="Buton Örneği" />
      <Button text="Buton Örneği" variant="success" />
      </div>
  <Tailwind />
  </div>
);
}

export default App;
