import { onMounted, onUnmounted, ref } from "vue";

export function useStream(stream$, defaultValue = {}) {
  let subs = null;
  let state = ref(defaultValue);
  onMounted(() => {
    subs = stream$.subscribe(res => {
      state.value = res;
    });
  });
  onUnmounted(() => {
    subs && subs.unsubscribe();
  });
  return state;
}
