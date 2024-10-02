<template>
  <div class="hello">
    <h1>ClubEvent</h1>
    <v-calendar 
      ref="calendar"
      :events="events"
      color="primary"
      type="month"
      />
      <v-form @submit.prevent="addEvent">
      <v-text-field v-model="newEvent.title" label="Event Title" required />
      <v-text-field v-model="newEvent.date" label="Event Date" type="date" required />
      <v-btn type="submit" color="primary">Add Event</v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const events = ref([]);
const newEvent = ref({ title: '', date: '' });


function addEvent() {
  if (newEvent.value.title && newEvent.value.date) {
    const start = new Date(newEvent.value.date);
    const end = new Date(start);
    end.setHours(start.getHours() + 1); // 1시간 이벤트로 설정

    events.value.push({
      title: newEvent.value.title,
      start: start,
      end: end,
      color: 'blue', // 원하는 색상으로 수정 가능
      allDay: false,
    });

    // 입력 필드 초기화
    newEvent.value.title = '';
    newEvent.value.date = '';
  }
}

</script>

<style scoped>
</style>