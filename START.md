# Server
1. ```npm i json-server```
2. Create **Data** folder with **cities.json** file then
3. Make some changes in package.json **"server": "json-server --watch data/cities.json --port 8000"** and also yo can set to edge **--delay 500**
4. The **npm run server** in order to Launch Server

# Installing Map
1. ```npm i react-leaflet leaflet```

# Installing Calendar (Date Picker)
1. ```npm i react-datepicker```

# Optimizing Bundle Sizing
1. ```npm run build``` if we see dist/assets/index-51946a06.js   511.33 kB │ gzip: 147.55 kB like this above > 500 kB it need to be split by bundles