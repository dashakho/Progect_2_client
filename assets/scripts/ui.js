'use strict'

const store = require('./store')
// const showFactTemplate = require('./templates/fact-listing.handlebars')
// const selectFactTemplate = require('./templates/fact-showing.handlebars')

const successMessage = function(newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('failure')
  $('#user_message').addClass('success')
}

const failureMessage = function(newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('success')
  $('#user_message').addClass('failure')
}

const onSignUpSuccess = function() {
  successMessage('Signed up successfully')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function() {
  failureMessage('Sign up failed')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function(responseData) {
  successMessage('Signed in successfully!')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#sign-in').trigger('reset')
  store.user = responseData.user
}

const onSignInFailure = function() {
  failureMessage('Sign in failed')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function() {
  successMessage('Changed password successfully!')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function() {
  failureMessage('Change password failed')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function() {
  successMessage('Sign out successfully!')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
}

const onSignOutFailure = function() {
  failureMessage('Sign out failed')
  setTimeout(function() {
    $('#user_message').text('')
  }, 3000)
}

const onCreateFactSuccess = function (responseData) {
  successMessage('Your fact has been created!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#create_fact').trigger('reset')
}

const onCreateFactFailure = function (responseData) {
  failureMessage('Oops, something went wrong')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // $('#create_fact).trigger('reset')
}

const onShowFactSuccess = function (responseData) {
  successMessage('Here is your fact')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#show_fact').trigger('reset')
}

const onShowFactFailure = function (responseData) {
  failureMessage('Oops, something went wrong')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#show_fact').trigger('reset')
}

const onUpdateFactSuccess = function (responseData) {
  successMessage('Updated your fact successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#update_fact').trigger('reset')
}

const onUpdateFactFailure = function (responseData) {
  failureMessage('Failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#update_team').trigger('reset')
}

const onDestroyFactSuccess = function (responseData) {
  successMessage('The fact deleted successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy_fact').trigger('reset')
}

const onDestroyFactFailure = function (responseData) {
  failureMessage('Failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy_fact').trigger('reset')
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
  onDestroyFactSuccess,
  onDestroyFactFailure
}
