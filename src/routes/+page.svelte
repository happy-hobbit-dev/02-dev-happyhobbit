<svelte:head>


</svelte:head>


<script>
    import HappyHobbit from '$lib/HappyHobbitSVG.svelte'
	
	let selected = HappyHobbit 
</script>
<svelte:component this={selected} />
<h1>Happy Hobbit</h1>
<p>The numero uno hobbit-hole-swapping app in the Shire</p>


<style>
:global(svg) {
		max-width: 400px;
		display: block
	}
h1 {
	color: orange;
	font-family: 'helvetica', cursive;
	font-size: 8em;
  }

p {
	color: purple;
	font-family: 'Comic Sans MS', cursive;
	font-size: 2em;
  }

</style>

