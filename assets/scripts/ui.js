'use strict'

const store = require('./store')
const showFactsTemplate = require('./templates/facts.handlebars')
// const showHandlebars = require('./templates/facts.handlebars')
// const selectFactTemplate = require('./templates/fact-showing.handlebars')

const successMessage = function (newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('failure')
  $('#user_message').addClass('success')
}

const failureMessage = function (newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('success')
  $('#user_message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#sign-in').trigger('reset')
  store.user = responseData.user
  $('.auth-hide, .auth-show').toggleClass('auth-hide auth-show')
}

const onSignInFailure = function () {
  failureMessage('Sorry, sign in failed')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('You changed password successfully!')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Sign out successfully!')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
  $('.auth-hide, .auth-show').toggleClass('auth-hide auth-show')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  setTimeout(function () {
    $('#user_message').text('')
  }, 3000)
}

// const onCreateFactSuccess = function (responseData) {
//   store.responseData = responseData
//   // console.log(store.game)
//   // add success message to content
//   $('#create-fact-message').html('Your fact has been created!')
//   $('#create-fact-message').addClass('success')
//   $('#getFactsButton').show()
//
//   setTimeout(() => {
//     $('#create-fact-message').html('')
//     $('#create-fact-message').removeClass('success')
//   }, 5000)
//
//   $('form').trigger('reset')
//   $('#get-facts').show()
// }

const onCreateFactSuccess = function (responseData) {
  store.responseData = responseData
  successMessage('Your fact has been created!')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  $('#create-fact').trigger('reset')
}

const onCreateFactFailure = function (responseData) {
  failureMessage('Oops, something went wrong')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  // $('#create_fact).trigger('reset')
}

const onGetFactsSuccess = responseData => {
  $('#create-fact-message').html('Success!')
  console.log("in on get facts success", responseData.facts)
  const showFactsHtml = showFactsTemplate({
    facts: responseData.facts
  })

  $('.content').html(showFactsHtml)
  $('#update-fact-form').removeClass('hide')
  setTimeout(() => {
    $('#create-fact-message').html('')
    $('#create-fact-message').removeClass('success')
  }, 5000)
}

const onShowFactSuccess = function (responseData) {
  successMessage('Here is your fact')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#show-fact').trigger('reset')
  // $('#content').append(showHandlebars({
  //   // facts: responseData.fact
  // }))
}

const onShowFactFailure = function (responseData) {
  failureMessage('Oops, something went wrong')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#show-fact').trigger('reset')
}

const onUpdateFactSuccess = function (responseData) {
  successMessage('Updated your fact successfully!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#update-fact').trigger('reset')
}

const onUpdateFactFailure = function (responseData) {
  failureMessage('Failed')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#update-fact').trigger('reset')
}

const onDeleteFactSuccess = function (responseData) {
  successMessage('The fact deleted successfully!')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy-fact').trigger('reset')
}

const onDeleteFactFailure = function (responseData) {
  failureMessage('Failed')
  setTimeout(function () {
    $('#user_message').text('')
  }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy-fact').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateFactSuccess,
  onCreateFactFailure,
  onShowFactSuccess,
  onShowFactFailure,
  onUpdateFactSuccess,
  onUpdateFactFailure,
  onDeleteFactSuccess,
  onDeleteFactFailure,
  onGetFactsSuccess
}
