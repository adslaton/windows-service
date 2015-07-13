#Window Service Creator

Creates a Windows service daemon

##Defined the service name, description, and path

```javascript
//Create a new service object

svc = new Service({
  name: 'Hello World',
  description: 'The nodejs.org web server.',
  script: 'C:\\path\\to\\helloworld.js'
});
 ```

 ##Start the app
 ```shell
 npm start
 ```

