<script>
	import App from './App.svelte';
</script>

<svelte:head>
	<title>I felt the baby kick!</title>
	<meta name="description" content="Record when the baby kicks" />
</svelte:head>

<h1>I felt the baby kick!</h1>
<article class="app">
	<App />
</article>

<style>
	h1 {
		text-align: center;
	}
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
