import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Todo from '../../components/Todo';
import { addTodo } from '../../actions/todo';

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addTodo,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
