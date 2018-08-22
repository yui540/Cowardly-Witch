import React from 'react'
import VersionView from './VersionView'
import Effect1 from './effects/Effect1'
import Effect2 from './effects/Effect2'

export default ({ changeChapter }) => (
  <div className="version-3">
    <VersionView version="3" />
    <div className="stage-1">
      <div className="stage-1__bg">
        <div className="small-ball" />
        <div className="small-ball" />
        <div className="small-ball" />
        <div className="small-ball" />
        <div className="big-ball" />
      </div>
      <div className="stage-1__frame">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__ball">
        <div />
        <div />
        <div />
      </div>
      <div className="stage-1__box">
        <div className="stage-1__box-effects">
          <div />
          <div />
          <div />
        </div>
        <div className="stage-1__box-frame">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="stage-1__end">
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className="stage-2">
      <div className="stage-2__frame">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-2__effect-1" />
      <div className="stage-2__effect-2">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="stage-2__bg-ball" />
      <div className="stage-2__ball" />
      <div className="stage-2__line-effects">
        <Effect1 color1="rgb(250, 247, 217)" color2="#e58840" classname="eff-0" />
        <Effect1 color1="rgb(250, 247, 217)" color2="#e58840" classname="eff-1" />
        <Effect1 color1="rgb(250, 247, 217)" color2="#e58840" classname="eff-2" />
        <Effect1 color1="rgb(250, 247, 217)" color2="#e58840" classname="eff-3" />
        <Effect1 color1="rgb(250, 247, 217)" color2="#e58840" classname="eff-4" />
      </div>
      <div className="stage-2__line" />
      <div className="stage-2__box">
        <div className="bg">
          <div />
          <div />
        </div>
        <div className="char char-1">
          <div />
          <div />
          <div />
        </div>
        <div className="char char-2">
          <div />
          <div />
          <div />
        </div>
        <div className="char char-3">
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="stage-2__box-effects">
        <Effect2 color="#fff" classname="eff-0" />
        <Effect2 color="#fff" classname="eff-1" />
        <Effect2 color="#fff" classname="eff-2" />
        <Effect2 color="#fff" classname="eff-3" />
      </div>
    </div>
    <div className="version-3__end">
      <div />
      <div />
      <div onAnimationEnd={changeChapter} />
    </div>
  </div>
)
