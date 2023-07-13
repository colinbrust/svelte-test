<script lang="ts">
    export let numbers = [1, 2, 3, 4];

    function assNumber() {
        numbers = [...numbers, numbers.length + 1]
    }

    $: sum = numbers.reduce((t, n) => t + n, 0)
</script>

<button on:click={assNumber}>
    The sum of this {numbers} is {sum}
</button>

{#if sum >= 10}
    <h2>That is a big sum :)</h2>
{:else if sum > 5 && sum < 10}
    <h4>That is an average sum :(</h4>
{:else}
    <h6>That is a small sum :(</h6>
{/if}

<style>
    button {
        width: 200px;
        white-space: normal;
        word-wrap: break-word;
    }
</style>

