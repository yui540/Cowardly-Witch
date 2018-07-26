import React from 'react'
import Prologue from '../containers/Prologue'

export default ({ chapter, description }) => {
  if (chapter === 'Prologue') {
    console.log('> 臆病な魔女_')
  }
  console.log(`> --- ${chapter}: ${description}_`)

  switch (chapter) {
    case 'Prologue':
      return <Prologue />
    default:
      return <h1>臆病な魔女</h1>
  }
}
