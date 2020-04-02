const _ok = require('../../Responses/ok')
const _error = require('../../Responses/error')
const EventRepositories = require('../../Repositories/EventRepositories')
const asyncWrap = require('../../Policies/Middleware/async-wrap')
const { errorsIndex, successIndex } = require('../../Utils/errorsFunc')

module.exports = {
  addEvent: asyncWrap(async (req, res) => {
    const data = await EventRepositories.add(req)
    if (data && data.status === false) {
      return _error(res, { message: errorsIndex(req, data.error) }, {}, 400)
    }
    return _ok(res, { data }, 201)
  }),

  listEvents: asyncWrap(async (req, res) => {
    const data = await EventRepositories.list(req)
    if (data && data.status === false) {
      return _error(res, { message: errorsIndex(req, data.error) }, {}, 400)
    }
    return _ok(res, { data }, 200)
  }),
  showEvent: asyncWrap(async (req, res) => {
    const data = await EventRepositories.show(req)
    if (!data || data.status === false) {
      return _error(res, { message: errorsIndex(req, 'eventDoesNotExits') }, {}, 400)
    }
    return _ok(res, { data }, 200)
  }),
  updateEvent: asyncWrap(async (req, res) => {
    const data = await EventRepositories.update(req)
    if (!data || data.status === false) {
      return _error(res, { message: errorsIndex(req, 'eventDoesNotExits') }, {}, 400)
    }
    return _ok(res, { message: successIndex(req, 'updateEventSuccess') }, 200)
  }),
  deleteEvent: asyncWrap(async (req, res) => {
    const data = await EventRepositories.delete(req)
    if (!data || data.status === false) {
      return _error(res, { message: errorsIndex(req, 'eventDoesNotExits') }, {}, 400)
    }
    return _ok(res, { message: successIndex(req, 'deleteEventSuccess') }, 200)
  })
}
