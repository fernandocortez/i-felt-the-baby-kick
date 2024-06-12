<svelte:head>
	<title>I felt the baby kick! - History</title>
	<meta name="description" content="History of when the baby has kicked" />
</svelte:head>

<script>
	export let data;
</script>

<h1>History</h1>
<table class="pure-table pure-table-striped">
	<thead>
		<tr>
			<th>Date</th>
			<th>Count</th>
			<th>Notes</th>
		</tr>
	</thead>

	<tbody>
		{#each data.rows as row}
			<tr>
				<td>{row.timestamp}</td>
				<td>{row.kick_count}</td>
				<td>{row.notes}</td>
			</tr>
		{/each}
	</tbody>
</table>
