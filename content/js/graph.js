/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3027.0, "minX": 0.0, "maxY": 113058.0, "series": [{"data": [[0.0, 3027.0], [0.1, 3027.0], [0.2, 3027.0], [0.3, 3027.0], [0.4, 3027.0], [0.5, 3027.0], [0.6, 3027.0], [0.7, 3027.0], [0.8, 3027.0], [0.9, 3027.0], [1.0, 3027.0], [1.1, 3027.0], [1.2, 3027.0], [1.3, 3027.0], [1.4, 3027.0], [1.5, 3027.0], [1.6, 3027.0], [1.7, 3027.0], [1.8, 3027.0], [1.9, 3027.0], [2.0, 4622.0], [2.1, 4622.0], [2.2, 4622.0], [2.3, 4622.0], [2.4, 4622.0], [2.5, 4622.0], [2.6, 4622.0], [2.7, 4622.0], [2.8, 4622.0], [2.9, 4622.0], [3.0, 4622.0], [3.1, 4622.0], [3.2, 4622.0], [3.3, 4622.0], [3.4, 4622.0], [3.5, 4622.0], [3.6, 4622.0], [3.7, 4622.0], [3.8, 4622.0], [3.9, 4622.0], [4.0, 5530.0], [4.1, 5530.0], [4.2, 5530.0], [4.3, 5530.0], [4.4, 5530.0], [4.5, 5530.0], [4.6, 5530.0], [4.7, 5530.0], [4.8, 5530.0], [4.9, 5530.0], [5.0, 5530.0], [5.1, 5530.0], [5.2, 5530.0], [5.3, 5530.0], [5.4, 5530.0], [5.5, 5530.0], [5.6, 5530.0], [5.7, 5530.0], [5.8, 5530.0], [5.9, 5530.0], [6.0, 8311.0], [6.1, 8311.0], [6.2, 8311.0], [6.3, 8311.0], [6.4, 8311.0], [6.5, 8311.0], [6.6, 8311.0], [6.7, 8311.0], [6.8, 8311.0], [6.9, 8311.0], [7.0, 8311.0], [7.1, 8311.0], [7.2, 8311.0], [7.3, 8311.0], [7.4, 8311.0], [7.5, 8311.0], [7.6, 8311.0], [7.7, 8311.0], [7.8, 8311.0], [7.9, 8311.0], [8.0, 8798.0], [8.1, 8798.0], [8.2, 8798.0], [8.3, 8798.0], [8.4, 8798.0], [8.5, 8798.0], [8.6, 8798.0], [8.7, 8798.0], [8.8, 8798.0], [8.9, 8798.0], [9.0, 8798.0], [9.1, 8798.0], [9.2, 8798.0], [9.3, 8798.0], [9.4, 8798.0], [9.5, 8798.0], [9.6, 8798.0], [9.7, 8798.0], [9.8, 8798.0], [9.9, 8798.0], [10.0, 9536.0], [10.1, 9536.0], [10.2, 9536.0], [10.3, 9536.0], [10.4, 9536.0], [10.5, 9536.0], [10.6, 9536.0], [10.7, 9536.0], [10.8, 9536.0], [10.9, 9536.0], [11.0, 9536.0], [11.1, 9536.0], [11.2, 9536.0], [11.3, 9536.0], [11.4, 9536.0], [11.5, 9536.0], [11.6, 9536.0], [11.7, 9536.0], [11.8, 9536.0], [11.9, 9536.0], [12.0, 9659.0], [12.1, 9659.0], [12.2, 9659.0], [12.3, 9659.0], [12.4, 9659.0], [12.5, 9659.0], [12.6, 9659.0], [12.7, 9659.0], [12.8, 9659.0], [12.9, 9659.0], [13.0, 9659.0], [13.1, 9659.0], [13.2, 9659.0], [13.3, 9659.0], [13.4, 9659.0], [13.5, 9659.0], [13.6, 9659.0], [13.7, 9659.0], [13.8, 9659.0], [13.9, 9659.0], [14.0, 10796.0], [14.1, 10796.0], [14.2, 10796.0], [14.3, 10796.0], [14.4, 10796.0], [14.5, 10796.0], [14.6, 10796.0], [14.7, 10796.0], [14.8, 10796.0], [14.9, 10796.0], [15.0, 10796.0], [15.1, 10796.0], [15.2, 10796.0], [15.3, 10796.0], [15.4, 10796.0], [15.5, 10796.0], [15.6, 10796.0], [15.7, 10796.0], [15.8, 10796.0], [15.9, 10796.0], [16.0, 11044.0], [16.1, 11044.0], [16.2, 11044.0], [16.3, 11044.0], [16.4, 11044.0], [16.5, 11044.0], [16.6, 11044.0], [16.7, 11044.0], [16.8, 11044.0], [16.9, 11044.0], [17.0, 11044.0], [17.1, 11044.0], [17.2, 11044.0], [17.3, 11044.0], [17.4, 11044.0], [17.5, 11044.0], [17.6, 11044.0], [17.7, 11044.0], [17.8, 11044.0], [17.9, 11044.0], [18.0, 12030.0], [18.1, 12030.0], [18.2, 12030.0], [18.3, 12030.0], [18.4, 12030.0], [18.5, 12030.0], [18.6, 12030.0], [18.7, 12030.0], [18.8, 12030.0], [18.9, 12030.0], [19.0, 12030.0], [19.1, 12030.0], [19.2, 12030.0], [19.3, 12030.0], [19.4, 12030.0], [19.5, 12030.0], [19.6, 12030.0], [19.7, 12030.0], [19.8, 12030.0], [19.9, 12030.0], [20.0, 12046.0], [20.1, 12046.0], [20.2, 12046.0], [20.3, 12046.0], [20.4, 12046.0], [20.5, 12046.0], [20.6, 12046.0], [20.7, 12046.0], [20.8, 12046.0], [20.9, 12046.0], [21.0, 12046.0], [21.1, 12046.0], [21.2, 12046.0], [21.3, 12046.0], [21.4, 12046.0], [21.5, 12046.0], [21.6, 12046.0], [21.7, 12046.0], [21.8, 12046.0], [21.9, 12046.0], [22.0, 14621.0], [22.1, 14621.0], [22.2, 14621.0], [22.3, 14621.0], [22.4, 14621.0], [22.5, 14621.0], [22.6, 14621.0], [22.7, 14621.0], [22.8, 14621.0], [22.9, 14621.0], [23.0, 14621.0], [23.1, 14621.0], [23.2, 14621.0], [23.3, 14621.0], [23.4, 14621.0], [23.5, 14621.0], [23.6, 14621.0], [23.7, 14621.0], [23.8, 14621.0], [23.9, 14621.0], [24.0, 16937.0], [24.1, 16937.0], [24.2, 16937.0], [24.3, 16937.0], [24.4, 16937.0], [24.5, 16937.0], [24.6, 16937.0], [24.7, 16937.0], [24.8, 16937.0], [24.9, 16937.0], [25.0, 16937.0], [25.1, 16937.0], [25.2, 16937.0], [25.3, 16937.0], [25.4, 16937.0], [25.5, 16937.0], [25.6, 16937.0], [25.7, 16937.0], [25.8, 16937.0], [25.9, 16937.0], [26.0, 55300.0], [26.1, 55300.0], [26.2, 55300.0], [26.3, 55300.0], [26.4, 55300.0], [26.5, 55300.0], [26.6, 55300.0], [26.7, 55300.0], [26.8, 55300.0], [26.9, 55300.0], [27.0, 55300.0], [27.1, 55300.0], [27.2, 55300.0], [27.3, 55300.0], [27.4, 55300.0], [27.5, 55300.0], [27.6, 55300.0], [27.7, 55300.0], [27.8, 55300.0], [27.9, 55300.0], [28.0, 55728.0], [28.1, 55728.0], [28.2, 55728.0], [28.3, 55728.0], [28.4, 55728.0], [28.5, 55728.0], [28.6, 55728.0], [28.7, 55728.0], [28.8, 55728.0], [28.9, 55728.0], [29.0, 55728.0], [29.1, 55728.0], [29.2, 55728.0], [29.3, 55728.0], [29.4, 55728.0], [29.5, 55728.0], [29.6, 55728.0], [29.7, 55728.0], [29.8, 55728.0], [29.9, 55728.0], [30.0, 55852.0], [30.1, 55852.0], [30.2, 55852.0], [30.3, 55852.0], [30.4, 55852.0], [30.5, 55852.0], [30.6, 55852.0], [30.7, 55852.0], [30.8, 55852.0], [30.9, 55852.0], [31.0, 55852.0], [31.1, 55852.0], [31.2, 55852.0], [31.3, 55852.0], [31.4, 55852.0], [31.5, 55852.0], [31.6, 55852.0], [31.7, 55852.0], [31.8, 55852.0], [31.9, 55852.0], [32.0, 55958.0], [32.1, 55958.0], [32.2, 55958.0], [32.3, 55958.0], [32.4, 55958.0], [32.5, 55958.0], [32.6, 55958.0], [32.7, 55958.0], [32.8, 55958.0], [32.9, 55958.0], [33.0, 55958.0], [33.1, 55958.0], [33.2, 55958.0], [33.3, 55958.0], [33.4, 55958.0], [33.5, 55958.0], [33.6, 55958.0], [33.7, 55958.0], [33.8, 55958.0], [33.9, 55958.0], [34.0, 57172.0], [34.1, 57172.0], [34.2, 57172.0], [34.3, 57172.0], [34.4, 57172.0], [34.5, 57172.0], [34.6, 57172.0], [34.7, 57172.0], [34.8, 57172.0], [34.9, 57172.0], [35.0, 57172.0], [35.1, 57172.0], [35.2, 57172.0], [35.3, 57172.0], [35.4, 57172.0], [35.5, 57172.0], [35.6, 57172.0], [35.7, 57172.0], [35.8, 57172.0], [35.9, 57172.0], [36.0, 58016.0], [36.1, 58016.0], [36.2, 58016.0], [36.3, 58016.0], [36.4, 58016.0], [36.5, 58016.0], [36.6, 58016.0], [36.7, 58016.0], [36.8, 58016.0], [36.9, 58016.0], [37.0, 58016.0], [37.1, 58016.0], [37.2, 58016.0], [37.3, 58016.0], [37.4, 58016.0], [37.5, 58016.0], [37.6, 58016.0], [37.7, 58016.0], [37.8, 58016.0], [37.9, 58016.0], [38.0, 58061.0], [38.1, 58061.0], [38.2, 58061.0], [38.3, 58061.0], [38.4, 58061.0], [38.5, 58061.0], [38.6, 58061.0], [38.7, 58061.0], [38.8, 58061.0], [38.9, 58061.0], [39.0, 58061.0], [39.1, 58061.0], [39.2, 58061.0], [39.3, 58061.0], [39.4, 58061.0], [39.5, 58061.0], [39.6, 58061.0], [39.7, 58061.0], [39.8, 58061.0], [39.9, 58061.0], [40.0, 59372.0], [40.1, 59372.0], [40.2, 59372.0], [40.3, 59372.0], [40.4, 59372.0], [40.5, 59372.0], [40.6, 59372.0], [40.7, 59372.0], [40.8, 59372.0], [40.9, 59372.0], [41.0, 59372.0], [41.1, 59372.0], [41.2, 59372.0], [41.3, 59372.0], [41.4, 59372.0], [41.5, 59372.0], [41.6, 59372.0], [41.7, 59372.0], [41.8, 59372.0], [41.9, 59372.0], [42.0, 61384.0], [42.1, 61384.0], [42.2, 61384.0], [42.3, 61384.0], [42.4, 61384.0], [42.5, 61384.0], [42.6, 61384.0], [42.7, 61384.0], [42.8, 61384.0], [42.9, 61384.0], [43.0, 61384.0], [43.1, 61384.0], [43.2, 61384.0], [43.3, 61384.0], [43.4, 61384.0], [43.5, 61384.0], [43.6, 61384.0], [43.7, 61384.0], [43.8, 61384.0], [43.9, 61384.0], [44.0, 61940.0], [44.1, 61940.0], [44.2, 61940.0], [44.3, 61940.0], [44.4, 61940.0], [44.5, 61940.0], [44.6, 61940.0], [44.7, 61940.0], [44.8, 61940.0], [44.9, 61940.0], [45.0, 61940.0], [45.1, 61940.0], [45.2, 61940.0], [45.3, 61940.0], [45.4, 61940.0], [45.5, 61940.0], [45.6, 61940.0], [45.7, 61940.0], [45.8, 61940.0], [45.9, 61940.0], [46.0, 62893.0], [46.1, 62893.0], [46.2, 62893.0], [46.3, 62893.0], [46.4, 62893.0], [46.5, 62893.0], [46.6, 62893.0], [46.7, 62893.0], [46.8, 62893.0], [46.9, 62893.0], [47.0, 62893.0], [47.1, 62893.0], [47.2, 62893.0], [47.3, 62893.0], [47.4, 62893.0], [47.5, 62893.0], [47.6, 62893.0], [47.7, 62893.0], [47.8, 62893.0], [47.9, 62893.0], [48.0, 63054.0], [48.1, 63054.0], [48.2, 63054.0], [48.3, 63054.0], [48.4, 63054.0], [48.5, 63054.0], [48.6, 63054.0], [48.7, 63054.0], [48.8, 63054.0], [48.9, 63054.0], [49.0, 63054.0], [49.1, 63054.0], [49.2, 63054.0], [49.3, 63054.0], [49.4, 63054.0], [49.5, 63054.0], [49.6, 63054.0], [49.7, 63054.0], [49.8, 63054.0], [49.9, 63054.0], [50.0, 66044.0], [50.1, 66044.0], [50.2, 66044.0], [50.3, 66044.0], [50.4, 66044.0], [50.5, 66044.0], [50.6, 66044.0], [50.7, 66044.0], [50.8, 66044.0], [50.9, 66044.0], [51.0, 66044.0], [51.1, 66044.0], [51.2, 66044.0], [51.3, 66044.0], [51.4, 66044.0], [51.5, 66044.0], [51.6, 66044.0], [51.7, 66044.0], [51.8, 66044.0], [51.9, 66044.0], [52.0, 67014.0], [52.1, 67014.0], [52.2, 67014.0], [52.3, 67014.0], [52.4, 67014.0], [52.5, 67014.0], [52.6, 67014.0], [52.7, 67014.0], [52.8, 67014.0], [52.9, 67014.0], [53.0, 67014.0], [53.1, 67014.0], [53.2, 67014.0], [53.3, 67014.0], [53.4, 67014.0], [53.5, 67014.0], [53.6, 67014.0], [53.7, 67014.0], [53.8, 67014.0], [53.9, 67014.0], [54.0, 68355.0], [54.1, 68355.0], [54.2, 68355.0], [54.3, 68355.0], [54.4, 68355.0], [54.5, 68355.0], [54.6, 68355.0], [54.7, 68355.0], [54.8, 68355.0], [54.9, 68355.0], [55.0, 68355.0], [55.1, 68355.0], [55.2, 68355.0], [55.3, 68355.0], [55.4, 68355.0], [55.5, 68355.0], [55.6, 68355.0], [55.7, 68355.0], [55.8, 68355.0], [55.9, 68355.0], [56.0, 68425.0], [56.1, 68425.0], [56.2, 68425.0], [56.3, 68425.0], [56.4, 68425.0], [56.5, 68425.0], [56.6, 68425.0], [56.7, 68425.0], [56.8, 68425.0], [56.9, 68425.0], [57.0, 68425.0], [57.1, 68425.0], [57.2, 68425.0], [57.3, 68425.0], [57.4, 68425.0], [57.5, 68425.0], [57.6, 68425.0], [57.7, 68425.0], [57.8, 68425.0], [57.9, 68425.0], [58.0, 69264.0], [58.1, 69264.0], [58.2, 69264.0], [58.3, 69264.0], [58.4, 69264.0], [58.5, 69264.0], [58.6, 69264.0], [58.7, 69264.0], [58.8, 69264.0], [58.9, 69264.0], [59.0, 69264.0], [59.1, 69264.0], [59.2, 69264.0], [59.3, 69264.0], [59.4, 69264.0], [59.5, 69264.0], [59.6, 69264.0], [59.7, 69264.0], [59.8, 69264.0], [59.9, 69264.0], [60.0, 69319.0], [60.1, 69319.0], [60.2, 69319.0], [60.3, 69319.0], [60.4, 69319.0], [60.5, 69319.0], [60.6, 69319.0], [60.7, 69319.0], [60.8, 69319.0], [60.9, 69319.0], [61.0, 69319.0], [61.1, 69319.0], [61.2, 69319.0], [61.3, 69319.0], [61.4, 69319.0], [61.5, 69319.0], [61.6, 69319.0], [61.7, 69319.0], [61.8, 69319.0], [61.9, 69319.0], [62.0, 69579.0], [62.1, 69579.0], [62.2, 69579.0], [62.3, 69579.0], [62.4, 69579.0], [62.5, 69579.0], [62.6, 69579.0], [62.7, 69579.0], [62.8, 69579.0], [62.9, 69579.0], [63.0, 69579.0], [63.1, 69579.0], [63.2, 69579.0], [63.3, 69579.0], [63.4, 69579.0], [63.5, 69579.0], [63.6, 69579.0], [63.7, 69579.0], [63.8, 69579.0], [63.9, 69579.0], [64.0, 69794.0], [64.1, 69794.0], [64.2, 69794.0], [64.3, 69794.0], [64.4, 69794.0], [64.5, 69794.0], [64.6, 69794.0], [64.7, 69794.0], [64.8, 69794.0], [64.9, 69794.0], [65.0, 69794.0], [65.1, 69794.0], [65.2, 69794.0], [65.3, 69794.0], [65.4, 69794.0], [65.5, 69794.0], [65.6, 69794.0], [65.7, 69794.0], [65.8, 69794.0], [65.9, 69794.0], [66.0, 70410.0], [66.1, 70410.0], [66.2, 70410.0], [66.3, 70410.0], [66.4, 70410.0], [66.5, 70410.0], [66.6, 70410.0], [66.7, 70410.0], [66.8, 70410.0], [66.9, 70410.0], [67.0, 70410.0], [67.1, 70410.0], [67.2, 70410.0], [67.3, 70410.0], [67.4, 70410.0], [67.5, 70410.0], [67.6, 70410.0], [67.7, 70410.0], [67.8, 70410.0], [67.9, 70410.0], [68.0, 70438.0], [68.1, 70438.0], [68.2, 70438.0], [68.3, 70438.0], [68.4, 70438.0], [68.5, 70438.0], [68.6, 70438.0], [68.7, 70438.0], [68.8, 70438.0], [68.9, 70438.0], [69.0, 70438.0], [69.1, 70438.0], [69.2, 70438.0], [69.3, 70438.0], [69.4, 70438.0], [69.5, 70438.0], [69.6, 70438.0], [69.7, 70438.0], [69.8, 70438.0], [69.9, 70438.0], [70.0, 70863.0], [70.1, 70863.0], [70.2, 70863.0], [70.3, 70863.0], [70.4, 70863.0], [70.5, 70863.0], [70.6, 70863.0], [70.7, 70863.0], [70.8, 70863.0], [70.9, 70863.0], [71.0, 70863.0], [71.1, 70863.0], [71.2, 70863.0], [71.3, 70863.0], [71.4, 70863.0], [71.5, 70863.0], [71.6, 70863.0], [71.7, 70863.0], [71.8, 70863.0], [71.9, 70863.0], [72.0, 71112.0], [72.1, 71112.0], [72.2, 71112.0], [72.3, 71112.0], [72.4, 71112.0], [72.5, 71112.0], [72.6, 71112.0], [72.7, 71112.0], [72.8, 71112.0], [72.9, 71112.0], [73.0, 71112.0], [73.1, 71112.0], [73.2, 71112.0], [73.3, 71112.0], [73.4, 71112.0], [73.5, 71112.0], [73.6, 71112.0], [73.7, 71112.0], [73.8, 71112.0], [73.9, 71112.0], [74.0, 71241.0], [74.1, 71241.0], [74.2, 71241.0], [74.3, 71241.0], [74.4, 71241.0], [74.5, 71241.0], [74.6, 71241.0], [74.7, 71241.0], [74.8, 71241.0], [74.9, 71241.0], [75.0, 71241.0], [75.1, 71241.0], [75.2, 71241.0], [75.3, 71241.0], [75.4, 71241.0], [75.5, 71241.0], [75.6, 71241.0], [75.7, 71241.0], [75.8, 71241.0], [75.9, 71241.0], [76.0, 71987.0], [76.1, 71987.0], [76.2, 71987.0], [76.3, 71987.0], [76.4, 71987.0], [76.5, 71987.0], [76.6, 71987.0], [76.7, 71987.0], [76.8, 71987.0], [76.9, 71987.0], [77.0, 71987.0], [77.1, 71987.0], [77.2, 71987.0], [77.3, 71987.0], [77.4, 71987.0], [77.5, 71987.0], [77.6, 71987.0], [77.7, 71987.0], [77.8, 71987.0], [77.9, 71987.0], [78.0, 72019.0], [78.1, 72019.0], [78.2, 72019.0], [78.3, 72019.0], [78.4, 72019.0], [78.5, 72019.0], [78.6, 72019.0], [78.7, 72019.0], [78.8, 72019.0], [78.9, 72019.0], [79.0, 72019.0], [79.1, 72019.0], [79.2, 72019.0], [79.3, 72019.0], [79.4, 72019.0], [79.5, 72019.0], [79.6, 72019.0], [79.7, 72019.0], [79.8, 72019.0], [79.9, 72019.0], [80.0, 72110.0], [80.1, 72110.0], [80.2, 72110.0], [80.3, 72110.0], [80.4, 72110.0], [80.5, 72110.0], [80.6, 72110.0], [80.7, 72110.0], [80.8, 72110.0], [80.9, 72110.0], [81.0, 72110.0], [81.1, 72110.0], [81.2, 72110.0], [81.3, 72110.0], [81.4, 72110.0], [81.5, 72110.0], [81.6, 72110.0], [81.7, 72110.0], [81.8, 72110.0], [81.9, 72110.0], [82.0, 72611.0], [82.1, 72611.0], [82.2, 72611.0], [82.3, 72611.0], [82.4, 72611.0], [82.5, 72611.0], [82.6, 72611.0], [82.7, 72611.0], [82.8, 72611.0], [82.9, 72611.0], [83.0, 72611.0], [83.1, 72611.0], [83.2, 72611.0], [83.3, 72611.0], [83.4, 72611.0], [83.5, 72611.0], [83.6, 72611.0], [83.7, 72611.0], [83.8, 72611.0], [83.9, 72611.0], [84.0, 73733.0], [84.1, 73733.0], [84.2, 73733.0], [84.3, 73733.0], [84.4, 73733.0], [84.5, 73733.0], [84.6, 73733.0], [84.7, 73733.0], [84.8, 73733.0], [84.9, 73733.0], [85.0, 73733.0], [85.1, 73733.0], [85.2, 73733.0], [85.3, 73733.0], [85.4, 73733.0], [85.5, 73733.0], [85.6, 73733.0], [85.7, 73733.0], [85.8, 73733.0], [85.9, 73733.0], [86.0, 73962.0], [86.1, 73962.0], [86.2, 73962.0], [86.3, 73962.0], [86.4, 73962.0], [86.5, 73962.0], [86.6, 73962.0], [86.7, 73962.0], [86.8, 73962.0], [86.9, 73962.0], [87.0, 73962.0], [87.1, 73962.0], [87.2, 73962.0], [87.3, 73962.0], [87.4, 73962.0], [87.5, 73962.0], [87.6, 73962.0], [87.7, 73962.0], [87.8, 73962.0], [87.9, 73962.0], [88.0, 74121.0], [88.1, 74121.0], [88.2, 74121.0], [88.3, 74121.0], [88.4, 74121.0], [88.5, 74121.0], [88.6, 74121.0], [88.7, 74121.0], [88.8, 74121.0], [88.9, 74121.0], [89.0, 74121.0], [89.1, 74121.0], [89.2, 74121.0], [89.3, 74121.0], [89.4, 74121.0], [89.5, 74121.0], [89.6, 74121.0], [89.7, 74121.0], [89.8, 74121.0], [89.9, 74121.0], [90.0, 78098.0], [90.1, 78098.0], [90.2, 78098.0], [90.3, 78098.0], [90.4, 78098.0], [90.5, 78098.0], [90.6, 78098.0], [90.7, 78098.0], [90.8, 78098.0], [90.9, 78098.0], [91.0, 78098.0], [91.1, 78098.0], [91.2, 78098.0], [91.3, 78098.0], [91.4, 78098.0], [91.5, 78098.0], [91.6, 78098.0], [91.7, 78098.0], [91.8, 78098.0], [91.9, 78098.0], [92.0, 81528.0], [92.1, 81528.0], [92.2, 81528.0], [92.3, 81528.0], [92.4, 81528.0], [92.5, 81528.0], [92.6, 81528.0], [92.7, 81528.0], [92.8, 81528.0], [92.9, 81528.0], [93.0, 81528.0], [93.1, 81528.0], [93.2, 81528.0], [93.3, 81528.0], [93.4, 81528.0], [93.5, 81528.0], [93.6, 81528.0], [93.7, 81528.0], [93.8, 81528.0], [93.9, 81528.0], [94.0, 81704.0], [94.1, 81704.0], [94.2, 81704.0], [94.3, 81704.0], [94.4, 81704.0], [94.5, 81704.0], [94.6, 81704.0], [94.7, 81704.0], [94.8, 81704.0], [94.9, 81704.0], [95.0, 81704.0], [95.1, 81704.0], [95.2, 81704.0], [95.3, 81704.0], [95.4, 81704.0], [95.5, 81704.0], [95.6, 81704.0], [95.7, 81704.0], [95.8, 81704.0], [95.9, 81704.0], [96.0, 98094.0], [96.1, 98094.0], [96.2, 98094.0], [96.3, 98094.0], [96.4, 98094.0], [96.5, 98094.0], [96.6, 98094.0], [96.7, 98094.0], [96.8, 98094.0], [96.9, 98094.0], [97.0, 98094.0], [97.1, 98094.0], [97.2, 98094.0], [97.3, 98094.0], [97.4, 98094.0], [97.5, 98094.0], [97.6, 98094.0], [97.7, 98094.0], [97.8, 98094.0], [97.9, 98094.0], [98.0, 113058.0], [98.1, 113058.0], [98.2, 113058.0], [98.3, 113058.0], [98.4, 113058.0], [98.5, 113058.0], [98.6, 113058.0], [98.7, 113058.0], [98.8, 113058.0], [98.9, 113058.0], [99.0, 113058.0], [99.1, 113058.0], [99.2, 113058.0], [99.3, 113058.0], [99.4, 113058.0], [99.5, 113058.0], [99.6, 113058.0], [99.7, 113058.0], [99.8, 113058.0], [99.9, 113058.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 3000.0, "maxY": 2.0, "series": [{"data": [[8700.0, 1.0], [8300.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [10700.0, 1.0], [11000.0, 1.0], [12000.0, 2.0], [14600.0, 1.0], [16900.0, 1.0], [3000.0, 1.0], [57100.0, 1.0], [55700.0, 1.0], [55800.0, 1.0], [55300.0, 1.0], [55900.0, 1.0], [58000.0, 2.0], [59300.0, 1.0], [61300.0, 1.0], [61900.0, 1.0], [63000.0, 1.0], [62800.0, 1.0], [69300.0, 1.0], [66000.0, 1.0], [68400.0, 1.0], [67000.0, 1.0], [68300.0, 1.0], [69500.0, 1.0], [69200.0, 1.0], [69700.0, 1.0], [4600.0, 1.0], [70400.0, 2.0], [73700.0, 1.0], [71200.0, 1.0], [72600.0, 1.0], [72100.0, 1.0], [70800.0, 1.0], [71900.0, 1.0], [72000.0, 1.0], [71100.0, 1.0], [73900.0, 1.0], [74100.0, 1.0], [78000.0, 1.0], [81500.0, 1.0], [81700.0, 1.0], [5500.0, 1.0], [98000.0, 1.0], [113000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 113000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 49.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 49.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.69954446E12, "maxY": 43.23076923076923, "series": [{"data": [[1.69954452E12, 19.5], [1.69954446E12, 43.23076923076923], [1.69954458E12, 1.0]], "isOverall": false, "label": "Daraz Load Testing", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69954458E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4622.0, "minX": 1.0, "maxY": 113058.0, "series": [{"data": [[2.0, 98094.0], [3.0, 81704.0], [4.0, 81528.0], [5.0, 78098.0], [6.0, 73733.0], [7.0, 74121.0], [8.0, 72019.0], [9.0, 71112.0], [10.0, 73962.0], [11.0, 70410.0], [12.0, 71987.0], [13.0, 70863.0], [14.0, 72110.0], [15.0, 72611.0], [16.0, 69264.0], [17.0, 69579.0], [18.0, 71241.0], [19.0, 68355.0], [20.0, 67014.0], [21.0, 70438.0], [22.0, 69794.0], [23.0, 68425.0], [24.0, 66044.0], [25.0, 69319.0], [26.0, 62893.0], [27.0, 61384.0], [28.0, 63054.0], [29.0, 61940.0], [30.0, 59372.0], [31.0, 58016.0], [33.0, 55300.0], [32.0, 55958.0], [35.0, 55852.0], [34.0, 58061.0], [37.0, 57172.0], [36.0, 55728.0], [39.0, 14621.0], [38.0, 16937.0], [40.0, 7528.5], [41.0, 10796.0], [43.0, 8311.0], [42.0, 12046.0], [45.0, 11044.0], [44.0, 8798.0], [47.0, 9536.0], [46.0, 9659.0], [49.0, 4622.0], [48.0, 5530.0], [1.0, 113058.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[25.29999999999999, 53931.40000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1.9666666666666666, "minX": 1.69954446E12, "maxY": 679570.5333333333, "series": [{"data": [[1.69954452E12, 679570.5333333333], [1.69954446E12, 22405.083333333332], [1.69954458E12, 1724.0833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69954452E12, 68.83333333333333], [1.69954446E12, 25.566666666666666], [1.69954458E12, 1.9666666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69954458E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9765.923076923078, "minX": 1.69954446E12, "maxY": 113058.0, "series": [{"data": [[1.69954452E12, 68237.63888888889], [1.69954446E12, 9765.923076923078], [1.69954458E12, 113058.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69954458E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 541.0, "minX": 1.69954446E12, "maxY": 1972.3076923076924, "series": [{"data": [[1.69954452E12, 1431.3611111111109], [1.69954446E12, 1972.3076923076924], [1.69954458E12, 541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69954458E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 400.0, "minX": 1.69954446E12, "maxY": 1781.4615384615386, "series": [{"data": [[1.69954452E12, 1253.9166666666667], [1.69954446E12, 1781.4615384615386], [1.69954458E12, 400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69954458E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3027.0, "minX": 1.69954446E12, "maxY": 113058.0, "series": [{"data": [[1.69954452E12, 81704.0], [1.69954446E12, 16937.0], [1.69954458E12, 113058.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69954452E12, 75711.79999999999], [1.69954446E12, 16010.599999999999], [1.69954458E12, 113058.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69954452E12, 81704.0], [1.69954446E12, 16937.0], [1.69954458E12, 113058.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69954452E12, 81563.2], [1.69954446E12, 16937.0], [1.69954458E12, 113058.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69954452E12, 55300.0], [1.69954446E12, 3027.0], [1.69954458E12, 113058.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69954452E12, 69319.0], [1.69954446E12, 9659.0], [1.69954458E12, 113058.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69954458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 35289.5, "minX": 1.0, "maxY": 98094.0, "series": [{"data": [[1.0, 62416.5], [2.0, 35289.5], [4.0, 62052.5], [3.0, 69579.0], [6.0, 72048.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 98094.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 854.0, "minX": 1.0, "maxY": 1994.0, "series": [{"data": [[1.0, 1540.0], [2.0, 854.0], [4.0, 1458.5], [3.0, 1994.0], [6.0, 1065.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 944.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.69954446E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.69954446E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69954446E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69954446E12, "maxY": 0.5833333333333334, "series": [{"data": [[1.69954452E12, 0.5833333333333334], [1.69954446E12, 0.21666666666666667], [1.69954458E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.69954452E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.TruncatedChunkException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69954458E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69954446E12, "maxY": 0.5833333333333334, "series": [{"data": [[1.69954452E12, 0.5833333333333334], [1.69954446E12, 0.21666666666666667], [1.69954458E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.69954452E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69954458E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69954446E12, "maxY": 0.5833333333333334, "series": [{"data": [[1.69954452E12, 0.5833333333333334], [1.69954446E12, 0.21666666666666667], [1.69954458E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.69954452E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69954458E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

