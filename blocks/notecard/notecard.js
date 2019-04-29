import React from 'react';

/* eslint-disable */
import _ from './notecard.scss';
/* eslint-enable */

export class NoteCard extends React.Component {
  render () {
    const TITLE_VIEW_MAX_LEN = 25;
    const NOTETEXT_VIEW_MAX_LEN = 40;
    let title = this.props.title;
    let noteText = this.props.noteText;
    if (title.length > TITLE_VIEW_MAX_LEN) {
      title = title.slice(0, TITLE_VIEW_MAX_LEN - 3 ) + '...';
    }
    if (noteText.length > NOTETEXT_VIEW_MAX_LEN) {
      noteText = noteText.slice(0, NOTETEXT_VIEW_MAX_LEN - 3) + '...';
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
