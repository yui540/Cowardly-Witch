import React from 'react'
import Prologue from '../containers/Prologue'
import Version1 from '../containers/Version1'
import Version2 from '../containers/Version2'
import Version3 from '../containers/Version3'
import Version4 from '../containers/Version4'

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
    case 'Version_2':
      return <Version2 />
    case 'Version_3':
      return <Version3 />
    case 'Version_4':
      return <Version4 />
    default:
      return <h1>臆病な魔女</h1>
  }
}
