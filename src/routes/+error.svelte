<script>
	// @ts-nocheck

	import { page } from '$app/stores';

	let statusMessage;
	if ($page.status == '404') {
		statusMessage = 'The requested page/resource has not been found or has been deleted.';
	} else if ($page.status == '500') {
		statusMessage =
			'It looks like an internal server error is preventing the page from working properly...';
	} else {
		statusMessage = "Oops... I think we've made a error...";
	}
</script>

<svelte:head>
	<title>{$page.status} {$page.error.message} - SakyStatus</title>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="googlebot" content="noindex, nofollow" />
</svelte:head>

<header class="mt-10">
	<h1 class="mb-2 text-center">{$page.status} {$page.error.message}</h1>
</header>
<main>
	<div
		class="mb-5 flex items-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800"
		role="alert"
	>
		<svg
			class="flex-shrink-0 inline w-4 h-4 me-3"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			<p class="lead">{statusMessage}</p>
		</div>
	</div>

	<a href="/monitors" title="SakyStatus" rel="noopener"
		><p class="text-center">Go to the homepage</p></a
	>
</main>

<style>
	h1 {
		font-size: 2em;
	}
	p.lead {
		font-size: 110%;
	}
</style>
