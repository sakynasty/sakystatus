<script>
	import ActiveIncidents from '../../components/ActiveIncidents.svelte';
	import LiveStatus from '../../components/LiveStatus.svelte';
</script>

<svelte:head>
	<meta name="author" content="Sakynasty" />
	<meta property="og:site_name" content="SakyStatus" />
	<title>SakyStatus</title>
	<meta property="og:title" content="SakyStatus" />
	<meta property="twitter:title" content="SakyStatus" />
	<meta
		name="description"
		content="SakyStatus is a simple status page for services and website used/created by Sakynasty."
	/>
	<meta
		property="og:description"
		content="SakyStatus is a simple status page for services and website used/created by Sakynasty."
	/>
	<meta
		property="twitter:description"
		content="SakyStatus is a simple status page for services and website used/created by Sakynasty."
	/>
	<meta property="og:url" content="https://status.sakynasty.com/monitors" />
	<meta property="twitter:url" content="https://status.sakynasty.com/monitors" />
	<link href="https://status.sakynasty.com/monitors" rel="canonical" />
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
	<ActiveIncidents />
	<LiveStatus />
</main>
