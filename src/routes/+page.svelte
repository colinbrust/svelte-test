<script lang="ts">
    import Button from './Button.svelte';
    import Nested from "./Nested.svelte";
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}

    let m = {x: 0, y: 0}
    function handleMouse(event: { clientX: number; clientY: number; }) {
        m.x = event.clientX
        m.y = event.clientY
    }

    let name = 'Homer';
    let src = "/favicon.png";

    const props = {
        thing: 'eggplant',
        action: 'being cooked'
    };
</script>

<h1>Hello {name}</h1>
<img {src} alt="{name} dances." />
<p>Here is some text</p>
<Button numbers={[]}/>
<Nested {...props} />

<button on:click={handleClick}> Remove first thing </button>
{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
	The mouse position is {m.x} x {m.y}
</div>

<style>
    p {
        color: goldenrod;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }

    div {
		width: 100%;
		height: 100%;
	}
</style>