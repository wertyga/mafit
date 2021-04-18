import { gfMenu } from 'goldfish/gfMenu';
import s from './styles.module.css';

export const Logo = () => (
  <h3 className={`logo ${s.logo}`}>{gfMenu.logo.toUpperCase()}</h3>
);
