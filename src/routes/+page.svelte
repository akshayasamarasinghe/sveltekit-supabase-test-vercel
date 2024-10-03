<section>
	<p class="px-2 py-3 text-5xl font-bold">Home</p>
</section>

<script>
	export let data;
</script>

<ul>
	{#each data.users as user}
		<li>{user.firstname}</li>
	{/each}
</ul>
