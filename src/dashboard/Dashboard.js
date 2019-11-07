import React, { createContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import AddCircle from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import { useUsersData } from './useUsersData';
import { UsersList } from './usersList/UsersList';
import { EditAndAddUserDialog } from './EditAndAddUserDialog';

export const UsersContext = createContext(null);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateRows: '100px 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: theme.palette.background.background2
  },
  title: {
    justifySelf: 'flex-start',
    marginLeft: theme.spacing(4)
  },
  listContainer: {
    height: '100%',
    width: '100%'
  },
  addUserIcon: {
    marginRight: theme.spacing()
  }
}));

export function Dashboard() {
  const classes = useStyles();
  const [usersArray, deleteUser, editAddUser] = useUsersData();
  const [dialogToggle, setDialogToggle] = useState(false);

  const handleDialogToggleChange = () => {
    setDialogToggle(prev => !prev);
  };

  return (
    <UsersContext.Provider value={{ deleteUser, editAddUser }}>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          Dashboard
        </Typography>
        <Card className={classes.listContainer}>
          <CardHeader
            title="User List"
            action={
              <Fab variant="extended" color="primary" onClick={handleDialogToggleChange}>
                <AddCircle className={classes.addUserIcon} />
                Add User
              </Fab>
            }
          />
          <Divider />
          <UsersList usersArray={usersArray} />
        </Card>
      </div>
      <EditAndAddUserDialog
        open={dialogToggle}
        onClose={handleDialogToggleChange}
        userId="add"
      />
    </UsersContext.Provider>
  );
}
