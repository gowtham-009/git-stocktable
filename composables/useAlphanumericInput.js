import { ref } from 'vue';

export function useAlphanumericInput() {
  const clientcode = ref('');

  const formatInput = (event) => {
    const newValue = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); 
    clientcode.value = newValue;
  };

  return { clientcode, formatInput };
}
