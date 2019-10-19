const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function(event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateFact = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createFact(formData)
    .then(ui.onCreateFactSuccess)
    .catch(ui.onCreateFactFailure)
}

const onGetFacts = function(event) {
  event.preventDefault()
  api.getActivities()
    .then(ui.onGetFactssSuccess)
    .catch(ui.onError)
}

const onUpdateFact = function(event) {
  const id = $(event.target).closest('section').data('id')
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateFact(id, formData)
    .then(function(responseData) {
      onGetFacts(event)
    })
    .catch(ui.onError)
}

const onDeleteFact = (event) => {
  const id = $(event.target).data('id')
  event.preventDefault()
  api.deleteFact(id)
    .then(() => {
      api.getActivities()
        .then(ui.onDeleteFactSuccess)
    })
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateFact,
  onGetFacts,
  onUpdateFact,
  onDeleteFact
}
