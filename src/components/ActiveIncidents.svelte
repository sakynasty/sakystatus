<script>
	/**
	 * @type {any}
	 */
	export let percent;
	/**
	 * @type {string}
	 */
	export let error;

	let svgClass = 'flex-shrink-0 inline w-4 h-4 me-3';
	let alertClass =
		'flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-neutral-800 bg-neutral-200';
</script>

{#if (error = 'false')}
	<section>
		{#if percent >= 100}
			<div class={`text-up dark:text-up ${alertClass}`}>
				<i class={`fa-solid fa-circle-check ${svgClass}`}></i>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Success!</span> All systems are operational
				</div>
			</div>
		{:else if percent >= 0}
			<div class={`text-degraded dark:text-degraded ${alertClass}`}>
				<i class={`fa-solid fa-circle-exclamation ${svgClass}`}></i>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Alert!</span> Active Incidents
				</div>
			</div>
		{:else}
			<div class={`text-down dark:text-down ${alertClass}`}>
				<i class={`fa-solid fa-circle-exclamation ${svgClass}`}></i>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Alert!</span> All systems are down...
				</div>
			</div>
		{/if}
	</section>
{:else}
	<div class={`text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 ${alertClass}`}>
		<i class={`fa-solid fa-circle-question ${svgClass}`}></i>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Oops!</span> There might be a problem...
		</div>
	</div>
{/if}

<style>
	section {
		margin-bottom: 2rem;
	}
</style>
