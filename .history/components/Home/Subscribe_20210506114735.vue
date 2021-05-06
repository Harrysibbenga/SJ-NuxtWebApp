<template>
  <div class="secondary pb-5">
    <v-container>
      <h2 class="text-center my-5 primary--text">
        Want to stay up do date? <br />
        Sign up to my mailing list.
      </h2>
      <form submit.prevent>
        <v-row class="pb-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstName"
              :error-messages="firstNameErrors"
              :counter="10"
              label="First name"
              required
              @input="$v.firstName.$touch()"
              @blur="$v.firstName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastName"
              :error-messages="lastNameErrors"
              :counter="15"
              label="Last name"
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="my-auto text-center">
            <v-btn
              x-large
              class="primary secondary--text text-h3"
              @click.native="submit"
            >
              Sign me up!
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    firstName: { required, maxLength: maxLength(10) },
    lastName: { required, maxLength: maxLength(15) },
    email: { required, email },
  },

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
  }),

  computed: {
    firstNameErrors() {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.firstName.required && errors.push('Name is required.')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.maxLength &&
        errors.push('Name must be at most 15 characters long')
      !this.$v.lastName.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.firstName = ''
      this.lastName = ''
      this.email = ''
    },
  },
}
</script>
