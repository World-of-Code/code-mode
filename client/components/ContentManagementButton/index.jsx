'use strict'

import React from 'react'

import AddButton from './AddButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

import SubmitButton from './SubmitButton'
import ClearButton from './ClearButton'
import CancelButton from './CancelButton'


// Renders different states based on button clicked
const ContentManagementButton = props => (
  <div>
    {/* default: add, creator( edit, delete (only if exists) ) */}

    <AddButton /> {/* submit ( send to creator / update page ), clear */}

    <EditButton /> {/* creator only: submit, delete */}

    <DeleteButton /> {/* creator only: render next */}


    <SubmitButton /> {/* present in add, edit */}

    <ClearButton /> {/* present in add */}

    <CancelButton /> {/* present in edit */}

  </div>
)


export default ContentManagementButton
