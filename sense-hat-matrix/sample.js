"use strict";
const sense = require("sense-hat-led");

sense.setPixel(0, 7, [244,0,0], (err) => {
  sense.getPixel(0, 7, (err, color) => {
    console.log(color);
  })
});
