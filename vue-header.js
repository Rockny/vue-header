module.exports = function (Vue) {
  var setTitle = function (title, img) {
    if (title === undefined || window.document.title === title) {
      return
    }
    document.title = title
  }
  Vue.directive('header-title', function (el, binding) {
    setTitle(binding.value)
  })
  var setkeyWord = function (title) {
    if (title === undefined || window.document.title === title) {
      return
    }
    var metas = document.getElementsByTagName('meta')
    for (var key in metas) {
      if (key.toLowerCase() === 'keywords'.toLowerCase()) {
        metas[key].content = title
      }
    }
  }
  Vue.directive('header-keywords', function (el, binding) {
    setkeyWord(binding.value)
  })
  var setdescription = function (title) {
    if (title === undefined || window.document.title === title) {
      return
    }
    var metas = document.getElementsByTagName('meta')
    for (var key in metas) {
      if (key.toLowerCase() === 'description'.toLowerCase()) {
        metas[key].content = title
      }
    }
  }
  Vue.directive('header-description', function (el, binding) {
    setdescription(binding.value)
  })
}

