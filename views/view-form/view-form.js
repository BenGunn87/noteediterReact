import React from 'react';
import { NoteCardList } from '../../blocks/notecardlist/notecardlist';
import { ButtonsPanel } from '../../blocks/buttonspanel/buttonspanel';
import { ViewBox } from '../../blocks/viewbox/viewbox';

/* eslint-disable */
import _ from './view-form.scss';
/* eslint-enable */

export class ViewForm extends React.Component {
  render () {
    const viewCard = this.props.viewCard;
    const btnFirst = {
      id: 'btnAdd',
      value: '+'
    };
    const btnSecond = {
      id: 'btnDel',
      value: '-'
    };
    return (
      <div className="view-form">
        <div className={'row heightAll'}>
          <div className={'col col--4 view-form__note-card-list heightAll'}>
            <NoteCardList notes={this.props.notes}/>
          </div>
          <div className={'col col--8 heightAll'}>
            <div className="view-form__buttonspanel">
              <ButtonsPanel btnfirst={btnFirst} btnsecond={btnSecond}/>
            </div>
            <div className="view-form__viewbox">
              <ViewBox title={viewCard.title} noteText={viewCard.noteText}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
