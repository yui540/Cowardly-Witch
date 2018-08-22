import React from 'react'
import VersionView from './VersionView'

export default ({ changeChapter }) => (
  <div className="version-2">
    <VersionView version="2" />
    <div className="version-2__bg">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="version-2__stage-1">
      <div className="bar">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="text" />
      <div className="circle">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="shutter">
        <section>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </section>
        <section>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </section>
      </div>
      <div className="poster">
        <div className="poster-1" />
        <div className="poster-2">
          <div className="line-1" />
          <div className="line-2" />
        </div>
        <div className="poster-3" />
      </div>
      <div className="light">
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    <div className="version-2__stage-2">
      <div className="shutter" />
      <div className="satella" />
      <div className="end">
        <div />
        <div />
        <div />
        <div />
        <div onAnimationEnd={changeChapter} />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
)
