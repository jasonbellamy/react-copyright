'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactYear = require('react-year');

var _reactYear2 = _interopRequireDefault(_reactYear);

var Copyright = _react2['default'].createClass({
  displayName: 'Copyright',

  propTypes: {
    position: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      position: 'pre'
    };
  },

  render: function render() {
    if (this.props.position === 'pre') {
      return _react2['default'].createElement(
        'span',
        null,
        '© Copyright ',
        _react2['default'].createElement(_reactYear2['default'], { format: this.props.format, date: this.props.date }),
        ' ',
        this.props.children
      );
    }

    if (this.props.position === 'post') {
      return _react2['default'].createElement(
        'span',
        null,
        this.props.children,
        ' © Copyright ',
        _react2['default'].createElement(_reactYear2['default'], { format: this.props.format, date: this.props.date })
      );
    }
  }

});

exports['default'] = Copyright;
module.exports = exports['default'];