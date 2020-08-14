<template>
	<button
		class="button"
		@click="buttonClick"
	>
		<slot/>
	</button>
</template>

<script>
export default {
	props: {
		vibrate: Boolean
	},
	data() {
		return {
			cooldown: false,
			isPrimed: false
		}
	},
	methods: {
		buttonClick() {
			this.$emit('click')
		}
	}
}
</script>
