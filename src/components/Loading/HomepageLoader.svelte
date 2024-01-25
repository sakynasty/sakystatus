<script>
	import Loader from './Loader.svelte';

	let svgClass = 'flex-shrink-0 inline w-4 h-4 me-3';
	let alertClass =
		'flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-neutral-800 bg-neutral-200';
	let divClass = 'flex justify-between items-center flex-wrap';
	let sectionClass = 'live-status mt-2';
</script>

<section class="mb-8">
	<div class={`text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 ${alertClass}`}>
		<i class={`fa-solid fa-spinner ${svgClass}`}></i>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Oops!</span> Now loading...
		</div>
	</div>
</section>

<div class={divClass}>
	<h2>Live Status</h2>
	<p>Total visible monitoring: 0/0</p>
</div>
<section class={sectionClass}>
	<Loader />
</section>
