<script>
	import ActiveIncidents from '../../components/ActiveIncidents.svelte';
	import LiveStatus from '../../components/LiveStatus.svelte';
	import Loader from '../../components/Loading/Loader.svelte';
	import Error from '../../components/Error.svelte';
	import { env } from '$env/dynamic/public';
	import { dev } from '$app/environment';

	/**
	 * @type {RequestInfo | URL}
	 */
	let apiUrl;
	if (dev) {
		apiUrl = 'https://' + env.PUBLIC_API_LINK_DEV;
	} else {
		apiUrl = 'https://' + env.PUBLIC_API_LINK;
	}
	console.info(
		`[LOC](SakyStatus) +page: Connected to All Monitors with API(${apiUrl.replace('//', '').replace('https:', '')})`
	);

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

	var title = "SakyStatus";
	var description = "SakyStatus is a simple status page for services and website used/created by Sakynasty.";
	var currentPage = "https://status.sakynasty.com/monitors";
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="twitter:title" content={title} />
	<meta
		name="description"
		content={description}
	/>
	<meta
		property="og:description"
		content={description}
	/>
	<meta
		property="twitter:description"
		content={description}
	/>
	<meta property="og:url" content={currentPage} />
	<meta property="twitter:url" content={currentPage} />
	<link href={currentPage} rel="canonical" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
</svelte:head>

<header class="mb-1 mt-5">
	<h1
		class="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
	>
		Informations
	</h1>
	<p class="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
		<b>SakyStatus</b> was set up to provide a history of the status of sites managed by
		<mark
			class="px-1 font-bold bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 rounded-md"
			>Sakynasty</mark
		>.
	</p>
</header>

<main>
	{#await getUptime()}
		<Loader />
	{:then api}
		<ActiveIncidents percent={calculateGlobalUptime(api.data.monitors)} error="false" />
		<LiveStatus pagination={api.data.pagination.total} monitors={api.data.monitors} error="false" />
	{:catch error}
		<div class="mt-3">
			<Error name="status" page="/monitors" {error} />
		</div>
	{/await}
</main>
