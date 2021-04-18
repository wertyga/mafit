import classnames from 'classnames';
import s from './styles.module.css';

export const UIBadge = ({ number }) => {
  return (
    <div className={classnames(`UI__badge ${s.badge}`)}>
      <span className={s.content}>{number}</span>
    </div>
  );
};
