const Events = require('../Models/Events')
module.exports = {
  add: async (req) => {
    try {
      const { name, startDate, dueDate, description } = req.body
      const user = req.user
      const insertEvent = await new Events({
        name,
        startDate,
        dueDate,
        description,
        userId: user._id
      }).save()
      return insertEvent
    } catch (e) {
      return {
        status: false,
        error: e.message
      }
    }
  },
  list: async (req) => {
    try {
      const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10
      }
      let recordEvents = []
      recordEvents = await Events.find().sort({ startDate: -1 })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
      if (!recordEvents) return null
      return recordEvents
    } catch (e) {
      return {
        status: false,
        error: e.message
      }
    }
  },
  show: async (req) => {
    try {
      const { id } = req.params
      const recordEvent = await Events.findById(id)
      if (!recordEvent) return null
      return recordEvent
    } catch (e) {
      return {
        status: false,
        error: e.message
      }
    }
  },
  update: async (req) => {
    try {
      const user = req.user
      const { id } = req.params
      const { name, startDate, dueDate, description } = req.body
      const recordEvent = await Events.findByIdAndUpdate(id, {
        name,
        startDate,
        dueDate,
        description,
        userId: user._id
      })
      if (!recordEvent) return null
      return recordEvent
    } catch (e) {
      return {
        status: false,
        error: e.message
      }
    }
  },
  delete: async (req) => {
    try {
      const { id } = req.params
      const deleteRecord = await Events.findByIdAndDelete(id)
      return deleteRecord
    } catch (e) {
      return {
        status: false,
        error: e.message
      }
    }
  }
}
