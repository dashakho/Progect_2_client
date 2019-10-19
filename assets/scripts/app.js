'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#create_fact').on('submit', events.onCreateFact)
  $('#show_fact').on('submit', events.onShowFact)
  $('#update_fact').on('submit', events.onUpdateFact)
  $('#destroy_fact').on('submit', events.onDestroyFact)
})
