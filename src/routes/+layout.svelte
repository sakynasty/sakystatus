<script>
	import '$lib/css/tailwind.css';
	import '$lib/css/global.css';
	import '$lib/css/icon-bar.css';
	import Footer from '../components/Footer.svelte';
	import IconBar from '../components/IconBar.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en" />
	<link rel="icon" type="image/png" href="/assets/img/favicon.png" />
	<meta property="twitter:image" content="/assets/img/banner.jpg" />
	<meta property="og:image" content="/assets/img/banner.jpg" />
	<meta property="twitter:card" content="summary_large_image" />
	<link rel="stylesheet" href="/assets/css/fa-all.min.css" />
	<script type="text/javascript" src="/assets/js/fa-all.min.js"></script>
	<script type="text/javascript" src="/assets/js/whitelisted.js"></script>
</svelte:head>

<IconBar />
<Navbar />
<div class="container">
	<slot />
</div>
<Footer />
