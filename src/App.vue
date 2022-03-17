<template>
  <div class="container">
    <CycleSettings></CycleSettings>
    <TimeSettings></TimeSettings>
    <Timer></Timer>
  </div>
</template>

<script>
import CycleSettings from "./components/CycleSettings";
import TimeSettings from "./components/TimeSettings";
import Timer from "./components/Timer";
export default {
  name: "App",
  components: {
    CycleSettings,
    TimeSettings,
    Timer,
  },
};
</script>

<style></style>
