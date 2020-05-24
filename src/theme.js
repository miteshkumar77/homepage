import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey'; 

const Theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
    backgroundColor: grey
  },
});

export default Theme; 