import React from 'react'
import Prologue from '../containers/Prologue'
import Version1 from '../containers/Version1'

export default ({ chapter, description }) => {
  if (chapter === 'Prologue') {
    console.log('> 臆病な魔女_')
  }
  console.log(`> --- ${chapter}: ${description}_`)

  switch (chapter) {
    case 'Prologue':
      return <Prologue />
    case 'Version_1':
      return <Version1 />
    default:
      return <h1>臆病な魔女</h1>
  }
}
