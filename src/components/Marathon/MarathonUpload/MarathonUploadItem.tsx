import { Upload } from 'components/Common/Upload/Upload';

import s from './styles.module.css';

export const MarathonUploadItem = ({ name, onChange, title }) => {
  return (
    <div className={s.uploadItem}>
      <span className={s.uploadItemTitle}>{title}</span>
      <Upload name={name} onChange={onChange} aspectRation={1.7} />
    </div>
  );
};
