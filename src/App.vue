<template>
	<div class="container">
		<CycleSettings></CycleSettings>
		<TimeSettings></TimeSettings>
	</div>
</template>

<script>
import CycleSettings from './components/CycleSettings';
import TimeSettings from './components/TimeSettings';
export default {
	name: 'App',
	components: {
		CycleSettings,
		TimeSettings,
	},
};
</script>

<style></style>
