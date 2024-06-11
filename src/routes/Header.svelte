<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="pure-menu pure-menu-horizontal">
		<ul class="pure-menu-list">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="pure-menu-item">
				<a href="/" class="pure-menu-link">Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === '/history' ? 'page' : undefined}
				class="pure-menu-item"
			>
				<a href="/history" class="pure-menu-link">History</a>
			</li>
		</ul>
	</nav>
</header>
