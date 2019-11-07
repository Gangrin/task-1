import React, { useState } from 'react';
import { shape, string } from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import { DeleteUserDialog } from './DeleteUserDialog';
import { EditAndAddUserDialog } from '../EditAndAddUserDialog';

const useStyles = makeStyles(theme => ({
  root: ({ grid, height }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: grid,
    alignItems: 'center',
    justifyItems: 'center',
    height: height,
    listStylePosition: 'center',
    paddingLeft: '0px'
  }),
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export function User({ columns, height, user }) {
  const grid = Object.entries(columns).map(([, grid]) => grid).join(' ');
  const classes = useStyles({ grid, height });
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const handleDeleteDialog = () => setDeleteDialog(prev => !prev);
  const handleEditDialog = () => setEditDialog(prev => !prev);

  return (
    <li className={classes.root}>
      <Typography variant="body2">
        {user.id || ''}
      </Typography>
      <Typography variant="body2">
        {user.name || ''}
      </Typography>
      <Typography variant="body2">
        {user.username || ''}
      </Typography>
      <Typography variant="body2">
        {user.address ? user.address.city || '' : ''}
      </Typography>
      <Typography variant="body2">
        {user.email || ''}
      </Typography>
      <div className={classes.actions}>
        <IconButton title="Edit" onClick={handleEditDialog}>
          <Edit />
        </IconButton>
        <IconButton title="Delete" onClick={handleDeleteDialog}>
          <Delete />
        </IconButton>
      </div>
      <DeleteUserDialog userId={user.id} open={deleteDialog} onClose={handleDeleteDialog}/>
      <EditAndAddUserDialog
        userId={user.id}
        open={editDialog}
        onClose={handleEditDialog}
        name={user.name || ''}
        email={user.email || ''}
      />
    </li>
  );
}

User.propTypes = {
  columns: shape({
    id: string,
    name: string,
    username: string,
    city: string,
    email: string,
    actions: string
  }).isRequired,
  height: string.isRequired
};
