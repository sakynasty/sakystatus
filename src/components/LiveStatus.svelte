<script>
	import { env } from '$env/dynamic/public';
	import Loader from './Loading/Loader.svelte';

	/**
	 * @type {number}
	 * @default 0
	 * @optional
	 */
	export let pagination = 0;
	/**
	 * @type {any}
	 * @default undefined
	 * @optional
	 */
	export let monitors = undefined;
	/**
	 * @type {string}
	 * @default error
	 * @required
	 */
	export let status = 'error';
	if (status == 'error') {
		console.error('[LOC](SakyStatus) LiveStatus: Status is ' + status);
	}

	/**
	 * @param {any} friendly_name
	 */
	function adaptNameForLink(friendly_name) {
		let adaptedName;
		let name = friendly_name;

		if (name.match(/[\(\[\{#]/)) {
			adaptedName = name.replace(/.*\(([^)]*)\).*/, '$1');
		} else {
			adaptedName = name;
		}

		adaptedName = adaptedName.replace(/\[[^\]]*\]|\{[^}]*\}|#(?:[a-zA-Z0-9]+)?/g, '');
		adaptedName = adaptedName.replace(/\s+/g, '-').toLowerCase();
		return adaptedName;
	}

	/**
	 * @param {any} friendly_name
	 */
	function adaptNameForList(friendly_name) {
		let cleanedName = friendly_name.replace(/(\([^)]*\)|\[[^\]]*\]|\{[^}]*\})/g, '');
		cleanedName = cleanedName.trim();
		return cleanedName;
	}

	let divClass = 'flex justify-between items-center flex-wrap';
	let sectionClass = 'live-status mt-2';
</script>

{#if (status = 'success')}
	<div class={divClass}>
		<h2>Live Status</h2>
		<p>Total visible monitoring: {pagination - 1}/{pagination}</p>
	</div>
	<section class={sectionClass}>
		{#each monitors as monitor}
			<article
				class={`id-${monitor.id} is ${monitor.status} mt-2 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800 border-none`}
			>
				<h4>
					<img
						class="icon inline"
						alt={`Favicon.ico for ${monitor.domain_name}`}
						src={`//${env.PUBLIC_API_FAVICONS}${monitor.domain_name}.ico`}
						width="17"
						height="17"
					/>
					<a
						href={`/monitors/${monitor.id}/${adaptNameForLink(monitor.friendly_name)}/logs`}
						title={`${monitor.friendly_name}'s Logs`}
						target="_self"
						rel="noopener nofollow"
						class="link">{adaptNameForList(monitor.friendly_name)}</a
					>
				</h4>
				<div>
					Average: {monitor.average_response_time}MS for {monitor.all_time_uptime_ratio}%UP
				</div>
			</article>
		{/each}
	</section>
{:else}
	<div class={divClass}>
		<h2>Live Status</h2>
		<p>Total visible monitoring: 0/0</p>
	</div>
	<section class={sectionClass}>
		<Loader />
	</section>
{/if}

<style>
	.id-796206979 {
		display: none !important;
	}
	.link::after {
		content: '' !important;
		position: absolute !important;
		left: 0 !important;
		right: 0 !important;
		top: 0 !important;
		bottom: 0 !important;
	}

	.icon {
		height: 1rem;
		margin-right: 0.33rem;
		vertical-align: middle;
		transform: scale(1.1) translateY(-0.1rem);
	}
	a {
		text-decoration: none;
	}
</style>
