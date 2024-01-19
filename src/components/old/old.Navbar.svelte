<script>
	import icon from '$lib/images/icon.png';
</script>

<nav>
	<div class="container">
		<div>
			<a href="/" class="logo"
				><img alt="SakyStatus's Icon.png" src={icon} />
				<div>SakyStatus</div></a
			>
		</div>
		<ul>
			<li>
				<a href="https://sakynasty.com" target="_self" rel="noopener" title="Go to Sakynasty.com"
					>Main</a
				>
			</li>
			<li>
				<a href="/" target="_self" aria-current="page" title="Go to Status.Sakynasty.com">Status</a>
			</li>
			<li>
				<a
					href="https://rp.sakynasty.com"
					target="_self"
					rel="noopener"
					title="Go to rp.Sakynasty.com">RolePlay</a
				>
			</li>
			<li>
				<a
					href="https://links.sakynasty.com"
					target="_blank"
					rel="noopener"
					title="Go to links.Sakynasty.com">All Links</a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		margin-bottom: 2rem;
		white-space: nowrap;
		overflow-x: auto;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
		align-items: center;
		justify-content: center;
	}

	a {
		text-decoration: none;
		padding: 1.5rem 2rem;
		display: block;
	}

	.logo {
		float: left;
		display: flex;
		align-items: center;
		padding: 0.5rem 0;
		font-weight: bold;
		margin-right: 2rem;
	}
	.logo img {
		margin-right: 1rem;
		height: 3rem;
		border-radius: 0.2rem;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
