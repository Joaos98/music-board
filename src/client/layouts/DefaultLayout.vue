<template>
	<div class="layout-default">
		<slot></slot>
		<div class="footer">
			<p>footer</p>
			<p>yes footer</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DefaultLayout',
		data: () => ({

		})
	}
</script>

<style lang="scss" scoped>
	.layout-default {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.footer {
			background-color: $neutral-darkest;
		}
	}
</style>
