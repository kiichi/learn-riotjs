# Riot 4 Cheat Sheet

## Browser based quick start
```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Learn Riot</title>
    </head>
    <body>
    <div class="container">
        <app></app>
    </div>
    <!-- import other libraries -->
    <script src="tags/app.html" type="riot"></script>
    <script type="module">
        //import Service from './js/service.js';
        // Main
        (async ()=>{
            // Create service
            //const srv = new Service(axios);
            await riot.compile();
            // Install in each component
            //riot.install(function(component) {
            //    component.service = srv;
            //});
            riot.mount('app');
        })();
   </script>
</body>
</html>
```

## How to setup Riot without compiler

# DOM 

## How to access input box

# CSS

## How to change color 

# Event

## Click 

## How to pass an argument

# Loop 

## How to loop array 

## How to loop dictionary

