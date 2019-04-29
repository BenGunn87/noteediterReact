import React from 'react';

/* eslint-disable */
import _ from './notecard.scss';
/* eslint-enable */

export class NoteCard extends React.Component {
  set value ({ title, noteText }) {
    if (title.length > 25) {
      title = title.slice(0, 22) + '...';
    }
    this.noteTitle.innerHTML = title;
    if (noteText.length > 40) {
      noteText = noteText.slice(0, 40) + '...';
    }
    this.noteText.innerHTML = noteText;
  }
  render () {
    let title = this.props.title;
    let noteText = this.props.noteText;
    if (title.length > 25) {
      title = title.slice(0, 22) + '...';
    }
    if (noteText.length > 40) {
      noteText = noteText.slice(0, 40) + '...';
    }
    const activeClass = this.props.selected ? ' note-card-list__card-active' : '';
    return (
      <div
        className={'note-card' + activeClass}
        data-noteid={this.props.noteid}
        onClick={() => { this.props.onNoteCardClick(this.props.noteid) }}
      >
        <h5 className="note-card__note-title">{title}</h5>
        <div className="note-card__note-text">{noteText}</div>
      </div>
    );
  }
}
