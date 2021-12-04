module.exports = {
  ifCond: (v1, operator, v2, options) => {
    switch (operator) {
      case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this)
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this)
      case '!=':
        return (v1 != v2) ? options.fn(this) : options.inverse(this)
      case '!==':
        return (v1 !== v2) ? options.fn(this) : options.inverse(this)
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this)
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this)
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this)
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this)
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this)
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this)
      default:
        return options.inverse(this)
    }
  },
  section: function (name, options) {
    if (!this._sections) this._sections = {}
    this._sections[name] = options.fn(this)
    return null
  },
  json: function (context) {
    return JSON.stringify(context)
  },
  convertDateDay: function (value) {
    let date = new Date(value)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = (month < 10 ? "0" : "") + month
    let day = date.getDate()
    day = (day < 10 ? "0" : "") + day

    return day + "/" + month + "/" + year
  },
  convertDateHour: function (value) {
    let date = new Date(value)
    let hour = date.getHours()
    hour = (hour < 10 ? "0" : "") + hour
    let min = date.getMinutes()
    min = (min < 10 ? "0" : "") + min
    console.log(hour + ":" + min)
    return hour + ":" + min
  }
}