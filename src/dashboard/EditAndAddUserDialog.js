import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UsersContext } from './Dashboard';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '70px 70px',
    justifyItems: 'center',
    alignItems: 'center',
    gridGap: theme.spacing(),
    padding: theme.spacing(2)
  },
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

export function EditAndAddUserDialog({ userId, open, onClose, name, email }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name, email });
  const { editAddUser } = useContext(UsersContext);

  const handleFormChange = key => event => {
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  };

  const onSubmitFunc = event => {
    event.preventDefault();
    if (userId === 'add' && !formData.name && !formData.email) {
      alert('Incorrect data, no user created!');
      return;
    }

    if (!formData.name && !formData.email) {
      alert('Incorrect data!');
      return;
    }

    editAddUser(userId, formData);
    onClose();
  };

  const closeDialogFunc = () => {
    setFormData({});
    onClose();
  };

  const nameValidation = () => formData.name === '';

  const emailValidation = () => {
    if (formData.email) {
      if (formData.email.indexOf('@') === -1) {
        return true;
      }
    }
    return false;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{userId === 'add'? 'Add User' : 'Edit User'}</DialogTitle>
      <form onSubmit={onSubmitFunc}>
        <div className={classes.form}>
          <TextField
            error={nameValidation()}
            value={formData.name || ''}
            onChange={handleFormChange('name')}
            variant="outlined"
            label="Name"
          />
          <TextField
            error={emailValidation()}
            value={formData.email || ''}
            onChange={handleFormChange('email')}
            variant="outlined"
            label="Email"
          />
        </div>
        <div className={classes.buttons}>
          <Button type="button" variant="outlined" color="default" onClick={closeDialogFunc}>
            Cancle
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
