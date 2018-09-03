'use strict';
var wia = require('wia')('d_sk_RWOEj75KoCQlRzms2nXuOiWl');
var util = require('util')
var nodeimu  = require('nodeimu');
var IMU = new nodeimu.IMU();
var tic = new Date();
var callback = function (error, data) {
 var toc = new Date();
 if (error) {
   console.log(error);
   return;
 }
 // Send temperature data
 wia.events.publish({
   name: "temperature",
   data: data.temperature.toFixed(4) // data received from temperature sensor
 });
 // Send pressure data
 wia.events.publish({
   name: "pressure",
   data: data.pressure.toFixed(4) // data received from pressure sensor
 });
 // Send humidity data
 wia.events.publish({
   name: "humidity",
   data: data.humidity.toFixed(4) // data received from humidity sensor
 });
 setTimeout(function() { tic = new Date(); IMU.getValue(callback); } , 250 - (toc - tic));
}
// Using the MQTT stream
wia.stream.on('connect', function() {
 IMU.getValue(callback);
});
wia.stream.connect();
