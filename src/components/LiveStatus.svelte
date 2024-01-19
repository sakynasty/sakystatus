<script>
	import { dev } from '$app/environment';
	import Error from './Error.svelte';
	import Loader from './Loader.svelte';
	
    let apiUrl;
    if (dev) {
        apiUrl = '//local-w10.sakynasty.com/api/api/uptimerobot/monitors';
    } else {
        apiUrl = '//api.sakynasty.com/api/uptimerobot/monitors';
    }

    const getUptime = async () => {
        const res = await fetch(apiUrl);
        const api = await res.json();
        return api;
    };
</script>


{#await getUptime()}
	<div class="f changed">
		<h2>Live Status</h2>
        <p>Total monitoring: 0/0</p>
	</div>
	<section class="live-status">
		<Loader />
	</section>
{:then api}
	<div class="f changed">
		<h2>Live Status</h2>
		<p>Total monitoring: {api.data.pagination.total-1}/{api.data.pagination.total}</p>
	</div>
	<section class="live-status">
		{#if api.api.status.message == 'success'}
			{#each api.data.monitors as monitors}
				<article class={`id-${monitors.id} is ${monitors.status} dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800 border-none`}>
					<h4>
						<img
							class="icon inline"
							alt={`Favicon.ico for ${monitors.domain_name}`}
							src={`//icons.duckduckgo.com/ip3/${monitors.domain_name}.ico`}
							width="17"
							height="17"
						/>
						<!--<a
							href={`/monitors/${monitors.id}/logs`}
							title={`${monitors.friendly_name}'s Logs`}
							target="_self"
							rel="noopener nofollow"
							class="link">{monitors.friendly_name}</a
						>-->
                       <a
							href={`${monitors.url}`}
							title={`Go to ${monitors.friendly_name}`}
							target="_blank"
							rel="noopener nofollow"
							class="link">{monitors.friendly_name}</a
						>
					</h4>
					<div>
						Average: {monitors.average_response_time}MS for {monitors.all_time_uptime_ratio}%UP
					</div>
				</article>
			{/each}
		{:else}
			<Error />
		{/if}
	</section>
{:catch error}
	<Error />
{/await}

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
