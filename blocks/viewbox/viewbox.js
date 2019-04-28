import React from 'react';

/* eslint-disable */
import _ from './viewbox.scss';
/* eslint-enable */

export class ViewBox extends React.Component {
  render () {
    return (
      <div className = "viewbox">
        <h4 className="viewbox__note-title">{this.props.title}</h4>
        <div className="viewbox__note-text">{this.props.noteText}</div>
      </div>
    );
  }
}
