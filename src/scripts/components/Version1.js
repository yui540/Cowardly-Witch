import React from 'react'
import VersionView from './VersionView'

export default ({ changeChapter }) => (
  <div className="version-1">
    <VersionView version="1" />
    <div className="version-1__stage">
      <div className="version-1__stage-1">
        <div className="version-1__fantasy">
          <div className="bg" />
          <div className="bg-img" />
          <div className="silhouette">
            <div />
          </div>
          <div className="message">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="version-1__stage-2">
        <div className="bg" />
        <div className="toiro" />
        <div className="bullet">
          <div className="line">
            <div />
            <div />
            <div />
          </div>
          <div className="label-1" />
          <div className="label-2" />
        </div>
        <div className="wall">
          <div className="left">
            <div />
            <div />
            <div />
          </div>
          <div className="text" />
          <div className="right">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="message">
          <div />
          <div />
        </div>
        <div className="word">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="end">
          <div />
          <div />
          <div onAnimationEnd={changeChapter} />
        </div>
      </div>
    </div>
  </div>
)
