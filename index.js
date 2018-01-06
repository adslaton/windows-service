var Service = require('node-windows').Service,
	svc,
    name = 'Copa Authentication',
    description = 'Copa pauthentication service',
    script = 'C:\\inetpub\\wwwroot\\authenticate\\index.js';

/*
    Create a new service object
    example:
    svc = new Service({
      name: 'Hello World',
      description: 'The nodejs.org example web server.',
      script: 'C:\\path\\to\\helloworld.js'
    });
*/
svc = new Service({
    name: name,
    description: description,
    script: script
})

/*
    Listen for the "install" event, which indicates the
    process is available as a service.
*/
svc.on('install', function(){
    svc.start();
    console.log('%s install complete', name);
});

svc.install();