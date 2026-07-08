var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sleman_Kabupaten_1 = new ol.format.GeoJSON();
var features_Sleman_Kabupaten_1 = format_Sleman_Kabupaten_1.readFeatures(json_Sleman_Kabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sleman_Kabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sleman_Kabupaten_1.addFeatures(features_Sleman_Kabupaten_1);
var lyr_Sleman_Kabupaten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sleman_Kabupaten_1, 
                style: style_Sleman_Kabupaten_1,
                popuplayertitle: 'Sleman_Kabupaten',
                interactive: true,
    title: 'Sleman_Kabupaten<br />\
    <img src="styles/legend/Sleman_Kabupaten_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/Sleman_Kabupaten_1_1.png" /> Rendah<br />\
    <img src="styles/legend/Sleman_Kabupaten_1_2.png" /> Sedang<br />\
    <img src="styles/legend/Sleman_Kabupaten_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/Sleman_Kabupaten_1_4.png" /> Sangat Tinggi<br />' });
var format_Centroids_2 = new ol.format.GeoJSON();
var features_Centroids_2 = format_Centroids_2.readFeatures(json_Centroids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_2.addFeatures(features_Centroids_2);
var lyr_Centroids_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroids_2, 
                style: style_Centroids_2,
                popuplayertitle: 'Centroids',
                interactive: true,
                title: '<img src="styles/legend/Centroids_2.png" /> Centroids'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Sleman_Kabupaten_1.setVisible(true);lyr_Centroids_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sleman_Kabupaten_1,lyr_Centroids_2];
lyr_Sleman_Kabupaten_1.set('fieldAliases', {'WADMKC': 'Nama Kecamatan', 'Jumlah Pen': 'Jumlah Penduduk Laki-laki', 'Jumlah P_1': 'Jumlah Penduduk Perempuan', 'Jumlah P_2': 'Jumlah Penduduk keseluruhan', });
lyr_Centroids_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'Jumlah Pen': 'Jumlah Pen', 'Jumlah P_1': 'Jumlah P_1', 'Jumlah P_2': 'Jumlah P_2', });
lyr_Sleman_Kabupaten_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Jumlah P_1': 'TextEdit', 'Jumlah P_2': 'TextEdit', });
lyr_Centroids_2.set('fieldImages', {'WADMKC': '', 'Jumlah Pen': '', 'Jumlah P_1': '', 'Jumlah P_2': '', });
lyr_Sleman_Kabupaten_1.set('fieldLabels', {'WADMKC': 'inline label - visible with data', 'Jumlah Pen': 'inline label - always visible', 'Jumlah P_1': 'inline label - always visible', 'Jumlah P_2': 'inline label - always visible', });
lyr_Centroids_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Jumlah Pen': 'inline label - always visible', 'Jumlah P_1': 'inline label - always visible', 'Jumlah P_2': 'inline label - always visible', });
lyr_Centroids_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});