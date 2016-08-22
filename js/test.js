var basic_choropleth = new Datamap({
  element: document.getElementById('container'),
  scope: 'world', // Currently supports 'usa' and 'world', however with custom map data you can specify your own
  projection: 'mercator', // Style of projection to be used. try "mercator"
  height: null, // If not null, datamaps will grab the height of 'element'
  width: null, // If not null, datamaps will grab the width of 'element',
  responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
  highlightOnHover: true,
  highlightFillColor: '#eeeee',
  done: function() {}, // Callback when the map is done drawing

 geographyConfig: {
   highlightOnHover: true,
   highlightFillColor: 'rgba(0,153,153,1)',
   highlightBorderColor: 'none',
       highlightBorderWidth: 2,
       highlightBorderOpacity: 1,
       highlightFillOpacity: 0.85,

  popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + 'En:' + geography.properties.name + ' ' +
        data.Plagio + ' '
      },
      highlightBorderWidth: 3
  },

fills: {
  'plagio': '#f5bb81',//Submitted to GODI 2015
  defaultFill: '#bababa'
},

data:{
"MEX":{
  "fillKey":"plagio",
  "Plagio":"Enrique Peña Nieto plagió 30% de su tesis"
},

"GTM":{
  "fillKey":"plagio",
  "Plagio":"Manuel Baldizon hizo un libro solo de fragmentos plagiados"
},

"PER":{
  "fillKey":"plagio",
  "Plagio":"César Acuña plagió su tesis Doctoral"
}
}
});
