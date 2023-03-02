import styles from './Rodape.module.scss';
import React from 'react';
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
            <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Facebook Icon" />
            </a>
        </div>
        <p>Desenvolvido por <a href="https://github.com/jltrench">João Lucca Trench</a> na formação React Alura</p>
    </footer>
  )
}
