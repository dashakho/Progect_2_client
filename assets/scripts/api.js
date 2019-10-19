'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function(formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function() {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFact = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/facts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getFacts = function() {
  return $.ajax({
    url: config.apiUrl + '/facts',
    method: 'GET',

    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getFact = (id) => {
  return $.ajax({
    url: config.apiUrl + '/facts/' + id,
    method: 'GET'
  })
}

const updateFact = (id, formData) => {
  // console.log(id)
  return $.ajax({
    url: config.apiUrl + `/facts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteFact = (id) => {
  return $.ajax({
    url: config.apiUrl + '/facts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createFact,
  getFacts,
  getFact,
  updateFact,
  deleteFact
}
