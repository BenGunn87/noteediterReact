import React from 'react'
import { EditBox } from '../../blocks/editbox/editbox';
import { ButtonsPanel } from '../../blocks/buttonspanel/buttonspanel';

/* eslint-disable */
import _ from './edit-form.scss';
/* eslint-enable */

export class EditForm extends React.Component {
  render () {
    const btnFirst = {
      id: 'btnSave',
      value: '+'
    };
    const btnSecond = {
      id: 'btnBack',
      value: '<'
    };
    const editNote = this.props.editNote;
    return (
      <div className="edit-form">
        <div className="edit-form__buttonspanel">
          <ButtonsPanel btnfirst={btnFirst} btnsecond={btnSecond}/>
        </div>
        <div className="edit-form__editbox">
          <EditBox title={editNote.title} noteText={editNote.noteText}/>
        </div>
      </div>
    );
  }
}
