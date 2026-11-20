var wms_layers = [];

var format_RoadCenterlinesUntiered_0 = new ol.format.GeoJSON();
var features_RoadCenterlinesUntiered_0 = format_RoadCenterlinesUntiered_0.readFeatures(json_RoadCenterlinesUntiered_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadCenterlinesUntiered_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCenterlinesUntiered_0.addFeatures(features_RoadCenterlinesUntiered_0);
var lyr_RoadCenterlinesUntiered_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCenterlinesUntiered_0, 
                style: style_RoadCenterlinesUntiered_0,
                popuplayertitle: 'Road Centerlines - Untiered',
                interactive: true,
    title: 'Road Centerlines - Untiered<br />\
    <img src="styles/legend/RoadCenterlinesUntiered_0_0.png" /> 1<br />\
    <img src="styles/legend/RoadCenterlinesUntiered_0_1.png" /> 2<br />\
    <img src="styles/legend/RoadCenterlinesUntiered_0_2.png" /> 3<br />\
    <img src="styles/legend/RoadCenterlinesUntiered_0_3.png" /> <br />' });
var format_RoadCenterlinesTieredBG_1 = new ol.format.GeoJSON();
var features_RoadCenterlinesTieredBG_1 = format_RoadCenterlinesTieredBG_1.readFeatures(json_RoadCenterlinesTieredBG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadCenterlinesTieredBG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCenterlinesTieredBG_1.addFeatures(features_RoadCenterlinesTieredBG_1);
var lyr_RoadCenterlinesTieredBG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCenterlinesTieredBG_1, 
                style: style_RoadCenterlinesTieredBG_1,
                popuplayertitle: 'Road Centerlines - Tiered - BG',
                interactive: false,
    title: 'Road Centerlines - Tiered - BG<br />\
    <img src="styles/legend/RoadCenterlinesTieredBG_1_0.png" /> A<br />\
    <img src="styles/legend/RoadCenterlinesTieredBG_1_1.png" /> B<br />\
    <img src="styles/legend/RoadCenterlinesTieredBG_1_2.png" /> C<br />\
    <img src="styles/legend/RoadCenterlinesTieredBG_1_3.png" /> D<br />\
    <img src="styles/legend/RoadCenterlinesTieredBG_1_4.png" /> S<br />' });
var format_RoadCenterlinesTiered_2 = new ol.format.GeoJSON();
var features_RoadCenterlinesTiered_2 = format_RoadCenterlinesTiered_2.readFeatures(json_RoadCenterlinesTiered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadCenterlinesTiered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCenterlinesTiered_2.addFeatures(features_RoadCenterlinesTiered_2);
var lyr_RoadCenterlinesTiered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCenterlinesTiered_2, 
                style: style_RoadCenterlinesTiered_2,
                popuplayertitle: 'Road Centerlines - Tiered',
                interactive: true,
    title: 'Road Centerlines - Tiered<br />\
    <img src="styles/legend/RoadCenterlinesTiered_2_0.png" /> S<br />\
    <img src="styles/legend/RoadCenterlinesTiered_2_1.png" /> A<br />\
    <img src="styles/legend/RoadCenterlinesTiered_2_2.png" /> B<br />\
    <img src="styles/legend/RoadCenterlinesTiered_2_3.png" /> C<br />\
    <img src="styles/legend/RoadCenterlinesTiered_2_4.png" /> D<br />' });

lyr_RoadCenterlinesUntiered_0.setVisible(true);lyr_RoadCenterlinesTieredBG_1.setVisible(true);lyr_RoadCenterlinesTiered_2.setVisible(true);
var layersList = [lyr_RoadCenterlinesUntiered_0,lyr_RoadCenterlinesTieredBG_1,lyr_RoadCenterlinesTiered_2];
lyr_RoadCenterlinesUntiered_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CE_PLAT_NUM': 'CE_PLAT_NUM', 'CE_CHAIN_ID': 'CE_CHAIN_ID', 'CE_RIGHT_FROM': 'CE_RIGHT_FROM', 'CE_LEFT_FROM': 'CE_LEFT_FROM', 'CE_RIGHT_TO': 'CE_RIGHT_TO', 'CE_LEFT_TO': 'CE_LEFT_TO', 'CE_RF_SUB': 'CE_RF_SUB', 'CE_LF_SUB': 'CE_LF_SUB', 'CE_RT_SUB': 'CE_RT_SUB', 'CE_LT_SUB': 'CE_LT_SUB', 'CE_C_STAT': 'CE_C_STAT', 'CE_LOUD_ID': 'CE_LOUD_ID', 'CE_UPD_DATE': 'CE_UPD_DATE', 'CE_RTNO': 'CE_RTNO', 'ST_CHAIN_ID': 'ST_CHAIN_ID', 'ST_FROM': 'ST_FROM', 'ST_TO': 'ST_TO', 'ST_STR_NAME': 'ST_STR_NAME', 'ST_DIR_SUF': 'ST_DIR_SUF', 'ST_STR_TYPE': 'ST_STR_TYPE', 'ST_DIR_PREF': 'ST_DIR_PREF', 'ST_PO': 'ST_PO', 'ST_SUBDV': 'ST_SUBDV', 'ST_CDATE': 'ST_CDATE', 'ST_SUBDV_SEC': 'ST_SUBDV_SEC', 'ST_JURIS': 'ST_JURIS', 'ST_STR_DIR': 'ST_STR_DIR', 'ST_FULLNAME': 'ST_FULLNAME', 'SHAPE_Length': 'SHAPE_Length', 'CE_OWNER': 'CE_OWNER', 'CE_SURF_TYPE': 'CE_SURF_TYPE', 'CE_SPEED_LMT': 'CE_SPEED_LMT', 'CE_ONE_WAY': 'CE_ONE_WAY', 'CE_ADD_DATE': 'CE_ADD_DATE', 'CE_RD_CLASS': 'CE_RD_CLASS', 'gravel_roads_tiers_Tier': 'gravel_roads_tiers_Tier', });
lyr_RoadCenterlinesTieredBG_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CE_PLAT_NUM': 'CE_PLAT_NUM', 'CE_CHAIN_ID': 'CE_CHAIN_ID', 'CE_RIGHT_FROM': 'CE_RIGHT_FROM', 'CE_LEFT_FROM': 'CE_LEFT_FROM', 'CE_RIGHT_TO': 'CE_RIGHT_TO', 'CE_LEFT_TO': 'CE_LEFT_TO', 'CE_RF_SUB': 'CE_RF_SUB', 'CE_LF_SUB': 'CE_LF_SUB', 'CE_RT_SUB': 'CE_RT_SUB', 'CE_LT_SUB': 'CE_LT_SUB', 'CE_C_STAT': 'CE_C_STAT', 'CE_LOUD_ID': 'CE_LOUD_ID', 'CE_UPD_DATE': 'CE_UPD_DATE', 'CE_RTNO': 'CE_RTNO', 'ST_CHAIN_ID': 'ST_CHAIN_ID', 'ST_FROM': 'ST_FROM', 'ST_TO': 'ST_TO', 'ST_STR_NAME': 'ST_STR_NAME', 'ST_DIR_SUF': 'ST_DIR_SUF', 'ST_STR_TYPE': 'ST_STR_TYPE', 'ST_DIR_PREF': 'ST_DIR_PREF', 'ST_PO': 'ST_PO', 'ST_SUBDV': 'ST_SUBDV', 'ST_CDATE': 'ST_CDATE', 'ST_SUBDV_SEC': 'ST_SUBDV_SEC', 'ST_JURIS': 'ST_JURIS', 'ST_STR_DIR': 'ST_STR_DIR', 'ST_FULLNAME': 'ST_FULLNAME', 'SHAPE_Length': 'SHAPE_Length', 'CE_OWNER': 'CE_OWNER', 'CE_SURF_TYPE': 'CE_SURF_TYPE', 'CE_SPEED_LMT': 'CE_SPEED_LMT', 'CE_ONE_WAY': 'CE_ONE_WAY', 'CE_ADD_DATE': 'CE_ADD_DATE', 'CE_RD_CLASS': 'CE_RD_CLASS', 'gravel_roads_tiers_Tier': 'gravel_roads_tiers_Tier', });
lyr_RoadCenterlinesTiered_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CE_PLAT_NUM': 'CE_PLAT_NUM', 'CE_CHAIN_ID': 'CE_CHAIN_ID', 'CE_RIGHT_FROM': 'CE_RIGHT_FROM', 'CE_LEFT_FROM': 'CE_LEFT_FROM', 'CE_RIGHT_TO': 'CE_RIGHT_TO', 'CE_LEFT_TO': 'CE_LEFT_TO', 'CE_RF_SUB': 'CE_RF_SUB', 'CE_LF_SUB': 'CE_LF_SUB', 'CE_RT_SUB': 'CE_RT_SUB', 'CE_LT_SUB': 'CE_LT_SUB', 'CE_C_STAT': 'CE_C_STAT', 'CE_LOUD_ID': 'CE_LOUD_ID', 'CE_UPD_DATE': 'CE_UPD_DATE', 'CE_RTNO': 'CE_RTNO', 'ST_CHAIN_ID': 'ST_CHAIN_ID', 'ST_FROM': 'ST_FROM', 'ST_TO': 'ST_TO', 'ST_STR_NAME': 'ST_STR_NAME', 'ST_DIR_SUF': 'ST_DIR_SUF', 'ST_STR_TYPE': 'ST_STR_TYPE', 'ST_DIR_PREF': 'ST_DIR_PREF', 'ST_PO': 'ST_PO', 'ST_SUBDV': 'ST_SUBDV', 'ST_CDATE': 'ST_CDATE', 'ST_SUBDV_SEC': 'ST_SUBDV_SEC', 'ST_JURIS': 'ST_JURIS', 'ST_STR_DIR': 'ST_STR_DIR', 'ST_FULLNAME': 'ST_FULLNAME', 'SHAPE_Length': 'SHAPE_Length', 'CE_OWNER': 'CE_OWNER', 'CE_SURF_TYPE': 'CE_SURF_TYPE', 'CE_SPEED_LMT': 'CE_SPEED_LMT', 'CE_ONE_WAY': 'CE_ONE_WAY', 'CE_ADD_DATE': 'CE_ADD_DATE', 'CE_RD_CLASS': 'CE_RD_CLASS', 'gravel_roads_tiers_Tier': 'gravel_roads_tiers_Tier', });
lyr_RoadCenterlinesUntiered_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CE_PLAT_NUM': 'TextEdit', 'CE_CHAIN_ID': 'TextEdit', 'CE_RIGHT_FROM': 'TextEdit', 'CE_LEFT_FROM': 'TextEdit', 'CE_RIGHT_TO': 'TextEdit', 'CE_LEFT_TO': 'TextEdit', 'CE_RF_SUB': 'TextEdit', 'CE_LF_SUB': 'TextEdit', 'CE_RT_SUB': 'TextEdit', 'CE_LT_SUB': 'TextEdit', 'CE_C_STAT': 'Range', 'CE_LOUD_ID': 'TextEdit', 'CE_UPD_DATE': 'DateTime', 'CE_RTNO': 'TextEdit', 'ST_CHAIN_ID': 'TextEdit', 'ST_FROM': 'TextEdit', 'ST_TO': 'TextEdit', 'ST_STR_NAME': 'TextEdit', 'ST_DIR_SUF': 'TextEdit', 'ST_STR_TYPE': 'TextEdit', 'ST_DIR_PREF': 'TextEdit', 'ST_PO': 'TextEdit', 'ST_SUBDV': 'TextEdit', 'ST_CDATE': 'DateTime', 'ST_SUBDV_SEC': 'TextEdit', 'ST_JURIS': 'TextEdit', 'ST_STR_DIR': 'TextEdit', 'ST_FULLNAME': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'CE_OWNER': 'TextEdit', 'CE_SURF_TYPE': 'Range', 'CE_SPEED_LMT': 'Range', 'CE_ONE_WAY': 'TextEdit', 'CE_ADD_DATE': 'DateTime', 'CE_RD_CLASS': 'TextEdit', 'gravel_roads_tiers_Tier': 'TextEdit', });
lyr_RoadCenterlinesTieredBG_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CE_PLAT_NUM': 'TextEdit', 'CE_CHAIN_ID': 'TextEdit', 'CE_RIGHT_FROM': 'TextEdit', 'CE_LEFT_FROM': 'TextEdit', 'CE_RIGHT_TO': 'TextEdit', 'CE_LEFT_TO': 'TextEdit', 'CE_RF_SUB': 'TextEdit', 'CE_LF_SUB': 'TextEdit', 'CE_RT_SUB': 'TextEdit', 'CE_LT_SUB': 'TextEdit', 'CE_C_STAT': 'Range', 'CE_LOUD_ID': 'TextEdit', 'CE_UPD_DATE': 'DateTime', 'CE_RTNO': 'TextEdit', 'ST_CHAIN_ID': 'TextEdit', 'ST_FROM': 'TextEdit', 'ST_TO': 'TextEdit', 'ST_STR_NAME': 'TextEdit', 'ST_DIR_SUF': 'TextEdit', 'ST_STR_TYPE': 'TextEdit', 'ST_DIR_PREF': 'TextEdit', 'ST_PO': 'TextEdit', 'ST_SUBDV': 'TextEdit', 'ST_CDATE': 'DateTime', 'ST_SUBDV_SEC': 'TextEdit', 'ST_JURIS': 'TextEdit', 'ST_STR_DIR': 'TextEdit', 'ST_FULLNAME': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'CE_OWNER': 'TextEdit', 'CE_SURF_TYPE': 'Range', 'CE_SPEED_LMT': 'Range', 'CE_ONE_WAY': 'TextEdit', 'CE_ADD_DATE': 'DateTime', 'CE_RD_CLASS': 'TextEdit', 'gravel_roads_tiers_Tier': 'TextEdit', });
lyr_RoadCenterlinesTiered_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CE_PLAT_NUM': 'TextEdit', 'CE_CHAIN_ID': 'TextEdit', 'CE_RIGHT_FROM': 'TextEdit', 'CE_LEFT_FROM': 'TextEdit', 'CE_RIGHT_TO': 'TextEdit', 'CE_LEFT_TO': 'TextEdit', 'CE_RF_SUB': 'TextEdit', 'CE_LF_SUB': 'TextEdit', 'CE_RT_SUB': 'TextEdit', 'CE_LT_SUB': 'TextEdit', 'CE_C_STAT': 'Range', 'CE_LOUD_ID': 'TextEdit', 'CE_UPD_DATE': 'DateTime', 'CE_RTNO': 'TextEdit', 'ST_CHAIN_ID': 'TextEdit', 'ST_FROM': 'TextEdit', 'ST_TO': 'TextEdit', 'ST_STR_NAME': 'TextEdit', 'ST_DIR_SUF': 'TextEdit', 'ST_STR_TYPE': 'TextEdit', 'ST_DIR_PREF': 'TextEdit', 'ST_PO': 'TextEdit', 'ST_SUBDV': 'TextEdit', 'ST_CDATE': 'DateTime', 'ST_SUBDV_SEC': 'TextEdit', 'ST_JURIS': 'TextEdit', 'ST_STR_DIR': 'TextEdit', 'ST_FULLNAME': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'CE_OWNER': 'TextEdit', 'CE_SURF_TYPE': 'Range', 'CE_SPEED_LMT': 'Range', 'CE_ONE_WAY': 'TextEdit', 'CE_ADD_DATE': 'DateTime', 'CE_RD_CLASS': 'TextEdit', 'gravel_roads_tiers_Tier': 'TextEdit', });
lyr_RoadCenterlinesUntiered_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CE_PLAT_NUM': 'no label', 'CE_CHAIN_ID': 'no label', 'CE_RIGHT_FROM': 'no label', 'CE_LEFT_FROM': 'no label', 'CE_RIGHT_TO': 'no label', 'CE_LEFT_TO': 'no label', 'CE_RF_SUB': 'no label', 'CE_LF_SUB': 'no label', 'CE_RT_SUB': 'no label', 'CE_LT_SUB': 'no label', 'CE_C_STAT': 'no label', 'CE_LOUD_ID': 'no label', 'CE_UPD_DATE': 'no label', 'CE_RTNO': 'no label', 'ST_CHAIN_ID': 'no label', 'ST_FROM': 'no label', 'ST_TO': 'no label', 'ST_STR_NAME': 'no label', 'ST_DIR_SUF': 'no label', 'ST_STR_TYPE': 'no label', 'ST_DIR_PREF': 'no label', 'ST_PO': 'no label', 'ST_SUBDV': 'no label', 'ST_CDATE': 'no label', 'ST_SUBDV_SEC': 'no label', 'ST_JURIS': 'no label', 'ST_STR_DIR': 'no label', 'ST_FULLNAME': 'no label', 'SHAPE_Length': 'no label', 'CE_OWNER': 'no label', 'CE_SURF_TYPE': 'no label', 'CE_SPEED_LMT': 'no label', 'CE_ONE_WAY': 'no label', 'CE_ADD_DATE': 'no label', 'CE_RD_CLASS': 'no label', 'gravel_roads_tiers_Tier': 'no label', });
lyr_RoadCenterlinesTieredBG_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CE_PLAT_NUM': 'no label', 'CE_CHAIN_ID': 'no label', 'CE_RIGHT_FROM': 'no label', 'CE_LEFT_FROM': 'no label', 'CE_RIGHT_TO': 'no label', 'CE_LEFT_TO': 'no label', 'CE_RF_SUB': 'no label', 'CE_LF_SUB': 'no label', 'CE_RT_SUB': 'no label', 'CE_LT_SUB': 'no label', 'CE_C_STAT': 'no label', 'CE_LOUD_ID': 'no label', 'CE_UPD_DATE': 'no label', 'CE_RTNO': 'no label', 'ST_CHAIN_ID': 'no label', 'ST_FROM': 'no label', 'ST_TO': 'no label', 'ST_STR_NAME': 'no label', 'ST_DIR_SUF': 'no label', 'ST_STR_TYPE': 'no label', 'ST_DIR_PREF': 'no label', 'ST_PO': 'no label', 'ST_SUBDV': 'no label', 'ST_CDATE': 'no label', 'ST_SUBDV_SEC': 'no label', 'ST_JURIS': 'no label', 'ST_STR_DIR': 'no label', 'ST_FULLNAME': 'no label', 'SHAPE_Length': 'no label', 'CE_OWNER': 'no label', 'CE_SURF_TYPE': 'no label', 'CE_SPEED_LMT': 'no label', 'CE_ONE_WAY': 'no label', 'CE_ADD_DATE': 'no label', 'CE_RD_CLASS': 'no label', 'gravel_roads_tiers_Tier': 'no label', });
lyr_RoadCenterlinesTiered_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CE_PLAT_NUM': 'no label', 'CE_CHAIN_ID': 'no label', 'CE_RIGHT_FROM': 'no label', 'CE_LEFT_FROM': 'no label', 'CE_RIGHT_TO': 'no label', 'CE_LEFT_TO': 'no label', 'CE_RF_SUB': 'no label', 'CE_LF_SUB': 'no label', 'CE_RT_SUB': 'no label', 'CE_LT_SUB': 'no label', 'CE_C_STAT': 'no label', 'CE_LOUD_ID': 'no label', 'CE_UPD_DATE': 'no label', 'CE_RTNO': 'no label', 'ST_CHAIN_ID': 'no label', 'ST_FROM': 'no label', 'ST_TO': 'no label', 'ST_STR_NAME': 'no label', 'ST_DIR_SUF': 'no label', 'ST_STR_TYPE': 'no label', 'ST_DIR_PREF': 'no label', 'ST_PO': 'no label', 'ST_SUBDV': 'no label', 'ST_CDATE': 'no label', 'ST_SUBDV_SEC': 'no label', 'ST_JURIS': 'no label', 'ST_STR_DIR': 'no label', 'ST_FULLNAME': 'no label', 'SHAPE_Length': 'no label', 'CE_OWNER': 'no label', 'CE_SURF_TYPE': 'no label', 'CE_SPEED_LMT': 'no label', 'CE_ONE_WAY': 'no label', 'CE_ADD_DATE': 'no label', 'CE_RD_CLASS': 'no label', 'gravel_roads_tiers_Tier': 'no label', });
lyr_RoadCenterlinesTiered_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});