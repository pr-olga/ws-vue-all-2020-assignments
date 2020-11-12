<template>
  <section class="block block-alert">
    <div class="alert_body">
      <div>
        {{alert}}
        <div>
          <slot/>
        </div>
      </div>
      <div>
        <button @click="close">close</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    alert: String
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  unmounted() {
    this.$emit('reset-field')
  }
}
</script>

<style>
.alert_body{
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  color: #e21912;
  font-weight: 900;
}

</style>