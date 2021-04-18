import React from 'react';
import { gfMarathon } from 'goldfish/gfMarathon';
import { Upload } from 'components/Common/Upload/Upload';

import s from './styles.module.css';

type Props = {
  onChange: (f: File, n: string) => void;
};

export const MarathonResultsUpload: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="flex justify-between">
      <Upload
        name="photoBefore"
        onChange={onChange}
        label={gfMarathon.uploadPhotoBefore}
        className={s.uploadItem}
        aspectRation={0.72}
      />
      <span className={s.buffer} />
      <Upload
        name="photoAfter"
        onChange={onChange}
        label={gfMarathon.uploadPhotoAfter}
        className={s.uploadItem}
        aspectRation={0.72}
      />
    </div>
  );
};
