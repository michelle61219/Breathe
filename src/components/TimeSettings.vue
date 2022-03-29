<template>
	<div class="time_section">
		<h2 class="time_title">Time Length Settings</h2>
		<div class="time_content">
			<span
				><input type="number" min="0" @keydown="getKey($event)" v-model="min" />
				mins</span
			>
			<a-button
				type="primary"
				shape="circle"
				:size="size"
				@click="handleButtonClick;"
				>{{ buttonText }}
			</a-button>
		</div>
		<div>{{ timeDisplay }}</div>
	</div>
</template>

<script>
export default {
	name: 'TimeSettings',
	data: () => {
		const duration = 0.1;
		return {
			currentTimeInSeconds: duration * 60,
			buttonText: 'Start',
			interval: null,
		};
	},
	methods: {
		handleButtonClick() {
			if (this.buttonText === 'Start') {
				this.buttonText = 'Stop';
				this.countDown();
			} else if (this.buttonText === 'Stop') {
				this.buttonText = 'Start';
			}
		},
		countDown() {
			this.interval = setInterval(() => {
				this.currentTimeInSeconds -= 1;
			}, 1000);
		},
	},
	computed: {
		timeDisplay() {
			const minutes = parseInt(this.currentTimeInSeconds / 60);
			const seconds = this.currentTimeInSeconds % 60;
			// Displays two digits for minutes and seconds
			const paddedMinutes = ('0' + minutes).slice(-2);
			const paddedSeconds = ('0' + seconds).slice(-2);
			return `${paddedMinutes}:${paddedSeconds}`;
		},
	},
};
</script>

<style scoped>
.time_section {
	margin: 20px;
}

.time_title {
	text-align: center;
	padding: 10px;
}

.time_info {
	display: flex;
	justify-content: space-around;
	border: gray 2px solid;
	border-radius: 15px;
	padding: 20px;
}
</style>
