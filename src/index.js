console.log("Hello from JS");

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWphc3V0dG9uIiwiYSI6ImNra2VhdmtvNTBiMHgybnF0cXp6MHZxbHUifQ.V1KmmZnX6VUv4UGoO_mMVg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});