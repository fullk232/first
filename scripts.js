$(document).ready(function(){
zingchart.THEME = "classic";
var myConfig = {
  "globals": {
    "font-family": "helvetica",

  },
  "type": "line",
  "background-color": "#FAFAFA",
  "plotarea": {
    "margin": "11% 10% 11% 10%"
  },
  "title": {
    "text": "UFO Sightings by Decade",
    "font-size": "16px",
    "font-color": "black",
    "font-weight": "normal",
    "background-color": "#FAFAFA",
    "text-align": "center"
  },
  "legend": {
    "layout": "float",
    "align": "center",
    "vertical-align": "bottom",
    "alpha": 0.25,
    "shadow": "false",
    "border": "none",
    "item": {
      "font-size": "11px",
      "font-color": "black"

    }
  },
  "scale-x": {
    "labels": [
      "1900s",
      "1910s",
      "1920s",
      "1930s",
      "1940s",
      "1950s",
      "1960s",
      "1970s",
      "1980s",
      "1990s",
      "2000s",
      "2010s"
    ],
    "line-color": "#000000",
    "line-style": "solid",
    "line-width": "1px",
    "guide": {
      "line-color": "#000000",
      "line-width": "1px",
      "alpha": 0.2,
      "line-style": "dotted"
    },
    "tick": {
      "line-width": "1px",
      "line-color": "#000000"
    },

    "minor-guide": {
      "visible": false
    },
    "item": {
      "font-size": "11px",
      "font-color": "#000000",
      "font-family": "helvetica"
    }
  },
  "scale-y": {
    "values": "0:43000:100",
    "line-width": "1px",
    "line-color": "#808080",
    "line-style": "solid",
    "multiplier": false,
    "guide": {
      "visible": true,
      "line-color": "#000000",
      "line-width": "1px",
      "line-style": "dotted"
    },
    "tick": {
      "line-width": "1px",
      "line-color": "#000000"
    },
    "item": {
      "font-size": "10px",
      "font-color": "#000000"
    },
    "minor-guide": {
      "visible": false
    },
  },
  "crosshair-x": {
    "value-label": {
      "font-size": "10px",
      "font-color": "#FFA3E2",
      "background-color": "#ffffff",
      "text": "%t<br>%v",
      "decimals": 0,
      "border-radius": "10px",
      "thousands-separator": ",",
      "text-align": "center"
    },
    "scale-label": {
      "visible": false
    }
  },
  "tooltip": {
    "visible": false
  },
  "plot": {
    "shadow": true,
    "marker": {
                "type": "circle",
                "size": 4
            },
            "hover-marker": {
                "type": "circle",
                "size": 5,
                "border-width": "0"
            }
  },
  "series": [{
    "values": [
      2,
      6,
      5,
      19,
      138,
      547,
      1543,
      2722,
      2382,
      9241,
      42616,
      40774
    ],
    "text": "Number of UFO Sightings",
                "line-color": "#BEFA21",
                shadow: false,
                "legend-marker": {
                    "type": "circle",
                    "size": 5,
                    "background-color": "#3B82FB",
                    "border-width": 0,
                    "shadow": "none",
                    "border-color": "#35777D",
                    shadow: false

                },
                "marker": {
                    "background-color": "#3B82FB",
                    "border-width": 0,
                    "shadow": "none",
                    "border-color": "#35777D",
                    shadow: false
                }
  }, ]
};
var chartDiv2 = {
  "background-color": "#FAFAFA",
   "title": {
     "text": "UFO Sightings by State",
     "background-color": "#FAFAFA",
     "color": "#000000",
     "font-size": "16px",
     "font-family": "helvetica",
     "text-align": "center",
     "font-color": "black",
     "font-weight": "normal"
   },
   "shapes": [{
     "type": "zingchart.maps",
     "options": {
       "id": "map",
       "name": "usa",
       "scale": true,
       "x": "17%",
       "y": "13%",
       "width": "86%",
       "height": "86%",
       "style": {
         "background-color": "#ebebeb",
         "label": {
           "visible": 0
         },
         "tooltip": {
           "border-radius": "10px"
         }
       }
     }
   },

   {"type": "circle",
     "id": "< 1000",
     "size": 10,
     "x": "7%",
     "y": "27%",
     "border-width": "0px",
     "border-color": "#97ED8A",
     "background-color": "#BEFA21",
     "label": {
       "text": "< 1000",
       "offset-x": 30,
       "font-family": "helvetica",
       "font-color": "#000000"
     }
   }, {
     "type": "circle",
     "id": "1000-2000",
     "size": 10,
     "x": "7%",
     "y": "37%",
     "background-color": "#3B82FB",
     "border-width": "0px",
     "border-color": "#45BF55",
     "label": {
       "text": "1000-2000",
       "offset-x": 39,
       "font-family": "helvetica",
       "font-color": "#000000"
     }
   }, {
     "type": "circle",
     "id": "2000-4000",
     "size": 10,
     "x": "7%",
     "y": "47%",
     "background-color": "#FFA3E2",
     "border-width": "0px",
     "border-color": "#167F39",
     "label": {
       "text": "2000-4000",
       "offset-x": 39,
       "font-family": "helvetica",
       "font-color": "#000000"
     }
   }, {
     "type": "circle",
     "id": ">4000",
     "size": 10,
     "x": "7%",
     "y": "57%",
     "background-color": "#A360FB",
     "border-width": "0px",
     "border-color": "#044C29",
     "label": {
       "text": "> 4000",
       "offset-x": 30,
       "font-family": "helvetica",
       "font-color": "#000000"
     }
   }]
 };
 // Keep track of last shape clicked
     var lastClick = null;

     // Population data for updating the chart
     var population = {
       "< 1000": {
         "states": ['ND', 'DE', 'SD', 'WY', 'RI', 'VT', 'NE', 'MS', 'WV', 'MT', 'NH', 'ID', 'ME', 'LA', 'KS', 'AR', 'IA', 'AL', 'UT', 'OK', 'AK', 'HI'],
         "bgColor": "#BEFA21"
       },
       "1000-2000": {
         "states": ['NM', 'KY', 'NV', 'MD', 'CT', 'MN', 'SC', 'TN', 'WI', 'IN', 'GA', 'MA', 'VA', 'NJ', 'MO', 'CO'],
         "bgColor": "#3B82FB"
       },
       "2000-4000": {
         "states": ['OR', 'NC', 'MI', 'OH', 'IL', 'PA', 'AZ'],
         "bgColor": "#FFA3E2"
       },
       ">4000": {
         "states": ['NY', 'TX', 'WA', 'FL', 'CA'],
         "bgColor": "#A360FB"
       }
     };

     // Returns the styled items object
     function createItems(year) {
       var data = population[year];
       var items = {};
       data.states.forEach(function(state) {
         var stateItem = {
           "background-color": data.bgColor,
           "border-color": "#ffffff",
           "border-width": 1,
           "label": {
             "visible": 0
           },
           "hover-state": {
             "visible": false
           },
           "tooltip": {
             "border-radius": "10px"
           }
         }
         items[state] = stateItem;
       });
       return items;
     }

     // Deep copy a Javascript object
     function copy(obj) {
       return JSON.parse(JSON.stringify(obj));
     }

     // Bind the shapeclick
     zingchart.shape_click = function(p) {
       var year = p.shapeid;
       if (Object.keys(population).indexOf(year) < 0) {
         return;
       }
       if (lastClick == year) {
         lastClick = null;
         zingchart.exec('chartDiv2', 'setdata', {
           data: chartDiv2
         });
       } else {
         lastClick = year;
         var newData = copy(chartDiv2);
         newData.shapes[0].options.style.items = createItems(year);
         zingchart.exec('chartDiv2', 'setdata', {
           data: newData
         });
       }
     }
     var colors = {
    blue : "rgba(151,187,205,1)",
    gray : "#EBEBEB",
    grayDark : "#3F3F3F"
};


function randomVal(min, max, num){
    var aData = [];
    for(var i = 0 ; i < num; i++){
        var val = ((Math.random() * (max-min)) + min);
        aData.push(parseInt(val));
    }
    return aData;
}

var chartDiv3 = {
    type : 'bar',
    backgroundColor : "#FFF",
    plot : {
        lineColor : "rgba(151,187,205,1)",
        lineWidth : "2px",
        backgroundColor2 : "rgba(151,187,205,1)",
        marker : {
            backgroundColor : "rgba(151,187,205,1)",
            borderColor : "white",
            shadow : false
        }
    },
    plotarea : {
        backgroundColor : "white"
    },
    scaleX : {
      lineColor : colors.gray,
      lineWidth : "1px",
      tick : {
          lineColor : "#C7C7C7",
          lineWidth : "1px"
      },
      guide :{
          lineStyle : 'solid',
          lineColor : colors.gray,
          alpha : 1
      },
      item : {
          color: colors.grayDark
      }
    },
    scaleY : {
      lineColor : colors.gray,
      lineWidth : "1px",
      tick : {
          lineColor : "#C7C7C7",
          lineWidth : "1px"
      },
        guide :{
          lineStyle : 'solid',
          lineColor : colors.gray,
          alpha : 1
      },
      item : {
          color: colors.grayDark
      }
    },
    series : [
        {
            values : randomVal(22,42,8),
            lineColor : "rgba(220,220,220,1)",
            lineWidth : "2px",
            alpha : 0.5,
            borderWidth : "2px",
            borderColor : "#C7C7C7",
            borderTop : "2px solid #C7C7C7",
            borderBottom : "0px",
            backgroundColor1 : "rgba(220,220,220,1)",
            backgroundColor2 : "rgba(220,220,220,1)",
            marker : {
                backgroundColor : "rgba(220,220,220,1)",
            }

        },
        {
            alpha : 0.5,
            values : randomVal(7,32,8),
            backgroundColor1 : colors.blue,
            backgroundColor2 : colors.blue,
            borderWidth : "2px",
            borderColor : colors.blue,
            borderTop : "2px solid " + colors.blue,
            borderBottom : "0px"
        }
    ]
}



window.onload=function(){
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: 400,
  width: 550
});
zingchart.render({
     id:'chartDiv2',
     data:chartDiv2,
     height:300,
     width:550
   });
   };
   zingchart.render({
    id : 'chartDiv3',
    data : chartDiv3,
    hideprogresslogo : true,
    height : 500,
    width: 725
})
});
