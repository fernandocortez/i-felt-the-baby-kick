<script>
	import Counter from './Counter.svelte';

	let count = 0;
	let notes = '';
</script>

<Counter bind:count />
<form method="POST" action="?/save" class="pure-form pure-form-stacked">
	<input type="number" name="count" bind:value={count} min="0" hidden />

	<label for="notes">Notes</label>
	<textarea name="notes" id="notes" cols="30" rows="10" bind:value={notes}></textarea>

	<button type="submit" class="pure-button pure-button-primary">Save</button>
</form>

<style>
	button {
		font-size: 125%;
		width: 100%;
	}
</style>
