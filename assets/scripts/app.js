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

  $('#create-fact').on('submit', events.onCreateFact)
  $('#get-facts').on('click', events.onGetFacts)
  // $('#show-fact').on('submit', events.onShowFact)
  // $('#update-fact').on('submit', events.onUpdateFact)
  // $('#destroy-fact').on('submit', events.onDestroyFact)

  events.addHandlers()
})



//   $('#getFactsButton').on('click', onGetFacts)
//   $('#content').on('click', '.destroy_fact', onDestroyFact)
//   $('#content').on('click', '.update_fact', function (event) {
//     $(event.target).closest('section').find('.update-fact-form').show()
//   })
//   $('#content').on('submit', '.update-fact-form', onUpdateFact)
// }
