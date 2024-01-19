<script>
	import Loader from './Loader.svelte';
	import { dev } from '$app/environment';

	/**
	 * @type {RequestInfo | URL}
	 */
	let apiUrl;
	if (dev) {
		apiUrl = '//local-w10.sakynasty.com/api/api/uptimerobot/monitors';
		console.info(`[LOC](SakyStatus) ActiveIncidents: Connected to All Monitor with API(${apiUrl})`);
	} else {
		apiUrl = '//api.sakynasty.com/api/uptimerobot/monitors';
		console.info(`[LOC](SakyStatus) ActiveIncidents: Connected to All Monitor with API(${apiUrl})`);
	}

	const getUptime = async () => {
		const res = await fetch(apiUrl);
		const api = await res.json();
		return api;
	};

	/**
	 * @param {{ length: any; filter: (arg0: (monitor: any) => boolean) => { (): any; new (): any; length: any; }; }} monitors
	 */
	function calculateGlobalUptime(monitors) {
		const totalMonitors = monitors.length;
		if (totalMonitors === 0) {
			return 0;
		}

		const totalUptimeMonitors = monitors.filter((monitor) => monitor.status === 'up').length;
		const globalUptimePercentage = (totalUptimeMonitors / totalMonitors) * 100;
		const roundedGlobalUptime = globalUptimePercentage.toFixed(0);
		return roundedGlobalUptime;
	}

	let svgClass = 'flex-shrink-0 inline w-4 h-4 me-3';
	let alertClass =
		'flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-neutral-800 bg-neutral-200';
</script>

{#await getUptime()}
	<Loader />
{:then api}
	<section>
		{#if calculateGlobalUptime(api.data.monitors) >= 100}
			<div class={`text-up dark:text-up ${alertClass}`}>
				<i class={`fa-solid fa-circle-check ${svgClass}`}></i>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Success!</span> All systems are operational
				</div>
			</div>
		{:else if calculateGlobalUptime(api.data.monitors) >= 0}
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
{:catch error}
	<div class={`text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 ${alertClass}`}>
		<i class={`fa-solid fa-circle-question ${svgClass}`}></i>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Oops!</span> There might be a problem...
		</div>
	</div>
{/await}

<style>
	section {
		margin-bottom: 2rem;
	}
</style>
