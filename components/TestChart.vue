<template>
  <div>
    <client-only>
      <nuxt-plotly
        :data="data"
        :layout="layout"
        :config="config"
        style="width: 100%"
        @on-ready="myChartOnReady"
      ></nuxt-plotly>
    </client-only>
  </div>
</template>

<script setup lang="ts">
  /// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
  import type { NuxtPlotlyConfig, NuxtPlotlyData, NuxtPlotlyLayout, NuxtPlotlyHTMLElement } from 'nuxt-plotly';

  const x = [1, 2, 3, 4, 5];
  const y = [10, 20, 30, 20, 10];
  const data: NuxtPlotlyData = [
    { x: x, y: y, type: 'scatter', mode: 'lines', marker: { size: 20 } },
  ];
  const layout: NuxtPlotlyLayout = {
    title: 'My graph on app.vue with <client-only>',
    dragmode: 'pan',
    yaxis: {
      fixedrange: true
    },
    template: {
      "layout": {
                "geo": {
                    "bgcolor": "rgb(17,17,17)",
                    "showland": true,
                    "lakecolor": "rgb(17,17,17)",
                    "landcolor": "rgb(17,17,17)",
                    "showlakes": true,
                    "subunitcolor": "#506784"
                },
                "font": {
                    "color": "#f2f5fa"
                },
                "polar": {
                    "bgcolor": "rgb(17,17,17)",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "bgcolor": "rgb(17,17,17)"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "rgb(17,17,17)",
                "paper_bgcolor": "rgb(17,17,17)",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#f2f5fa"
                },
                "sliderdefaults": {
                    "bgcolor": "#C8D4E3",
                    "tickwidth": 0,
                    "bordercolor": "rgb(17,17,17)",
                    "borderwidth": 1
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#f2f5fa",
                    "arrowwidth": 1
                },
                "updatemenudefaults": {
                    "bgcolor": "#506784",
                    "borderwidth": 0
                }
            },
      // themeRef: "PLOTLY_DARK"
    }
  };
  var labels = ['coin']
  const config: NuxtPlotlyConfig = { scrollZoom: false, displayModeBar: false };

  function myChartOnReady(plotlyHTMLElement: NuxtPlotlyHTMLElement) {
    const { $plotly } = useNuxtApp();
    console.log({ $plotly });
    console.log({ plotlyHTMLElement });

    plotlyHTMLElement.on?.('plotly_afterplot', function () {
      console.log('done plotting');
    });

    plotlyHTMLElement.on?.('plotly_click', function () {
      alert('You clicked this Plotly chart!');

      // use plotly function via `$plotly` to download chart image
      $plotly.downloadImage(plotlyHTMLElement as HTMLElement, {
        format: 'png',
        width: 800,
        height: 600,
        filename: 'newplot',
      });
    });
  }
</script>