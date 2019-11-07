import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Header } from './Header';
import { User } from './User';

const ROW_HEIGHT = '70px';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: `calc(100% - 160px)`,
    padding: theme.spacing()
  },
  users: {
    listStyle: 'none',
    height: '100%',
    boxSizing: 'border-box',
    width: '100%',
    overflow: 'auto',
    padding: '0px'
  },
  warningContainer: {
    width: '100%',
  }
}));

const COLUMNS = {
  id: '4%',
  name: '19%',
  username: '19%',
  city: '19%',
  email: '19%',
  actions: '20%'
};

export function UsersList({ usersArray }) {
  const classes = useStyles();

  return usersArray.length === 0 ? (
    <div className={classes.warningContainer}>
      <Typography variant="h3" color="textSecondary" align="center">
        NO USERS
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
      <Header columns={COLUMNS} height={ROW_HEIGHT} />
        <ul className={classes.users}>
          {usersArray.map(user => (
            <User key={user.id} height={ROW_HEIGHT} columns={COLUMNS} user={user} />
          ))}
        </ul>
    </div>
  );
}
