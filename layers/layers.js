var wms_layers = [];


        var lyr_OSMStandardDark_0 = new ol.layer.Tile({
            'title': 'OSM Standard Dark',
            'type': 'base',
            'opacity': 1.000000,
            'className': 'loh',
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandardLight_1 = new ol.layer.Tile({
            'title': 'OSM Standard Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2021_2 = new ol.format.GeoJSON();
var features_2021_2 = format_2021_2.readFeatures(json_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_2.addFeatures(features_2021_2);
var lyr_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_2, 
                style: style_2021_2,
                interactive: false,
                title: '<img src="styles/legend/2021_2.png" /> 2021'
            });
var format_2020_3 = new ol.format.GeoJSON();
var features_2020_3 = format_2020_3.readFeatures(json_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_3.addFeatures(features_2020_3);
var lyr_2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_3, 
                style: style_2020_3,
                interactive: false,
                title: '<img src="styles/legend/2020_3.png" /> 2020'
            });
var format_2019_4 = new ol.format.GeoJSON();
var features_2019_4 = format_2019_4.readFeatures(json_2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_4.addFeatures(features_2019_4);
var lyr_2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_4, 
                style: style_2019_4,
                interactive: false,
                title: '<img src="styles/legend/2019_4.png" /> 2019'
            });
var format_2018_5 = new ol.format.GeoJSON();
var features_2018_5 = format_2018_5.readFeatures(json_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_5.addFeatures(features_2018_5);
var lyr_2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_5, 
                style: style_2018_5,
                interactive: false,
                title: '<img src="styles/legend/2018_5.png" /> 2018'
            });
var format_2017_6 = new ol.format.GeoJSON();
var features_2017_6 = format_2017_6.readFeatures(json_2017_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_6.addFeatures(features_2017_6);
var lyr_2017_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_6, 
                style: style_2017_6,
                interactive: false,
                title: '<img src="styles/legend/2017_6.png" /> 2017'
            });
var format_2016_7 = new ol.format.GeoJSON();
var features_2016_7 = format_2016_7.readFeatures(json_2016_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_7.addFeatures(features_2016_7);
var lyr_2016_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_7, 
                style: style_2016_7,
                interactive: false,
                title: '<img src="styles/legend/2016_7.png" /> 2016'
            });
var format_2015_8 = new ol.format.GeoJSON();
var features_2015_8 = format_2015_8.readFeatures(json_2015_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_8.addFeatures(features_2015_8);
var lyr_2015_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2015_8, 
                style: style_2015_8,
                interactive: false,
                title: '<img src="styles/legend/2015_8.png" /> 2015'
            });
var format_2014_9 = new ol.format.GeoJSON();
var features_2014_9 = format_2014_9.readFeatures(json_2014_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014_9.addFeatures(features_2014_9);
var lyr_2014_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2014_9, 
                style: style_2014_9,
                interactive: false,
                title: '<img src="styles/legend/2014_9.png" /> 2014'
            });
var format_2013_10 = new ol.format.GeoJSON();
var features_2013_10 = format_2013_10.readFeatures(json_2013_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2013_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2013_10.addFeatures(features_2013_10);
var lyr_2013_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2013_10, 
                style: style_2013_10,
                interactive: false,
                title: '<img src="styles/legend/2013_10.png" /> 2013'
            });
var format_2012_11 = new ol.format.GeoJSON();
var features_2012_11 = format_2012_11.readFeatures(json_2012_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_11.addFeatures(features_2012_11);
var lyr_2012_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2012_11, 
                style: style_2012_11,
                interactive: false,
                title: '<img src="styles/legend/2012_11.png" /> 2012'
            });
var format_2011_12 = new ol.format.GeoJSON();
var features_2011_12 = format_2011_12.readFeatures(json_2011_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011_12.addFeatures(features_2011_12);
var lyr_2011_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2011_12, 
                style: style_2011_12,
                interactive: false,
                title: '<img src="styles/legend/2011_12.png" /> 2011'
            });
var format_2010_13 = new ol.format.GeoJSON();
var features_2010_13 = format_2010_13.readFeatures(json_2010_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_13.addFeatures(features_2010_13);
var lyr_2010_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2010_13, 
                style: style_2010_13,
                interactive: false,
                title: '<img src="styles/legend/2010_13.png" /> 2010'
            });
var format_2009_14 = new ol.format.GeoJSON();
var features_2009_14 = format_2009_14.readFeatures(json_2009_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2009_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2009_14.addFeatures(features_2009_14);
var lyr_2009_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2009_14, 
                style: style_2009_14,
                interactive: false,
                title: '<img src="styles/legend/2009_14.png" /> 2009'
            });
var format_2008_15 = new ol.format.GeoJSON();
var features_2008_15 = format_2008_15.readFeatures(json_2008_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2008_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2008_15.addFeatures(features_2008_15);
var lyr_2008_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2008_15, 
                style: style_2008_15,
                interactive: false,
                title: '<img src="styles/legend/2008_15.png" /> 2008'
            });
var format_2007_16 = new ol.format.GeoJSON();
var features_2007_16 = format_2007_16.readFeatures(json_2007_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2007_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2007_16.addFeatures(features_2007_16);
var lyr_2007_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2007_16, 
                style: style_2007_16,
                interactive: false,
                title: '<img src="styles/legend/2007_16.png" /> 2007'
            });
var format_2006_17 = new ol.format.GeoJSON();
var features_2006_17 = format_2006_17.readFeatures(json_2006_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2006_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2006_17.addFeatures(features_2006_17);
var lyr_2006_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2006_17, 
                style: style_2006_17,
                interactive: false,
                title: '<img src="styles/legend/2006_17.png" /> 2006'
            });
var format_2005_18 = new ol.format.GeoJSON();
var features_2005_18 = format_2005_18.readFeatures(json_2005_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_18.addFeatures(features_2005_18);
var lyr_2005_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2005_18, 
                style: style_2005_18,
                interactive: false,
                title: '<img src="styles/legend/2005_18.png" /> 2005'
            });
var format_2004_19 = new ol.format.GeoJSON();
var features_2004_19 = format_2004_19.readFeatures(json_2004_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2004_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2004_19.addFeatures(features_2004_19);
var lyr_2004_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2004_19, 
                style: style_2004_19,
                interactive: false,
                title: '<img src="styles/legend/2004_19.png" /> 2004'
            });
var format_2003_20 = new ol.format.GeoJSON();
var features_2003_20 = format_2003_20.readFeatures(json_2003_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2003_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2003_20.addFeatures(features_2003_20);
var lyr_2003_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2003_20, 
                style: style_2003_20,
                interactive: false,
                title: '<img src="styles/legend/2003_20.png" /> 2003'
            });
var format_2002_21 = new ol.format.GeoJSON();
var features_2002_21 = format_2002_21.readFeatures(json_2002_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2002_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2002_21.addFeatures(features_2002_21);
var lyr_2002_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2002_21, 
                style: style_2002_21,
                interactive: false,
                title: '<img src="styles/legend/2002_21.png" /> 2002'
            });
var format_2001_22 = new ol.format.GeoJSON();
var features_2001_22 = format_2001_22.readFeatures(json_2001_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2001_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2001_22.addFeatures(features_2001_22);
var lyr_2001_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2001_22, 
                style: style_2001_22,
                interactive: false,
                title: '<img src="styles/legend/2001_22.png" /> 2001'
            });
var format_border_Don_23 = new ol.format.GeoJSON();
var features_border_Don_23 = format_border_Don_23.readFeatures(json_border_Don_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_border_Don_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_border_Don_23.addFeatures(features_border_Don_23);
var lyr_border_Don_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_border_Don_23, 
                style: style_border_Don_23,
                interactive: true,
                title: '<img src="styles/legend/border_Don_23.png" /> Займища'
            });
var group_GABAM = new ol.layer.Group({
                                layers: [lyr_2021_2,lyr_2020_3,lyr_2019_4,lyr_2018_5,lyr_2017_6,lyr_2016_7,lyr_2015_8,lyr_2014_9,lyr_2013_10,lyr_2012_11,lyr_2011_12,lyr_2010_13,lyr_2009_14,lyr_2008_15,lyr_2007_16,lyr_2006_17,lyr_2005_18,lyr_2004_19,lyr_2003_20,lyr_2002_21,lyr_2001_22,],
                                fold: 'close',
                                title: "GABAM"});
var group_ = new ol.layer.Group({
                                layers: [lyr_OSMStandardDark_0,lyr_OSMStandardLight_1,],
                                title: "Базовая карта"});

lyr_OSMStandardDark_0.setVisible(true);lyr_OSMStandardLight_1.setVisible(false);lyr_2021_2.setVisible(true);lyr_2020_3.setVisible(false);lyr_2019_4.setVisible(false);lyr_2018_5.setVisible(false);lyr_2017_6.setVisible(false);lyr_2016_7.setVisible(false);lyr_2015_8.setVisible(false);lyr_2014_9.setVisible(false);lyr_2013_10.setVisible(false);lyr_2012_11.setVisible(false);lyr_2011_12.setVisible(false);lyr_2010_13.setVisible(false);lyr_2009_14.setVisible(false);lyr_2008_15.setVisible(false);lyr_2007_16.setVisible(false);lyr_2006_17.setVisible(false);lyr_2005_18.setVisible(false);lyr_2004_19.setVisible(false);lyr_2003_20.setVisible(false);lyr_2002_21.setVisible(false);lyr_2001_22.setVisible(false);lyr_border_Don_23.setVisible(true);
var layersList = [group_,group_GABAM,lyr_border_Don_23];
lyr_2021_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2020_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2019_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2018_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2017_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2016_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2015_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2014_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2013_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2012_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2011_12.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2010_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2009_14.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2008_15.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2007_16.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2006_17.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2005_18.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2004_19.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2003_20.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2002_21.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_2001_22.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'reg': 'reg', 'area (ha)': 'area (ha)', 'year': 'year', });
lyr_border_Don_23.set('fieldAliases', {'Name': 'Name', 'Area': 'Area', });
lyr_2021_2.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2020_3.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2019_4.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2018_5.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2017_6.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2016_7.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2015_8.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2014_9.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2013_10.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2012_11.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2011_12.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2010_13.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2009_14.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2008_15.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2007_16.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2006_17.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2005_18.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2004_19.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2003_20.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2002_21.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_2001_22.set('fieldImages', {'fid': '', 'DN': '', 'layer': '', 'reg': '', 'area (ha)': '', 'year': '', });
lyr_border_Don_23.set('fieldImages', {'Name': '', 'Area': '', });
lyr_2021_2.set('fieldLabels', {});
lyr_2020_3.set('fieldLabels', {});
lyr_2019_4.set('fieldLabels', {});
lyr_2018_5.set('fieldLabels', {});
lyr_2017_6.set('fieldLabels', {});
lyr_2016_7.set('fieldLabels', {});
lyr_2015_8.set('fieldLabels', {});
lyr_2014_9.set('fieldLabels', {});
lyr_2013_10.set('fieldLabels', {});
lyr_2012_11.set('fieldLabels', {});
lyr_2011_12.set('fieldLabels', {});
lyr_2010_13.set('fieldLabels', {});
lyr_2009_14.set('fieldLabels', {});
lyr_2008_15.set('fieldLabels', {});
lyr_2007_16.set('fieldLabels', {});
lyr_2006_17.set('fieldLabels', {});
lyr_2005_18.set('fieldLabels', {});
lyr_2004_19.set('fieldLabels', {});
lyr_2003_20.set('fieldLabels', {});
lyr_2002_21.set('fieldLabels', {});
lyr_2001_22.set('fieldLabels', {});
lyr_border_Don_23.set('fieldLabels', {'Name': 'inline label', 'Area': 'inline label', });
lyr_border_Don_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});