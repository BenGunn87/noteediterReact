import React from 'react'
import {ViewForm} from '../view-form/view-form'
import {EditForm} from '../edit-form/edit-form'

/* eslint-disable */
import _ from './main-form.scss';
/* eslint-enable */

export class MainForm extends React.Component {
  render () {
    let activeForm;
    if (this.props.activeForm === 'view') {
      const viewForm = this.props.viewForm;
      activeForm = <ViewForm viewCard={viewForm.viewCard} notes={viewForm.notes}/>;
    }
    if (this.props.activeForm === 'edit') {
      const editNote = this.props.editNote;
      activeForm = <EditForm editNote={editNote}/>;
    }
    if (this.props.activeForm === 'add') {
      const editNote = {
        title: '',
        noteText: ''
      };
      activeForm = <EditForm editNote={editNote}/>;
    }
    return (
      <div className="mainbox">
        {activeForm}
      </div>
    );
  }
}
