import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';
import { ClassName } from 'types/root';

import s from './styles.module.css';

type Props = {
  src?: string;
  className?: ClassName;
  onDelete?: () => void;
};

export const UIVideo: React.FC<Props> = ({ src, className, onDelete }) => {
  const video = useRef<HTMLVideoElement>();
  const [isPlay, setPlay] = useState(false);

  const handlePlay = () => {
    video.current.play();
    setPlay(true);
  };

  const handlePause = () => setPlay(false);

  return (
    <div className={classnames(s.wrapper, className)}>
      {!isPlay && !!src && (
        <UIIcon icon="play" className={s.playIcon} onClick={handlePlay} />
      )}
      {!!src && !!onDelete && (
        <UIIcon icon="closeCircle" onClick={onDelete} className={s.closeIcon} />
      )}
      <video
        controls={isPlay}
        className={s.video}
        ref={video}
        onPause={handlePause}
      >
        <source src={src} />
      </video>
    </div>
  );
};
