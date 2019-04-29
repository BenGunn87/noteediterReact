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
  ReactDOM.render(
    <MainForm />,
    document.getElementById('root')
  );
});
