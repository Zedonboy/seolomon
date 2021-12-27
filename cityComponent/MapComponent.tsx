//@ts-nocheck
import { memo, useEffect } from "react";

interface IMap {
  lat: number;
  long: number;
  company_name: string;
  company_logo: any;
}
export interface IMapSection {
  seoloCoord: IMap
  CompanyLocations: IMap[];
}
function MapComponent(props: { data: IMapSection }) {
  useEffect(() => {
    if(!window.mapboxgl) return
    mapboxgl.accessToken =
      "pk.eyJ1Ijoiam1hcnNpbGwiLCJhIjoiY2s3empyeXU1MDN3ZzNncGt2dDc2eTh1NyJ9.eh89Mi6ZtYweRbT2Jq1Sgw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [props?.data?.CompanyLocations[0].long || 0, props?.data?.CompanyLocations[0].lat || 0], // starting position [lng, lat]
      zoom: 12, // starting zoom
      interactive: false
    });

    props?.data?.CompanyLocations?.forEach((dt) => {
      if(dt?.company_logo?.url) {
        const el = document.createElement("div");
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = "marker";
        el.style.backgroundImage = `url(${dt?.company_logo?.url})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = "100%";
        el.addEventListener("click", () => {
          window.alert(dt?.company_name);
        });
        console.log("image")
        new mapboxgl.Marker(el)
        .setLngLat([dt?.long, dt?.lat])
        .addTo(map);
      } else {
        console.log("No image")
        const markerX = new mapboxgl.Marker()
        .setLngLat([dt?.long, dt?.lat])
        .addTo(map);
      }
   
    });
    const marker = new mapboxgl.Marker()
        .setLngLat([props?.data?.seoloCoord?.long || 0, props?.data?.seoloCoord?.lat || 0])
        .addTo(map);
  }, [props]);
  return (
    <section className="w-full h-full">
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.js"></script>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <div
        id="map"
        className="rounded-3xl overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </section>
  );
}

export default memo(MapComponent)