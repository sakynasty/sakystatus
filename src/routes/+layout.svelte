<script>
	import '$lib/css/tailwind.css';
	import '$lib/css/global.css';
	import '$lib/css/icon-bar.css';
	import Footer from '../components/Layout/Footer.svelte';
	import IconBar from '../components/Layout/IconBar.svelte';
	import Navbar from '../components/Layout/Navbar.svelte';
</script>

<header>
	<IconBar />
	<Navbar />
</header>
<main>
	<div class="container">
		<slot />
	</div>
</main>
<Footer />
