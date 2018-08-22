import React from 'react'
import VersionView from './VersionView'
import Effect2 from './effects/Effect2'

export default ({ changeChapter }) => (
  <div className="version-6">
    <VersionView version="6" />
    <div className="stage-1">
      <div className="stage-1__box">
        <div className="area area-1">
          <div className="frame">
            <div />
            <div />
            <div />
            <div />
          </div>
          <Effect2 color="#fff" />
          <div className="char">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="area area-2">
          <div className="frame">
            <div />
            <div />
            <div />
            <div />
          </div>
          <Effect2 color="#fff" />
          <div className="char">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="area area-3">
          <div className="frame">
            <div />
            <div />
            <div />
            <div />
          </div>
          <Effect2 color="#fff" />
          <div className="char">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="area area-4">
          <div className="frame">
            <div />
            <div />
            <div />
            <div />
          </div>
          <Effect2 color="#fff" />
          <div className="char">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="stage-1__shutter">
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__shutter-2">
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className="version-6__end">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div onAnimationEnd={changeChapter} />
    </div>
  </div>
)
