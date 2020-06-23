
// npm install -g node-windows
// npm link node-windows
//
// node install_service.js


var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'homepage-svc',
    description: 'homepage-svc',
    script: 'C:\\redmine-3.3.3-0\\apps\\laboratory-website\\app.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
    svc.start();
});

svc.install();