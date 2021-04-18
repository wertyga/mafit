import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import _noop from 'lodash/noop';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import { UIVideo } from 'components/UI/UIVideo/UIVideo';
import { getBase64 } from 'utils/file';

import s from './styles.module.css';

type Props = {
  name: string;
  aspectRation?: number;
  video?: boolean;
  onChange?: (f: File, p: string, n: string) => void;
};

export const Upload: React.FC<Props> = ({
  name,
  onChange = _noop,
  aspectRation = 0.55,
  video,
}) => {
  const fileInputRef = useRef<HTMLInputElement>();
  const [state, setState] = useState({
    preview: '',
    file: '',
  });

  const handleChange = async ({ target: { files } }) => {
    if (!files[0]) return;
    const file = files[0];
    const filePreview = (await getBase64(file)) as string;
    setState({ preview: filePreview, file });
    onChange(file, filePreview, name);
  };

  const handleDelete = () => {
    setState({ preview: '', file: '' });
    onChange('', '', name);
    fileInputRef.current.value = '';
  };

  return (
    <div
      className={classnames({
        [s.wrapper]: true,
      })}
      style={{
        paddingTop: `${100 * aspectRation}%`,
      }}
    >
      {state.preview && !video && (
        <img src={state.preview} alt="preview" className={s.preview} />
      )}

      {video && !!state.preview && (
        <UIVideo
          src={state.preview}
          className={s.preview}
          onDelete={handleDelete}
        />
      )}

      <label htmlFor={`upload-${name}`} className={s.label}>
        {!state.preview && <UIIcon icon="download" />}
        <input
          type="file"
          ref={fileInputRef}
          id={`upload-${name}`}
          className={s.input}
          onChange={handleChange}
          readOnly
        />
      </label>
    </div>
  );
};
