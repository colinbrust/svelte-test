<script lang='ts'>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let mapElement: any;
    let map: any;
    let markers = [
        [47, -107.5],
        [48, -107.5]
    ];

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');
            map = leaflet.map(mapElement).setView([47, -107.5], 7);
            map.scrollWheelZoom.disable();

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            leaflet.marker([47, -107.5]).addTo(map)
                .bindPopup('This is Montana!')
                .openPopup();
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>
