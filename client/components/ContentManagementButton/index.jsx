'use strict'

import React from 'react'
import EditButton from './EditButton'
import DoneButton from './DoneButton'
import AddButton from './AddButton'


const ContentManagementButton = props => (
  <div>
    {/* render appropriate button here */}
    <EditButton />
    <DoneButton />
    <AddButton />
  </div>
)


export default ContentManagementButton
