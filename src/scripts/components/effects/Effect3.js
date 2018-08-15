import React from 'react'

export default ({ color, classname }) => (
  <div className={`effect-3 ${classname}`}>
    <div className="circle">
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
    </div>
    <div className="line">
      <div><span style={{ backgroundColor: color }}></span></div>
      <div><span style={{ backgroundColor: color }}></span></div>
      <div><span style={{ backgroundColor: color }}></span></div>
      <div><span style={{ backgroundColor: color }}></span></div>
    </div>
  </div>
)
