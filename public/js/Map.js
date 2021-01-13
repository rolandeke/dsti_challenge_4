const styleDistrict = (features) => {
  return {
    fillColor: "#ADD8E6",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: 3,
    fillOpacity: 0.7,
  };
};
const map = L.map("map").setView([-13.0395683333333, 8.33449666666666], 20);
const mapLayer = L.geoJson(SLMAP, { style: styleDistrict }).addTo(map);
map.fitBounds(mapLayer.getBounds());

const getData = async () => {
  const stationData = await fetch("/api");
  const jsonData = await stationData.json();
  const { data } = jsonData;
  console.log(data);
  data.forEach((data) => {
    let marker = L.marker([
      data.Location.coordinates[0],
      data.Location.coordinates[1],
    ]);
    marker.addTo(map).on("click", () => {
      location.href = `/single/${data.stationId}`;
    });
  });
};

getData();
