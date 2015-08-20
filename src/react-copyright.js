import React from 'react';
import Year from 'react-year';

const Copyright = React.createClass({

  propTypes: {
    position: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      position: 'pre'
    };
  },

  render () {
    if (this.props.position === 'pre') {
      return (
        <span>&#169; Copyright <Year format={this.props.format} date={this.props.date}/> {this.props.children}</span>
      );
    }

    if (this.props.position === 'post') {
      return (
        <span>{this.props.children} &#169; Copyright <Year format={this.props.format} date={this.props.date}/></span>
      );
    }
  }

});

export default Copyright;
