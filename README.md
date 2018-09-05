## 1. How to build your own weather station using a Raspberry Pi
https://community.wia.io/d/40-how-to-build-your-own-weather-station-using-a-raspberry-pi
Directory: wia-wether-device

Using WIA.io IoT platform: register a device, get the secret key and inject into 'index.js'
Then run:
```
npm install
node index.js
```

## 2. sense-hat-matrix
https://github.com/aonghusonia/sense-hat-led

Coloring a pixel (sample.js):
```
npm install
npm start
```

Testing the matrix (test.js):
```
npm test
```

A text message:
```
node message.js
```

# 3. Usage inside Node-RED
Install 'node-red-contrib-function-npm', adds the capability to install and use packages from npm

Node-RED flow: ```node-led-matrix-patterns.json```
