<script>
export default {
  name: 'Start',
  data: function () {
    return {
      count: 0,
      items: [
        {
          message: 'Item ID:'
        },
        {
          message: 'Item ID:'
        }
      ]
    }
  },
  props: {
    introMessage: String
  },
  computed: {
    getTime () {
      return new Date().toLocaleTimeString()
    },
    getDate () {
      const toTwoDigits = num => num < 10 ? '0' + num : num
      let today = new Date()
      let day = toTwoDigits(today.getDate())
      let month = toTwoDigits(today.getMonth() + 1)
      let year = today.getFullYear()
      return `${day}-${month}-${year}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-for {
  background-color: #ff0044;
  color: #ffffff;
  display: inline-block;
  padding: 1rem;
  &--1 {
    background-color: #000000;
  }
}
</style>

<template>
  <div class="container">
    <h1>{{ introMessage }}</h1>

    <span v-text="`Today's Date: ` + getDate"></span>

    <h3>v-for</h3>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        v-text="item.message + index"
        :class="'v-for v-for--' + index">
      </li>
    </ul>

    <h4>Field Validation</h4>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>

  </div>
</template>
