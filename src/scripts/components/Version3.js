import React from 'react'
import VersionView from './VersionView'

export default () => (
  <div className="version-3">
    <VersionView version="3" />
    <div className="stage-1">
      <div className="stage-1__bg">
        <div className="small-ball"></div>
        <div className="small-ball"></div>
        <div className="small-ball"></div>
        <div className="small-ball"></div>
        <div className="big-ball"></div>
      </div>
      <div className="stage-1__frame">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="stage-1__ball">
        <div></div><div></div><div></div>
      </div>
      <div className="stage-1__box">
        <div className="stage-1__box-effects">
          <div></div><div></div><div></div>
        </div>
        <div className="stage-1__box-frame">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
      <div className="stage-1__end">
        <div></div><div></div><div></div>
      </div>
    </div>
  </div>
)
