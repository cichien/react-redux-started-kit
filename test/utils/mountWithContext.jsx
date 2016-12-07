import { PropTypes } from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();
const mountWithContext = node => mount(node, {
  context: {
    muiTheme: getMuiTheme(),
  },
  childContextTypes: {
    muiTheme: PropTypes.object.isRequired,
  },
});

export default mountWithContext;
