<template>
  <div class="popup" v-if="show" @click="hidePopup">
    <div @click.stop class="popup__content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

  export default {
    name: 'v-popup',
    mixins: [toggleMixin],
  }
</script>

<style scoped>
.popup {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.popup__content {
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  min-width: 200px;
  padding: 20px;
}
</style>