/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TopBarLink } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <TopBarLink
        title={'Home'}
        variant="body1"
        href="home"
        className="accordion__collapsable-link"
      />
      <TopBarLink
        title={'Token'}
        variant="body1"
        href="tokeneconomic"
        className="accordion__collapsable-link"
      />
      <TopBarLink
        title={'Roadmap'}
        variant="body1"
        href="roadmap"
        className="accordion__collapsable-link"
      />
      <TopBarLink
        title={'Charity'}
        variant="body1"
        href="charity"
        className="accordion__collapsable-link"
      />
      <TopBarLink
        title={'Team'}
        variant="body1"
        href="team"
        className="accordion__collapsable-link"
      />
      <TopBarLink
        title={'Whitepaper'}
        variant="body1"
        href="whitepaper"
        className="accordion__collapsable-link"
      />
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;
