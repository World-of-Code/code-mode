'use strict'


export const read = {
  type: 'Read',
  buttons: [
    { name: 'add' },
    { name: 'edit' },
    { name: 'delete' }
  ]
}

export const add = {
  type: 'Add',
  buttons: [
    { name: 'clear' },
    { name: 'cancel' },
    { name: 'submit' },
    { name: 'send' }
  ]
}

export const edit = {
  type: 'Edit',
  buttons: [
    { name: 'cancel' },
    { name: 'delete' },
    { name: 'save' }
  ]
}
