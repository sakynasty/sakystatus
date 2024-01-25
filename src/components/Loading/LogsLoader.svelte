<script>
	import Loader from './Loader.svelte';

	/**
	 * @type {string}
	 * @default undefined
	 * @required
	 */
	export let name = 'undefined';
	/**
	 * @type {string}
	 * @default 0
	 * @required
	 */
	export let id;
</script>

<div class="mb-1 mt-5">
	<h1
		class="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
	>
		{name} <small>#{id}</small>
	</h1>
	<p class="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
		<mark
			class="px-1 font-bold bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 rounded-md"
		>
			<b>Oops!</b>
		</mark>
		now loading...
	</p>
</div>
<Loader />
