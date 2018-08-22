import React from 'react'

export default ({ version }) => (
  <div className="version-view">
    <div className="version-view__bg" />
    <div className="version-view__frame">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="version-view__rect">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="version-view__body">
      <div className={`version-view__text version-view__text_type_${version}`}>
        <div />
      </div>
      <div className={`version-view__label version-view__label_type_${version}`} />
    </div>
  </div>
)
