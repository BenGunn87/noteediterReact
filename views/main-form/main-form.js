import React from 'react'
import { ViewForm } from '../view-form/view-form'
import { EditForm } from '../edit-form/edit-form'
import { NoteList } from '../../model/notelist'

/* eslint-disable */
import _ from './main-form.scss';
/* eslint-enable */

export class MainForm extends React.Component {
  constructor (props) {
    super(props);
    this.noteList = new NoteList();
    this.state = {
      activeForm: 'view',
      searchStr: '',
      notes: this.noteList.noteList,
      selectedNoteId: -1
    };
    this.onBtnAddClick = this.onBtnAddClick.bind(this);
    this.onBtnBackClick = this.onBtnBackClick.bind(this);
    this.onBtnSaveClick = this.onBtnSaveClick.bind(this);
    this.onBtnDelClick = this.onBtnDelClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onNoteCardClick = this.onNoteCardClick.bind(this);
    this.onNoteCardDoubleClick = this.onNoteCardDoubleClick.bind(this);
  }
  onNoteCardClick (noteid) {
    this.setState({ selectedNoteId: noteid });
  }
  onNoteCardDoubleClick (noteid) {
    this.setState({
      selectedNoteId: noteid,
      activeForm: 'edit'
    });
  }
  onBtnAddClick (event) {
    this.setState({ activeForm: 'add' });
  }
  onBtnBackClick (event) {
    this.setState({ activeForm: 'view' });
  }
  onBtnSaveClick (event, saveNote) {
    let noteid;
    if (this.state.activeForm === 'add') {
      const newNote = this.noteList.addNote(saveNote);
      noteid = newNote.noteid;
    }
    if (this.state.activeForm === 'edit') {
      saveNote.noteid = this.state.selectedNoteId;
      this.noteList.updNote(saveNote);
      noteid = saveNote.noteid;
    }
    this.setState({
      activeForm: 'view',
      notes: this.noteList.noteList,
      selectedNoteId: noteid
    });
  }
  onBtnDelClick (event) {
    if (this.state.selectedNoteId === -1) return;
    this.noteList.delNote(this.state.selectedNoteId);
    this.setState({
      notes: this.noteList.noteList,
      selectedNoteId: -1
    });
  }
  onSearchChange (event) {
    this.setState({
      searchStr: event.target.value,
      selectedNoteId: -1
    });
  }
  render () {
    let activeForm;
    // форма простомтка
    if (this.state.activeForm === 'view') {
      const viewCard = this.noteList.getNoteById(this.state.selectedNoteId);
      const notes = this.state.notes.filter((item) => {
        return (
          item.title.toUpperCase().indexOf(this.state.searchStr.toUpperCase()) !== -1 ||
          item.noteText.toUpperCase().indexOf(this.state.searchStr.toUpperCase()) !== -1
        );
      });
      activeForm = <ViewForm
        viewCard={viewCard}
        notes={notes}
        selectedNoteId={this.state.selectedNoteId}
        onBtnAddClick={this.onBtnAddClick}
        onBtnDelClick={this.onBtnDelClick}
        onSearchChange={this.onSearchChange}
        onNoteCardClick={this.onNoteCardClick}
        onNoteCardDoubleClick={this.onNoteCardDoubleClick}
        searchStr={this.state.searchStr}
      />;
    }
    // форма редактирования
    if (this.state.activeForm === 'edit') {
      const editNote = this.noteList.getNoteById(this.state.selectedNoteId);
      activeForm = <EditForm
        editNote={editNote}
        onBtnSaveClick={this.onBtnSaveClick}
        onBtnBackClick={this.onBtnBackClick}
      />;
    }
    // форма добавления
    if (this.state.activeForm === 'add') {
      const editNote = {
        title: '',
        noteText: ''
      };
      activeForm = <EditForm
        editNote={editNote}
        onBtnBackClick={this.onBtnBackClick}
        onBtnSaveClick={this.onBtnSaveClick}
      />;
    }
    return (
      <div className="mainbox">
        {activeForm}
      </div>
    );
  }
}
