<template>
    <div id="chart-container">
      <fusioncharts
        	:type="type"
          :dataformat="dataFormat"
        	:datasource="dataSource"
        	:width="width"
        	:height="height"
          :events="events"
          ref="fusioncharts"
        >
        </fusioncharts>
  </div>
</template>

<script>
import app from '~/createApp'

import VueFusionChartsComponent from 'vue-fusioncharts/component';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts);
app.component('fusioncharts', vueFusionCharts);

export default {
  name: 'Chart',
  data() {
    return {
      type: "column2d",
      renderAt: "chart-container",
      width: "550",
      height: "350",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subcaption: "In MMbbl = One Million barrels",
          xaxisname: "Country",
          yaxisname: "Reserves (MMbbl)",
          numbersuffix: "K",
          theme: "fusion"
        },
        data: [
            {
              label: "Venezuela",
              value: "290"
            },
            {
              label: "Saudi",
              value: "260"
            },
            {
              label: "Canada",
              value: "180"
            },
            {
              label: "Iran",
              value: "140"
            },
            {
              label: "Russia",
              value: "115"
            },
            {
              label: "UAE",
              value: "100"
            },
            {
              label: "US",
              value: "30"
            },
            {
              label: "China",
              value: "30"
            }
          ]
      },
      events: {
        beforeRender(evt, args) {
          var chartRef = evt.sender;


        },
        renderComplete(evt, args) {
          var chartRef = evt.sender,
                    bgColorBtn = document.getElementById('bgColorBtn'),
                    captionAlignBtn = document.getElementById('captionAlignBtn'),
                    resetAttrBtn = document.getElementById('resetAttrBtn');

                    var children = Array.from(document.querySelector('#chartobject-1 svg#raphael-paper-2').children);
                    children = document.querySelector('#chartobject-1 svg#raphael-paper-2').childNodes
                    console.log(children);
        },
      }
    }
  }
}
</script>
<style scoped>
#chartobject-1 svg#raphael-paper-2 g:nth-child(1) {
  background: red;
}
</style>
