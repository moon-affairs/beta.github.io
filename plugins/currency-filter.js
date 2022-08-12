import Vue from "vue"

Vue.filter("rupee", function(value) {
  // Using a template literal here, that's why there are two rupee signs.
  // The first is an actual rupee.
  return `$${parseFloat(value).toFixed(2)}`
})
