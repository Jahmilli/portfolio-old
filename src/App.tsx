import React from 'react';
import Home from './components/pages/Home';
import Blog from "./components/pages/Blog";
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import styles from "./App.module.css";

const App: React.FC = () => {
  const [classes, setClasses] = React.useState({
    top: styles.topPage,
    right: styles.rightPage,
    bottom: styles.bottomPage,
    left: styles.leftPage,
  });

  const getStyle = (name: string, active: boolean) => {
    switch(name) {
      case "top": return active ? styles.topPageActive : styles.topPage;
      case "right": return active ? styles.rightPageActive : styles.rightPage;
      case "bottom": return active ? styles.bottomPageActive : styles.bottomPage;
      case "left": return active ? styles.leftPageActive : styles.leftPage;
    }
  }

  const handleSetActive = (name: string) => {
    const newStyle = getStyle(name, true);
    setClasses({
      ...classes,
      [name]: newStyle
    });
  }

  const handleSetInactive = (name: string) => {
    const newStyle = getStyle(name, false);
    console.log('inactive called, newstyle is ', newStyle);
    setClasses({
      ...classes,
      [name]: newStyle
    });
  }

  return (
    <div className={styles.app}>
      <Home handleSetActive={handleSetActive} />
      <div className={classes.top}>
        <Blog position="top" handleSetInactive={handleSetInactive} />
      </div>
      <div className={classes.right}>
        <Resume position="right" handleSetInactive={handleSetInactive} />
      </div>
      <div className={classes.bottom}>
        <About position="bottom" handleSetInactive={handleSetInactive} />
      </div>
      <div className={classes.left}>
        <Contact position="left" handleSetInactive={handleSetInactive} />
      </div>
    </div>
  );
}

export default App;
