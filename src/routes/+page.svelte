<script lang='ts'>
    import type { PageData } from './$types';
    import { browser } from '$app/environment';
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import {LeafletMap, TileLayer, Marker, Popup, Icon, Tooltip} from 'svelte-leafletjs?client';
    import 'leaflet/dist/leaflet.css'
    import AnimatedElement from './AnimatedElement.svelte';
    import logo from '$lib/images/marker.png';

    const mapOptions = {
        center: [47, -109.5],
        zoom: 6,
        scrollWheelZoom: false,
    };
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    };
    const iconOptions = {
        iconUrl: logo,
        iconSize: [10, 10],
        // iconAnchor: [0, 0],
        popupAnchor: [0, -30],
        // tooltipAnchor: [16. -28],
    };

    export let data: PageData;


</script>

<div class="grid lg:grid-cols-2">
    <div style="height: 50vh; width: 90%" class="mx-auto flex justify-center items-center bg-white p-4 border border-gray-300 rounded-lg mt-4 w-5/12">
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
                        <Tooltip><b>{station.name}</b></Tooltip>
                        <Icon options={iconOptions}/>
                    </Marker>
                {/each}
            </LeafletMap>
        {/if}
    </div>
    <div style="height: 50vh; width: 90%" class="mx-auto flex flex-col justify-center items-center bg-white p-4 border border-gray-300 rounded-lg mt-4 w-5/12">
        <h1 class="text-center text-4xl text-red-800 mb-4">Explore the Mesonet</h1>
        <p class="text-left hero">
            The Montana Mesonet is currently comprised of {data.data.length} stations, with more being added each year. 
        </p>
    </div>
    
    
    <!-- Add more alternating text blocks as needed -->
</div>
  

<div class="main">
      <div class="full-height hero">
        <AnimatedElement 
            textBody={`Quantifying even small changes in water availability would be significant for Montanans who make decisions that
            balance risks and costs. In 2014 there were 27,800 farm operations across ~60 million acres of land that 
            contributed to 4.2 billion dollars of Montana's revenue. Agriculture is such a large Montana industry that any 
            increase in efficiency from more accurate weather and soil moisture information can translate into several 
            million dollars in statewide savings each year. Whether for irrigated and dryland agriculture, grazing, water 
            supply, or natural resource management too few stations exist to measure meteorological and soil moisture 
            information at the same location to support decision-making based upon local conditions.`}
            heading={"Background"}
            renderAnyways={true}/>
      </div>
      <div class="full-height hero">
        <AnimatedElement 
        textBody={`The Montana Climate Office (MCO) is leading the development of a cooperative statewide soil moisture and 
            meteorological information system. It is designed to support decision-making in agriculture, range and forested 
            watershed contexts. This network will add new remote sites and integrate existing cooperator networks to 
            develop the first statewide soil-climate network. The Montana Mesonet will: Combine information from existing data
            networks, establish a minimum of 100 new soil moisture recording sites through partnerships with cooperators, and
            provide an information system for accessing and visualizing historic, real-time and forecasted data.`}
        heading={"Concept"}
        />
      </div>
      <div class="full-height hero">
        <AnimatedElement 
        textBody={`No one entity can ensure sustained operation and success of a statewide climate and soil moisture information
            network. With this in mind, the MCO embraces a cooperative context that addresses a diverse set of
            information needs. The MCO extends a significant cost reduction on science grade stations to cooperators and
            installs them as funds become available. The MCO continues to develop to ensure that data are quality
            controlled and accessible in real time through web services and smart devices. An annual service fee covers
            data transmission fees, computing infrastructure, and maintenance costs. Simply stated, the MCO will not
            profit from the stations or maintenance of the network beyond the inherent value in facilitating an expansive
            and publically available soil moisture and climate information network for Montanans.`}
        heading={"A Cooperative Framework"}
        />
      </div>
      <div class="full-height hero">
        <AnimatedElement 
        textBody={`All stations are solar powered, and allow users to check the data from virtually anywhere in the world. Data are
            transmitted from the data-logger's internal module to MCO's secure server via cellular communication. Quality
            assurance and control checks are applied and the data are available to the user to access and monitor.
            Transmitted data are backed up in the data-logger's memory and at the MCO to provide an extra layer of redundancy
            and protection.`}
        heading={"Data Management"}
        />
      </div>
</div>

<style>
    :root {
        background-color: slategray;
    }
    .main {
        text-align: center;
        padding: 0 1em;
        margin: 0 auto;
    }

    .hero {
        height: calc(100vh - 16px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    /* Set the height of .full-height class based on screen size */
    .full-height {
        height: 40vh; /* Default height for larger screens */
        display: flex;
        justify-content: center;
    }

    /* Media query for smaller screens */
    @media screen and (max-width: 640px) {
        .hero {
            height: calc(100vh - 100px); /* Adjust the height for smaller screens */
        }

        .full-height {
            height: 30vh; /* Adjust the height for smaller screens */
        }
    }
</style>