<script setup lang="ts">
import vueFeather from "vue-feather";
import {icons} from "feather-icons";
import {ref} from "vue";
const name = ref("");
const email = ref("");
const object = ref("");
const message = ref("");
</script>

<template>
  <div id="contact-form">
    <q-input input-class="form-input" filled label-slot v-model="name">
      <template v-slot:label>
        <p>Nom</p>
      </template>
      <template v-if="name" v-slot:append>
        <vue-feather :type="icons.x.name" @click.stop.prevent="name = ''" class="cursor-pointer reset-field"></vue-feather>
      </template>
    </q-input>
    <q-input input-class="form-input" filled label-slot v-model="email">
      <template v-slot:label>
        <p>Adresse e-mail de contact</p>
      </template>
      <template v-if="email" v-slot:append>
        <vue-feather :type="icons.x.name" @click.stop.prevent="email = ''" class="cursor-pointer reset-field"></vue-feather>
      </template>
    </q-input>
    <q-input input-class="form-input" filled label-slot v-model="object">
      <template v-slot:label>
        <p>Objet</p>
      </template>
      <template v-if="object" v-slot:append>
        <vue-feather :type="icons.x.name" @click.stop.prevent="object = ''" class="cursor-pointer reset-field"></vue-feather>
      </template>
    </q-input>
    <q-input input-class="form-input" filled label-slot type="textarea" v-model="message">
      <template v-slot:label>
        <p>Votre message</p>
      </template>
      <template v-if="message" v-slot:append>
        <vue-feather :type="icons.x.name" @click.stop.prevent="message = ''" class="cursor-pointer reset-field"></vue-feather>
      </template>
    </q-input>
    <q-btn class="float-right">
      Envoyer
      <q-icon right><vue-feather :type="icons.send.name" class="rotate-45"></vue-feather></q-icon>
    </q-btn>

  </div>
  <div class="separator-vr"></div>
</template>

<style scoped lang="scss">
@import "src/quasar-variables";
#contact-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.q-input {
  margin-bottom: 10px;
}
.q-btn {
  margin-top: 15px;
}
p {
  color: $primary;
}
.reset-field {
  color: $secondary;
}
</style>
<style lang="scss">
@import "src/quasar-variables";
.form-input {
  color: $primary;
}
</style>