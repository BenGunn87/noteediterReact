import React from 'react';

/* eslint-disable */
import _ from './buttonspanel.scss';
/* eslint-enable */

export class ButtonsPanel extends React.Component {
  render () {
    const btnfirst = this.props.btnfirst;
    const btnsecond = this.props.btnsecond;
    return (
      <div className={'row buttons-panel'}>
        <div className="buttons-panel__btnadd">
          <button className="button__button" id={btnfirst.id} onClick={btnfirst.onClick}>{btnfirst.value}</button>
        </div>
        <div className="buttons-panel__btnback">
          <button className="button__button" id={btnsecond.id} onClick={btnsecond.onClick}>{btnsecond.value}</button>
        </div>
      </div>
    );
  }
}
