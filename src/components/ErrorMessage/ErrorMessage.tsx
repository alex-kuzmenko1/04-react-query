import { JSX } from 'react';
import styles from './ErrorMessage.module.css';

export default function ErrorMessage(): JSX.Element {
  return <p className={styles.text}>There was an error, please try again...</p>;
}
