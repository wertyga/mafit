import React from 'react';
import Link from 'next/link';
import { Upload } from 'components/Common/Upload/Upload';
import { gfMarathon } from 'goldfish/gfMarathon';
import { MarathonUploadItem } from './MarathonUploadItem';

import s from './styles.module.css';

type Props = {
  onChange: (i: File, p: string, n: string) => void;
  previews?: Record<string, string>;
};

export const MarathonUpload: React.FC<Props> = ({
  onChange,
  previews = {},
}) => {
  const handleChange = (image: File, name: string, preview: string) => {
    onChange(image, preview, name);
  };

  return (
    <div className="pt-2 row">
      <h4>{gfMarathon.uploadPhotoBefore}</h4>
      <div className="flex-column">
        <div className={s.images}>
          <MarathonUploadItem
            title={gfMarathon.photoFront}
            name="front"
            onChange={handleChange}
            preview={previews.front}
          />
          <MarathonUploadItem
            title={gfMarathon.photoRear}
            name="rear"
            onChange={handleChange}
            preview={previews.rear}
          />
          <MarathonUploadItem
            title={gfMarathon.photoRight}
            name="right"
            onChange={handleChange}
            preview={previews.right}
          />
          <MarathonUploadItem
            title={gfMarathon.photoLeft}
            name="left"
            onChange={handleChange}
            preview={previews.left}
          />
        </div>
        <Link href="#">
          <a className={s.example}>{gfMarathon.photoExample}</a>
        </Link>
      </div>

      <h4>{gfMarathon.uploadVideoBefore}</h4>
      <div className={s.video}>
        <Upload
          name="video"
          onChange={handleChange}
          video
          urlSrc={previews.video}
        />
        <Link href="#">
          <a className={`mt-3 ${s.example}`}>{gfMarathon.videoExample}</a>
        </Link>
      </div>
    </div>
  );
};
