import { type FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { type INavigation, navigation } from './config';

import classes from './navigation-bar.module.scss';

export const NavigationBar: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        {navigation.map(({ name, url }: INavigation) => {
          return (
            <div key={name} className={clsx(classes.itemRoot)}>
              <Link to={url} className={classes.item}>
                <div>
                  <h5>{name}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
