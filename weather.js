var weatherUrl = 'http://geonet.org.nz/quakes/services/quake/2014p088748.json';

ajax({ url: weatherUrl, type: 'json' }, function(data) {
    simply.text({
    title: data.features[0].properties.magnitude,
    subtitle: data.features[0].properties.depth,
    body: data.features[0].properties.intensity
});