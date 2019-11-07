import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { UsersContext } from '../Dashboard';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    gridGap: theme.spacing(),
    padding: theme.spacing(2)
  }
}));

export function DeleteUserDialog({ userId, open, onClose }) {
  const classes = useStyles();
  const { deleteUser } = useContext(UsersContext);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <div className={classes.buttons}>
        <Button variant="outlined" color="default" onClick={onClose}>
          no
        </Button>
        <Button variant="outlined" color="primary" onClick={() => deleteUser(userId)}>
          yes
        </Button>
      </div>
    </Dialog>
  );
}
