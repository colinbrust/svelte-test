<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Montana Mesonet</title>
	<meta name="description" content="Montana Mesonet" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		Montana Mesonet

	</h1>
	<p>

Welcome to the Station Data of the Montana Mesonet

We offer two ways to access data from MT Mesonet Stations as we continue to improve our services.

Use our primary service, the Montana Mesonet Data Dashboard, by selecting stations from the interactive map below. Current data display in familiar English units. Interactive plots display trends of selected data over the past two-weeks.

Mesonet Data Downloader, the Mesonet Data Downloader allows a user to select custom date ranges to interactively plot mesonet data. Data can be aggregated to different timescales (daily, monthly) and download the associated dataset in a CSV format. 

Questions? Comments? Ideas for improvements or data services? Please email Kevin Hyde, the MT Mesonet Manager: kevin.hyde@umontana.edu.

Background

Quantifying even small changes in water availability would be significant for Montanans who make decisions that balance risks and costs. In 2014 there were 27,800 farm operations across ~60 million acres of land that contributed to 4.2 billion dollars of Montana’s revenue. Agriculture is such a large Montana industry that any increase in efficiency from more accurate weather and soil moisture information can translate into several million dollars in statewide savings each year. Whether for irrigated and dryland agriculture, grazing, water supply, or natural resource management too few stations exist to measure meteorological and soil moisture information at the same location to support decision-making based upon local conditions.
Concept

The Montana Climate Office (MCO) is leading the development of a cooperative statewide soil moisture and meteorological information system. It is designed to support decision-making in agriculture, range and forested watershed contexts. This network will add new remote sites and integrate existing cooperator networks to develop the first statewide soil-climate network.

The Montana Mesonet will:

    Combine information from existing data networks
    Establish a minimum of 100 new soil moisture recording sites through partnerships with cooperators.
    Provide an information system for accessing and visualizing historic, real-time and forecasted data.

A Cooperative Framework

No one entity can ensure sustained operation and success of a statewide climate and soil moisture information network. With this in mind, the MCO embraces a cooperative context that addresses a diverse set of information needs. The MCO extends a significant cost reduction on science grade stations to cooperators and installs them as funds become available. The MCO continues to develop to ensure that data are quality controlled and accessible in real time through web services and smart devices. An annual service fee covers data transmission fees, computing infrastructure, and maintenance costs. Simply stated, the MCO will not profit from the stations or maintenance of the network beyond the inherent value in facilitating an expansive and publically available soil moisture and climate information network for Montanans.
Data Management

All stations are solar powered, and allow users to check the data from virtually anywhere in the world. Data are transmitted from the data-logger’s internal module to MCO’s secure server via cellular communication. Quality assurance and control checks are applied and the data are available to the user to access and monitor. Transmitted data are backed up in the data-logger’s memory and at the MCO to provide an extra layer of redundancy and protection.
Contact
Montana Mesonet Manager

Kevin Hyde
W.A. Franke College of Forestry and Conservation
University of Montana
32 Campus Drive
Missoula, MT 59812-5076
Phone: 406-546-2109
Email: kevin.hyde@umontana.edu

	</p>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
