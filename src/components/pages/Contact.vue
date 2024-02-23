<script setup lang="ts">
import vueFeather from "vue-feather";
import { icons } from "feather-icons";
import { ref } from "vue";
import logo from "../../assets/img/logo.png";
import {QSpinnerInfinity, useQuasar} from "quasar";
const name = ref("");
const email = ref("");
const object = ref("");
const message = ref("");

const sent = ref(false);
const sendAnimationEnded = ref(false);
const $q = useQuasar();
const send = async () => {
  if (sent.value) return;
  $q.loading.show({
    message: `<div><img src="${logo}" /></div> <div class="loading-text">Envoi en cours...</div>`,
    spinnerColor: "primary",
    messageColor: "secondary",
    backgroundColor: "dark",
    customClass: "loading-spinner",

    spinnerSize: 100,
    spinner: QSpinnerInfinity,
    html: true,
  });

  const formData = new URLSearchParams({
    name: name.value,
    email: email.value,
    object: object.value,
    message: message.value
  }).toString();

  try {
    await fetch("https://backend.ike.icu/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
      mode: "cors"
    });
    sent.value = true;
    setTimeout(() => {
      sendAnimationEnded.value = true;
    }, 1000);
  } catch (e) {
    console.error(e);
    errMessage.value = "Impossible d'envoyer un message via ce formulaire pour le moment. Contactez moi par linkedin en attendant !"
  } finally {
    $q.loading.hide();
  }
};

const isValidEmail = (email: string) => {
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
  return regex.test(email);
};

const errMessage = ref<null | string>(null);

const reset = () => {
  name.value = "";
  email.value = "";
  object.value = "";
  message.value = "";
};
</script>

<template>
  <div id="parent">
    <Transition appear leave-active-class="animate-1s animated zoomOutRight">
      <q-form id="contact-form" v-if="!sent" @submit="send" @reset="reset">
        <Transition appear enter-active-class="animate-1s animated rubberBand">
          <p class="err-msg" v-show="errMessage !== null">{{errMessage}} </p>
        </Transition>
        <q-input
          input-class="form-input"
          filled
          label-slot
          v-model="name"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length >= 3) ||
              'Merci de renseigner un nom de contact (prénom + nom ou pseudonyme)',
          ]"
        >
          <template v-slot:label>
            <p>Nom</p>
          </template>
          <template v-if="name" v-slot:append>
            <vue-feather
              :type="icons.x.name"
              @click.stop.prevent="name = ''"
              class="cursor-pointer reset-field"
            ></vue-feather>
          </template>
        </q-input>
        <q-input
          input-class="form-input"
          filled
          label-slot
          v-model="email"
          lazy-rules
          :rules="[
            (val) =>
              (val && isValidEmail(val)) ||
              'Merci de renseigner un e-mail valide',
          ]"
        >
          <template v-slot:label>
            <p>Adresse e-mail de contact</p>
          </template>
          <template v-if="email" v-slot:append>
            <vue-feather
              :type="icons.x.name"
              @click.stop.prevent="email = ''"
              class="cursor-pointer reset-field"
            ></vue-feather>
          </template>
        </q-input>
        <q-input
          input-class="form-input"
          filled
          label-slot
          v-model="object"
          lazy-rules
          :rules="[
            (val) => (val && val.length >= 0) || 'Merci de renseigner un objet',
          ]"
        >
          <template v-slot:label>
            <p>Objet</p>
          </template>
          <template v-if="object" v-slot:append>
            <vue-feather
              :type="icons.x.name"
              @click.stop.prevent="object = ''"
              class="cursor-pointer reset-field"
            ></vue-feather>
          </template>
        </q-input>
        <q-input
          input-class="form-input"
          filled
          label-slot
          type="textarea"
          v-model="message"
          lazy-rules
          :rules="[
            (val) => (val && val.length >= 3) || 'Merci de renseigner message',
          ]"
        >
          <template v-slot:label>
            <p>Votre message</p>
          </template>
          <template v-if="message" v-slot:append>
            <vue-feather
              :type="icons.x.name"
              @click.stop.prevent="message = ''"
              class="cursor-pointer reset-field"
            ></vue-feather>
          </template>
        </q-input>
        <q-btn class="float-right" type="submit">
          Envoyer
          <q-icon right
            ><vue-feather
              :type="icons.send.name"
              class="rotate-45"
            ></vue-feather
          ></q-icon>
        </q-btn>
      </q-form>
    </Transition>
    <Transition appear enter-active-class="animate-750ms animated rubberBand">
      <div id="sent" v-show="sendAnimationEnded">
        <p>Merci {{ name }}, je vous recontacterai dès que possible !</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import "src/quasar-variables";
.animate-1s {
  animation-duration: 1s;
}
.animate-750ms {
  animation-duration: 750ms;
}
#parent {
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 50px;
}
#sent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100%;
}
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
  color: #9247de;
}
.reset-field {
  color: $secondary;
}
.err-msg {
  color: $negative;
  text-align: center;
}
</style>
<style lang="scss">
@import "src/quasar-variables";
.form-input {
  color: #e0b1cb;
}
</style>
