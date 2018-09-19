Based on repository:

https://github.com/resin-io-playground/node-sense-hat

## 1. How to build your own weather station using a Raspberry Pi
#### *folder 'wia-wether-device'*
https://community.wia.io/d/40-how-to-build-your-own-weather-station-using-a-raspberry-pi

Using WIA.io IoT platform: register a device, get the secret key and inject into 'index.js'
Then run:
```
npm install
node index.js
```

## 2. Using the LED matrix
#### *folder 'sense-hat-matrix'*
Find **Sense Hat LED matrix API Reference** at:
- https://github.com/aonghusonia/sense-hat-led
- https://github.com/resin-io-playground/node-sense-hat

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

### 2.1 Usage inside Node-RED
Install 'node-red-contrib-function-npm', adds the capability to install and use packages from npm

Node-RED flow: ```node-led-matrix-patterns.json```

## 3. Getting environmental data
#### *folder 'node-sense-hat-IMU'*
Based on npm package **nodeimu** at https://github.com/rupnikj/nodeimu

Find **Sense Hat API Reference** at:
- https://github.com/resin-io-playground/node-sense-hat
