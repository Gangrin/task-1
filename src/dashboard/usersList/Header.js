import React from 'react';
import { string, shape } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: ({ grid, height }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: grid,
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: theme.palette.background.background2,
    height: height
  })
}));

export function Header({ columns, height }) {
  const grid = Object.entries(columns).map(([, grid]) => grid).join(' ');
  const classes = useStyles({ grid, height });

  return (
    <div className={classes.root}>
      {Object.keys(columns).map(element => (
        <Typography key={element} variant="body1" color="textSecondary">
          {element}
        </Typography>
      ))}
    </div>
  );
}

Header.propTypes = {
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
