import MaterialDivider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';

import { TypeDividerProps } from '../../core/types/cgpv-types';

const useStyles = makeStyles((theme) => ({
  vertical: {
    alignSelf: 'center',
    height: 40,
    width: 1,
    backgroundColor: theme.palette.primary.contrastText,
  },
  horizontal: {
    height: 1,
    backgroundColor: theme.palette.primary.contrastText,
  },
  grow: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * Create a customized Material UI Divider
 *
 * @param {TypeDividerProps} props the properties passed to the Divider element
 * @returns {JSX.Element} the created Divider element
 */
export function Divider(props: TypeDividerProps): JSX.Element {
  const { className, style, grow, orientation } = props;

  const classes = useStyles();

  let dividerOrientation = classes.horizontal;

  if (orientation) {
    dividerOrientation = orientation === 'horizontal' ? classes.horizontal : classes.vertical;
  }

  return (
    <MaterialDivider
      className={`${dividerOrientation} ${grow !== undefined && grow ? classes.grow : ''} ${className !== undefined ? className : ''}`}
      style={style}
    />
  );
}
