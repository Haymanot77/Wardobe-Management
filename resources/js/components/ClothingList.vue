<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." @input="searchItems">
    <div v-for="item in filteredItems" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { items: [], searchQuery: '' };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.includes(this.searchQuery));
    }
  },
  methods: {
    searchItems() {
      axios.get(`/api/clothing?search=${this.searchQuery}`).then(res => this.items = res.data);
    }
  },
  mounted() {
    axios.get('/api/clothing').then(res => this.items = res.data);
  }
};
</script>
