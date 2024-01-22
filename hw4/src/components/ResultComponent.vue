<template>
    <div>
        <div v-for="answer in result" :key="answer" >
            <p>{{ answer }}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultComponent',
    props: {
        result: {
            type: Array,
        }
    },
    data() {
        return {
            start:'',
        }
    },
  }
  </script>
  
  <style scoped>
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
  </style>
  