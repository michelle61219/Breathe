import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      timerStartMinute: 1,
      status: "pause",
      timerCount: 60,
      timer: null,
    };
  },
  mutations: {
    changeTimerStartMinute(state, val) {
      if (state.state === "running") return;
      state.timerStartMinute = val;
      state.timerCount = state.timerStartMinute * 60;
    },
    clickStatusButton(state) {
      if (state.status === "pause") {
        state.status = "running";
        if (state.timerCount == 0) {
          state.timerCount = state.timerStartMinute * 60;
        }
        state.timer = setInterval(() => {
          state.timerCount--;
          if (state.timerCount <= 0) {
            clearInterval(state.timer);
            state.status = "pause";
          }
          // for test
        }, 100);
      } else if (state.status === "running") {
        clearInterval(state.timerCount);
        state.timerCount = state.timerStartMinute * 60;
        state.status = "pause";
      }
    },
  },
});
