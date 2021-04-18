import useSelector from 'hooks/useSelector';
import { NotifyItem } from './NotifyItem';

import s from './styles.module.css';

export const Notify = () => {
  const { notifyStore } = useSelector('notifyStore');
  return (
    <div className={s.wrapper}>
      {notifyStore.map(item => (
        <NotifyItem key={item.message} {...item} />
      ))}
    </div>
  );
};
