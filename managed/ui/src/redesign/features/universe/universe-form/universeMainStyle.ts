import { makeStyles } from '@material-ui/core';

export const useFormMainStyles = makeStyles((theme) => ({
  mainConatiner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  },

  formHeader: {
    marginLeft: theme.spacing(1),
    position: 'fixed',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    height: theme.spacing(7.5), // top navbar height
    zIndex: 1030,
    '& span': {
      color: theme.palette.ybacolors.ybDarkGray1,
      marginLeft: theme.spacing(1)
    }
  },

  headerFont: {
    fontFamily: 'Rubik,Helvetica Neue,sans-serif',
    fontSize: theme.spacing(3.25),
    fontWeight: 500
  },

  subHeaderFont: {
    color: '#9f9ea7',
    fontFamily: 'Rubik,Helvetica Neue,sans-serif',
    fontSize: theme.spacing(2.5),
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.5)
  },

  selectedTab: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(3),
    borderBottom: `3px solid ${theme.palette.orange[500]}`,
    color: theme.palette.common.black,
    fontFamily: 'Rubik,Helvetica Neue,sans-serif',
    height: '100%'
  },

  disabledTab: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(3),
    color: theme.palette.common.black,
    height: '100%',
    opacity: 0.35,
    fontFamily: 'Rubik,Helvetica Neue,sans-serif',
    borderBottom: `3px solid ${theme.palette.ybacolors.backgroundDisabled}`
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    padding: theme.spacing(0, 3),
    width: '100%'
  },

  formFooter: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(1, 3),
    background: '#f6f6f5'
  },

  formButtons: {
    height: theme.spacing(3.75),
    borderRadius: theme.spacing(0.5)
  }
}));

export const useSectionStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    flexDirection: 'column',
    borderBottom: `1px solid ${theme.palette.ybacolors.ybGrayHover}`
  },
  sectionHeaderFont: {
    fontFamily: 'Rubik,Helvetica Neue,sans-serif',
    fontWeight: 500,
    fontSize: theme.spacing(2.25)
  }
}));

export const useFormFieldStyles = makeStyles(() => ({
  itemDisabled: {
    cursor: 'not-allowed',
    opacity: 0.5
  }
}));

export const useFormFieldStyles = makeStyles(() => ({
  itemDisabled: {
    cursor: 'not-allowed',
    opacity: 0.5
  }
}));
