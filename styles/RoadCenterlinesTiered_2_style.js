var size = 0;
var placement = 'point';
function categories_RoadCenterlinesTiered_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'S':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(26,150,65,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'A':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(166,217,106,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'B':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,134,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'C':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,174,97,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'D':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_RoadCenterlinesTiered_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("gravel_roads_tiers_Tier");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_RoadCenterlinesTiered_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
