<script lang='ts'>
    import type { PageData } from './$types';
    import { browser } from '$app/environment';
    import {LeafletMap, TileLayer, Marker, Popup} from 'svelte-leafletjs?client';
    import 'leaflet/dist/leaflet.css'

    const mapOptions = {
        center: [47, -107.5],
        zoom: 7,
        scrollWheelZoom: false,
    };
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    };

    // onMount(async () => {
    //     if (browser) {
    //         const leaflet = await import('svelte-leafletjs');
    //         const mapOptions = {
    //             center: [1.364917, 103.822872],
    //             zoom: 11,
    //         };
    //         const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    //         const tileLayerOptions = {
    //             minZoom: 0,
    //             maxZoom: 20,
    //             maxNtiveZoom: 19,
    //             attribution: "© OpenStreetMap contributors",
    //         };
    //     }
    // })

    export let data: PageData;
</script>

<div>
    <h1>Here are the mesonet stations!</h1>
</div>

<div id="map" style="height: 40vh; width: 40vw">
    {#if browser}
        <LeafletMap options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions}/>
            {#each data.data as station}
                <Marker latLng={[station.latitude, station.longitude]}>
                    <Popup>
                        <b>Station:</b> {station.name}<br>
                        <b>Network:</b> {station.sub_network}<br>
                        <b>Lat, Lon: </b> {station.latitude}, {station.longitude}<br>
                        <b>Elevation: </b> {station.elevation}<br>
                        <b><a href="https://mesonet.climate.umt.edu/dash/{station.station}" target="_blank">Dashboard Link</a></b> 
                </Popup>
                </Marker>
            {/each}
        </LeafletMap>
    {/if}
</div>

<main>
</main>

<!-- Add your home page content here -->
<!-- <h1>Background</h1>
<hr>
<p>
    Quantifying even small changes in water availability would be significant for Montanans who make decisions that balance 
    risks and costs. In 2014 there were 27,800 farm operations across ~60 million acres of land that contributed to 
    4.2 billion dollars of Montana's revenue. Agriculture is such a large Montana industry that any increase in efficiency 
    from more accurate weather and soil moisture information can translate into several million dollars in statewide savings 
    each year. Whether for irrigated and dryland agriculture, grazing, water supply, or natural resource management too few 
    stations exist to measure meteorological and soil moisture information at the same location to support decision-making 
    based upon local conditions.
</p> -->
