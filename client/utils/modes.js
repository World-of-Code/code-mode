'use strict'


export const readMode = {
  type: 'Read',
  buttons: [
    { name: 'add', addQuestion: question => dispatch(addQuestion(question)) }, // addQuestion(question)
    { name: 'edit', edit: {} },
    { name: 'delete', delete: {} },
    { name: 'save', delete: {} }
  ]
}

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(addQuestion(question))
})



export const addMode = {
  type: 'Add',
  buttons: [
    { name: 'clear', clear: {} },
    { name: 'cancel', cancel: {} },
    { name: 'submit', submit: {} }
  ]
}

export const editMode = {
  type: 'Edit',
  buttons: [
    { name: 'cancel', cancel: {} },
    { name: 'delete', delete: {} },
    { name: 'submit', submit: {} }
  ]
}
