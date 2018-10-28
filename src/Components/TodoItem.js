import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>: {this.props.todo.category}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;
