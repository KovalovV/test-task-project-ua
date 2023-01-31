import { useEffect, useRef, useState, type FC } from 'react';
import clsx from 'clsx';

import { type LoaderProps } from './types';

import classes from './loader.module.scss';

// in milliseconds
const minimumForShow = 200;

export const Loader: FC<LoaderProps> = ({ loading, fullWidth }) => {
  const [show, setShow] = useState(loading);
  const loadingTime = useRef(0);

  // this hook need for showing loader minimum for defined time
  useEffect(() => {
    if (loading) {
      loadingTime.current = Date.now();
      setShow(true);
    } else {
      const loadingTimeDuration = Date.now() - loadingTime.current;
      if (loadingTimeDuration < minimumForShow) {
        setTimeout(() => {
          setShow(false);
        }, minimumForShow - loadingTimeDuration);
      } else {
        setShow(false);
      }
    }
  }, [loading]);

  return (
    <div
      className={clsx(
        classes.root,
        show && classes.active,
        fullWidth && classes.fullWidth,
      )}
    >
      <div className={classes.loader} />
    </div>
  );
};
