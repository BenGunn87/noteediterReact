import React from 'react';
import { NoteCard } from '../notecard/notecard';

/* eslint-disable */
import _ from './notecardlist.scss';
/* eslint-enable */

export class NoteCardList extends React.Component {
  render () {
    const noteList = this.props.notes.map((note) => {
      return (
        <li key={note.noteid} onDoubleClick={() => { this.props.onNoteCardDoubleClick(note.noteid) }}>
          <NoteCard
            key={note.noteid}
            noteid={note.noteid}
            title={note.title}
            noteText={note.noteText}
            selected={note.noteid === this.props.selectedNoteId}
            onNoteCardClick={this.props.onNoteCardClick}
          />
        </li>
      )
    });
    return (
      <div className="note-card-list">
        <div className="note-card-list__search">
          <div className="textbox">
            <div className="row">
              <input
                className={'u-full-width textbox__input'}
                id="search"
                type="text"
                name="search"
                value={null}
                placeholder="Поиск"
                onChange={this.props.onSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="note-card-list__list">
          <ul>
            {noteList}
          </ul>
        </div>
      </div>
    );
  }
}
