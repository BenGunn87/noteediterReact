import React from 'react';

/* eslint-disable */
import _ from './editbox.scss';
/* eslint-enable */

export class EditBox extends React.Component {
  render () {
    return (
      <div className="editbox">
        <div className={'editbox__note-title row'}>
          <div className="textbox">
            <div className="row">
              <input className={'u-full-width textbox__input'} id="note-title" type="text" name="note-title" value={this.props.title} placeholder="Заголовок"/>
            </div>
          </div>
        </div>
        <div className={'editbox__note-textarea row'}>
          <textarea className={'u-full-width textareabox__textarea'} id="note-textarea" name="note-textarea" placeholder="Заметка" value={this.props.noteText}/>
        </div>
      </div>
    );
  }
}
