export default {
  template: '#search-form',
  props: ['value'],
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    onSubmit() {
      this.$emit('@submit', this.inputValue);
    },
    onkeyup() {
      if (!this.inputValue.length) this.onReset();
    },
    onReset() {
      this.inputValue = '';
      this.$emit('@reset');
    }
  }
};
