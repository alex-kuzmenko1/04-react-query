import { JSX } from 'react';
import styles from './Loader.module.css';

export default function Loader(): JSX.Element {
  return <p className={styles.text}>Loading movies, please wait...</p>;
}
