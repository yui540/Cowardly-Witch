import React from 'react'

export default ({ color1, color2, classname }) => (
  <div className={`effect-1 ${classname}`}>
    <div style={{ backgroundColor: color1 }} />
    <div style={{ backgroundColor: color2 }} />
  </div>
)
