import React from 'react'
import { EditBox } from '../../blocks/editbox/editbox';
import { ButtonsPanel } from '../../blocks/buttonspanel/buttonspanel';

/* eslint-disable */
import _ from './edit-form.scss';
/* eslint-enable */

export class EditForm extends React.Component {
  constructor (props) {
    super(props);
    const editNote = this.props.editNote;
    this.state = {
      title: editNote.title,
      noteText: editNote.noteText
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onNoteTextChange = this.onNoteTextChange.bind(this);
    this.onBtnSaveClick = this.onBtnSaveClick.bind(this);
  }
  onTitleChange (event) {
    this.setState({ title: event.target.value });
  }
  onNoteTextChange (event) {
    this.setState({ noteText: event.target.value });
  }
  onBtnSaveClick (event) {
    this.props.onBtnSaveClick(
      event,
      this.state.title,
      this.state.noteText
    )
  }
  render () {
    const btnFirst = {
      id: 'btnSave',
      value: 'Сохранить',
      onClick: this.onBtnSaveClick
    };
    const btnSecond = {
      id: 'btnBack',
      value: 'Назад',
      onClick: this.props.onBtnBackClick
    };
    return (
      <div className="edit-form">
        <div className="edit-form__buttonspanel">
          <ButtonsPanel btnfirst={btnFirst} btnsecond={btnSecond}/>
        </div>
        <div className="edit-form__editbox">
          <EditBox
            title={this.state.title}
            noteText={this.state.noteText}
            onTitleChange={this.onTitleChange}
            onNoteTextChange={this.onNoteTextChange}
          />
        </div>
      </div>
    );
  }
}
