import React from 'react'

import skipImg from '../../images/prologue/skip.svg'

export default ({ changeChapter, skipChapter }) => (
  <div className="prologue">
    <div className="prologue__bg" />
    <div className="prologue__frame" />
    <div className="prologue__search-box">
      <div className="prologue__search-wrapper">
        <div className="prologue__search-line prologue__search-line_type_1">
          <div />
        </div>
        <div className="prologue__search-line prologue__search-line_type_2">
          <div />
        </div>
        <div className="prologue__search-bar">
          <div className="prologue__search-word">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
    <div className="prologue__view-box">
      <div className="prologue__loading">
        <div />
      </div>
      <div className="prologue__bg-effects">
        <div />
        <div />
        <div />
      </div>
      <div className="prologue__catchcopy">
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className="prologue__end">
      <div />
      <div />
      <div onAnimationEnd={changeChapter} />
    </div>
    <div className="prologue__skip" onClick={skipChapter}>
      <img className="skip" src={skipImg} alt="スキップボタン" />
    </div>
  </div>
)
