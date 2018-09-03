var sense = require("sense-hat-led");
var scrollSpeed = 0.1;

sense.showMessage("One small step for Pi!", scrollSpeed, [0, 0, 255], done);

function done(){
  console.log("finished message")
}
