<template>
  <div class="hello">
    <p>
      {{ testText }}
    </p>
    <ul v-for="(user,index) in GET_USERS" :key="user._id">
      <Item :user="user.fullName" :index="index"/>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
import Item from './Item'

export default {
  name: 'List',
  components: {
    Item
  },
  props: {
  },
  computed: {
    ...mapState([
      'testText',
      'users'
    ]),
    ...mapGetters([
      'GET_USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_DATA'
    ])
  },
  mounted(){
    this.GET_DATA()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
