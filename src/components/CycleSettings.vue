<template>
	<div class="cycle_section">
		<h2 class="cycle_title">Cycle Settings</h2>
		<div class="cycle_content">
			<div class="in">
				<h5>IN</h5>
				<button class="add" @click="() => add(1)">+</button>
				<h2>{{ countIn }}</h2>
				<button class="sub" :disabled="countIn <= 0" @click="() => add(-1)">
					-
				</button>
			</div>
			<!-- <div class="hold">
				<h5>HOLD</h5>
				<button class="add" @click="countHold++">+</button>
				<h2>{{ countHold }}</h2>
				<button class="sub" :disabled="countHold <= 0" @click="countHold--">
					-
				</button>
			</div>
			<div class="out">
				<h5>OUT</h5>
				<button class="add" @click="countOut++">+</button>
				<h2>{{ countOut }}</h2>
				<button class="sub" :disabled="countHold <= 0" @click="countOut--">
					-
				</button>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'CycleSettings',
	data() {
		return { countIn: 0, countHold: 0, countOut: 0 };
	},
	methods: {
		add(val) {
			this.countIn += val;
		},
	},
};
</script>

<style scoped>
.cycle_section,
.time_section {
	margin: 20px;
}

.cycle_title,
.time_title {
	text-align: center;
	padding: 10px;
}

.cycle_content {
	display: flex;
	justify-content: space-around;
	border: gray 2px solid;
	border-radius: 15px;
	padding-bottom: 10px;
}

.in,
.hold,
.out {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
}
</style>
