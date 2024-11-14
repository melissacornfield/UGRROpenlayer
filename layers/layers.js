var wms_layers = [];

var format_ShapefileforUGRR_0 = new ol.format.GeoJSON();
var features_ShapefileforUGRR_0 = format_ShapefileforUGRR_0.readFeatures(json_ShapefileforUGRR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapefileforUGRR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapefileforUGRR_0.addFeatures(features_ShapefileforUGRR_0);
var lyr_ShapefileforUGRR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapefileforUGRR_0, 
                style: style_ShapefileforUGRR_0,
                popuplayertitle: "Shape file for UGRR",
                interactive: true,
                title: '<img src="styles/legend/ShapefileforUGRR_0.png" /> Shape file for UGRR'
            });

lyr_ShapefileforUGRR_0.setVisible(true);
var layersList = [lyr_ShapefileforUGRR_0];
lyr_ShapefileforUGRR_0.set('fieldAliases', {'Title': 'Title', 'Name(s) re': 'Name(s) re', 'freedom se': 'freedom se', 'short desc': 'short desc', 'More infor': 'More infor', 'type (stat': 'type (stat', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present da': 'present da', 'state': 'state', 'date of se': 'date of se', 'Time Activ': 'Time Activ', 'Date Range': 'Date Range', 'source typ': 'source typ', 'Reliabilit': 'Reliabilit', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Cu': 'Nearest Cu', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to da': 'link to da', 'Start Date': 'Start Date', 'End Date': 'End Date', 'times': 'times', });
lyr_ShapefileforUGRR_0.set('fieldImages', {'Title': 'TextEdit', 'Name(s) re': 'TextEdit', 'freedom se': 'TextEdit', 'short desc': 'TextEdit', 'More infor': 'TextEdit', 'type (stat': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present da': 'TextEdit', 'state': 'TextEdit', 'date of se': 'TextEdit', 'Time Activ': 'TextEdit', 'Date Range': 'TextEdit', 'source typ': 'TextEdit', 'Reliabilit': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Cu': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to da': 'TextEdit', 'Start Date': 'TextEdit', 'End Date': 'TextEdit', 'times': 'DateTime', });
lyr_ShapefileforUGRR_0.set('fieldLabels', {'Title': 'no label', 'Name(s) re': 'no label', 'freedom se': 'no label', 'short desc': 'no label', 'More infor': 'no label', 'type (stat': 'no label', 'Routes': 'no label', 'Town/ City': 'no label', 'present da': 'no label', 'state': 'no label', 'date of se': 'no label', 'Time Activ': 'no label', 'Date Range': 'no label', 'source typ': 'no label', 'Reliabilit': 'no label', 'Lat': 'no label', 'Long': 'no label', 'geoAddress': 'no label', 'Nearest Cu': 'no label', 'Access': 'no label', 'entered by': 'no label', 'entry date': 'no label', 'link to da': 'no label', 'Start Date': 'no label', 'End Date': 'no label', 'times': 'no label', });
lyr_ShapefileforUGRR_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});