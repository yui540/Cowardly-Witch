import React from 'react'

export default ({ changeChapter }) => (
  <div className="prologue">
    <div className="prologue__bg"></div>
    <div className="prologue__frame"></div>
    <div className="prologue__search-box">
      <div className="prologue__search-wrapper">
        <div className="prologue__search-line prologue__search-line_type_1">
          <div></div>
        </div>
        <div className="prologue__search-line prologue__search-line_type_2">
          <div></div>
        </div>
        <div className="prologue__search-bar">
          <div className="prologue__search-word">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div className="prologue__view-box">
      <div className="prologue__loading">
        <div></div>
      </div>
      <div className="prologue__bg-effects">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="prologue__catchcopy">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="prologue__end">
      <div></div>
      <div></div>
      <div onAnimationEnd={changeChapter}></div>
    </div>
  </div>
)
