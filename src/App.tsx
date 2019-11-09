import React from 'react';
import Home from './components/pages/Home';
import Blog from "./components/pages/Blog";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import styles from "./App.module.css";
import Articles from './components/pages/Articles';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState("");
  const [classes, setClasses] = React.useState({
    top: styles.topPage,
    right: styles.rightPage,
    bottom: styles.bottomPage,
    left: styles.leftPage,
  });

  React.useEffect(() => {
    const handleKeyDown = (event: any) => {
      // Used to naviage back to home page on Escape
      if (event.key === "Escape" && activeKey) {
        handleSetInactive(activeKey);
      }
      if (event.key === "ArrowUp" && !activeKey) {
        handleSetActive("top");
      }
      if (event.key === "ArrowRight" && !activeKey) {
        handleSetActive("right");
      }
      if (event.key === "ArrowDown" && !activeKey) {
        handleSetActive("bottom");
      }
      if (event.key === "ArrowLeft" && !activeKey) {
        handleSetActive("left");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeKey]);

  const getStyle = (name: string, active: boolean) => {
    switch(name) {
      case "top": return active ? styles.topPageActive : styles.topPage;
      case "right": return active ? styles.rightPageActive : styles.rightPage;
      case "bottom": return active ? styles.bottomPageActive : styles.bottomPage;
      case "left": return active ? styles.leftPageActive : styles.leftPage;
    }
  }

  const handleSetActive = (name: string) => {
    setClasses({
      ...classes,
      [name]: getStyle(name, true)
    });
    console.log('setting active', name);
    setActiveKey(name);
  }

  const handleSetInactive = (name: string) => {
    console.log('called setinactive');
    setClasses({
      ...classes,
      [name]: getStyle(name, false)
    });
    setActiveKey("");
  }

  return (
    <div className={styles.app}>
      <Home handleSetActive={handleSetActive} />
      <div className={classes.top}>
        <Articles position="top" handleSetInactive={handleSetInactive} />
      </div>
      <div className={classes.right}>
        <Blog position="right" handleSetInactive={handleSetInactive} />
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
