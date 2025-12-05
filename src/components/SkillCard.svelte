<script>
	export let name = '';
	export let icon = '';
	export let category = '';
</script>

<div class="bg-bg-secondary p-6 rounded-lg shadow-card flex flex-col items-center justify-center text-center min-h-[160px]">
	<div class="w-16 h-16 mb-3 text-accent flex items-center justify-center">
		{@html icon}
	</div>
	<span class="text-text-main font-medium">{name}</span>
</div>

<style>
	div {
		transition: all 0.3s ease;
	}
</style>