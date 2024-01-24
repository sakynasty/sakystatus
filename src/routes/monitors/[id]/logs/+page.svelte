<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { dev } from '$app/environment';
	import Time from 'svelte-time';
	import Error from '../../../../components/Error.svelte';
	import Loader from '../../../../components/Loading/Loader.svelte';

	/**
	 * @type {RequestInfo | URL}
	 */
	let apiUrl;
	if (dev) {
		apiUrl = `//local-w10.sakynasty.com/api/api/uptimerobot/monitor?id=${data.id}`;
		console.info(`[LOC](SakyStatus) +page: Connected to Monitor ID°${data.id} with API(${apiUrl})`);
	} else {
		apiUrl = `//api.sakynasty.com/api/uptimerobot/monitor?id=${data.id}`;
		console.info(`[LOC](SakyStatus) +page: Connected to Monitor ID°${data.id} with API(${apiUrl})`);
	}

	const getUptime = async () => {
		const res = await fetch(apiUrl);
		const api = await res.json();
		return api;
	};

	/**
	 * @param {number} duration
	 */
	function formatDuration(duration) {
		const seconds = duration % 60;
		const minutes = Math.floor((duration / 60) % 60);
		const hours = Math.floor((duration / 3600) % 24);
		const days = Math.floor((duration / (3600 * 24)) % 30);
		const months = Math.floor((duration / (3600 * 24 * 30)) % 12);
		const years = Math.floor(duration / (3600 * 24 * 30 * 12));

		let result = '';

		if (years > 0) {
			result += `${years} year(s), `;
		}

		if (months > 0) {
			result += `${months} month(s), `;
		}

		if (days > 0) {
			result += `${days} day(s), `;
		}

		if (hours > 0) {
			result += `${hours} hour(s), `;
		}

		if (minutes > 0) {
			result += `${minutes} minute(s) and `;
		}

		result += `${seconds} second(s)`;

		return result;
	}
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="googlebot" content="noindex, nofollow" />
	<title>Monitor ID°{data.id} - SakyStatus</title>
</svelte:head>

{#await getUptime()}
	<div class="mt-10">
		<Loader />
	</div>
{:then api}
	<header class="mb-1 mt-5">
		<h1
			class="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
		>
			ID°{api.data.monitors[0].id}
		</h1>
		<p class="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
			<a
				href={api.data.monitors[0].url}
				title={`Go to ${api.data.monitors[0].friendly_name}`}
				rel="noopener"
				target="_blank"
				><mark
					class="px-1 font-bold bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 rounded-md"
					><b>{api.data.monitors[0].friendly_name}</b></mark
				></a
			>
			was currently in the
			<mark
				class="px-1 font-bold bg-neutral-900 text-{api.data.monitors[0]
					.status} dark:bg-neutral-100 dark:text-{api.data.monitors[0].status} rounded-md"
				>{api.data.monitors[0].status.toUpperCase()}</mark
			> state during the last 5 minutes.
		</p>
	</header>
	<main>
		<h2><b>Overall uptime</b></h2>
		<p>{api.data.monitors[0].all_time_uptime_ratio}%UP</p>
		<h2><b>Average response</b></h2>
		<p>{api.data.monitors[0].average_response_time}ms</p>

		<h1
			class="mt-5 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
		>
			Past Logs
		</h1>
		<ol class="mt-3 relative border-s border-neutral-200 dark:border-neutral-700">
			{#each api.data.monitors[0].logs as logs}
				<li class="mb-5 ms-6">
					<span
						class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-neutral-400 ring-neutral-700 bg-neutral-900 dark:bg-neutral-100"
					>
						<svg
							class="w-2.5 h-2.5 text-neutral-200 dark:text-neutral-900"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
							/>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						#{logs.id}
						<span
							class="bg-neutral-900 dark:text-neutral-900 text-neutral-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-neutral-100 ms-3"
						>
							Code°{logs.reason.code}
						</span>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Created on <Time relative timestamp={new Date(logs.datetime * 1000)} /></time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Details: {logs.reason.detail} <br /> Duration: {formatDuration(logs.duration)}
					</p>
				</li>
			{/each}
		</ol>
	</main>
{:catch error}
	<div class="mt-10">
		<Error name="logs" page={`/monitors/${data.id}/logs`} />
	</div>
{/await}
