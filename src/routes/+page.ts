import type { PageLoad } from './$types';

interface StationRecord {
    station: string;
    name: string;
    date_installed: string;
    sub_network: string,
    longitude: number,
    latitude: number, 
    elevation: number,
    mesowest_id: string,
    gwic_id: string,
    link: string
}

export const load = (async () => {
    const response = await fetch("https://mesonet.climate.umt.edu/api/v2/stations?type=json")
    if (response.ok) {
        const data = await response.json();
        data.forEach((station: StationRecord) => {
            station.link = "https://mesonet.climate.umt.edu/dash/" + station.station
        });
        return { data };
    }
    return   {};
}) satisfies PageLoad;