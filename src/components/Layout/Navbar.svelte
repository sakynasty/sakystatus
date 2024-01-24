<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import icon from '$lib/img/icon.png';

	let activeClass = 'dark:active:text-white active:text-black';
</script>

<Navbar
	class="dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800"
	let:hidden
	let:toggle
>
	<NavBrand href="/monitors" title="SakyStatus" target="_self" rel="noopener">
		<img src={icon} class="mr-3 h-6 sm:h-9" alt="SakyStatus Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold"> SakyStatus </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="//sakynasty.com" title="Sakynasty" rel="noopener" target="_self" {activeClass}
			>Main</NavLi
		>
		<NavLi href="//rp.sakynasty.com" title="SakyRP" rel="noopener" target="_self" {activeClass}
			>RolePlay</NavLi
		>
		<NavLi
			href="/monitors"
			title="SakyStatus"
			rel="noopener"
			target="_self"
			active={true}
			{activeClass}>Status</NavLi
		>
		<NavLi
			href="//links.sakynasty.com"
			title="SakyLinks"
			rel="noopener"
			target="_blank"
			{activeClass}>All Links</NavLi
		>
	</NavUl>
</Navbar>
