
import React from 'react'
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>
        <strong>Click the links below to view the range examples:</strong>
        <nav>
        <span onClick={()=> navigate("/exercise1")}>Normal Range</span>
        <span onClick={()=> navigate("/exercise2")}>Fixed values range</span>
        </nav>       

      </main>

    </div>
  )
}

export default Home
