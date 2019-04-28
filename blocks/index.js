import React from 'react';
import ReactDOM from 'react-dom';
import {ViewBox} from './viewbox/viewbox'
import {EditBox} from './editbox/editbox'
import {ButtonsPanel} from './buttonspanel/buttonspanel'
import {NoteCard} from './notecard/notecard'
import {NoteCardList} from './notecardlist/notecardlist'
import {ViewForm} from '../views/view-form/view-form'
import {EditForm} from '../views/edit-form/edit-form'
import {MainForm} from '../views/main-form/main-form'

/* eslint-disable */
import _ from './index.scss';
/* eslint-enable */

window.addEventListener('DOMContentLoaded', () => {
  const editNote = {
    title: 'Заголовк Р',
    noteText: 'Текст заголовка'
  };
  const viewCard = {
    title: 'Заголовок 1',
    noteText: 'Текст заголовка'
  };
  const notes = [{
    noteid: 1,
    title: 'Заголовок1',
    noteText: 'Текст заметки1'
  }, {
    noteid: 2,
    title: 'Заголовок2',
    noteText: 'Текст заметки2'
  }, {
    noteid: 3,
    title: 'Заголовок3',
    noteText: 'Текст заметки3'
  }];
  const viewForm = {
    viewCard: viewCard,
    notes: notes
  };
  const activeForm = 'view';
  ReactDOM.render(
    <MainForm activeForm={activeForm} editNote={editNote} viewForm={viewForm}/>,
    document.getElementById('root')
  );
});
