import { connect } from 'react-redux';

import Todo from '../../components/Todo';

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
