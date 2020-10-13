const socialMixin = {
  props: {
    url: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    isBlank() {
      return this.blank ? '_blank' : '_self'
    }
  }
}

export default socialMixin
