import React from 'react'
import VersionView from './VersionView'
import Effect1 from './effects/Effect1'

export default ({ changeChapter }) => (
  <div className="version-5">
    <VersionView version="5" />
    <div className="stage-1">
      <div className="stage-1__paint">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__paint-overray">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__box">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__bound-ball">
        <div className="section">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="section">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="section">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="section">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="section">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="stage-1__color">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__end">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className="stage-2">
      <div className="stage-2__box">
        <div className="area area-1">
          <Effect1 color1="#fff" color2="#C7D35E" />
          <div className="eriri" />
        </div>
        <div className="area area-2">
          <Effect1 color1="#fff" color2="#F2C047" />
          <div className="eriri" />
        </div>
        <div className="area area-3">
          <Effect1 color1="#fff" color2="#8FCDDA" />
          <div className="eriri" />
        </div>
      </div>
    </div>
    <div className="stage-2__panel">
      <div>
        <span />
        <span />
      </div>
      <div>
        <span />
        <span />
      </div>
      <div>
        <span />
        <span />
      </div>
      <div>
        <span />
        <span onAnimationEnd={changeChapter} />
      </div>
    </div>
  </div>
)
