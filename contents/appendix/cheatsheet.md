# Riot 4 Cheat Sheet

## Browser based quick start

index.html and app.html example
<a href="https://next.plnkr.co/edit/7U2qXDWkcGpNUoH5" target=_blank>Try this</a>
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

## DOM 
You can access raw DOM element with ```this.$('#username')```, but $ is not jQuery. It's short hand of ```document.querySelector('#username')```. 
<a href="https://next.plnkr.co/edit/EsqrIQzyiWIziMsx" target=_blank>Try this</a>
```html
<my-tag>
    <label>my-tag.html - Click Console</label>
    Username:<input type="text" id="username"><br/>
    Password:<input type="password" id="password"><br/>
    <button onclick="{login}">Login</button>
    <script>
        export default{
            login(){
                const myUsername = this.$('#username').value;
                const myPassword = this.$('#password').value;
                console.log("login:",myUsername, myPassword);
            }
        }
    </script>
</my-tag>
```

If you need multiple selectors, such as class or tag name, use ```this.$$('.my-class')```. This is equivalent to ```this.querySelectorAll('.my-class')```.
<a href="https://next.plnkr.co/edit/niz5gtNHJHlaOuvR?preview" target=_blank>Try this</a>
```html
<my-tag>
    <h5>my-tag.html</h5>
    <label>my-tag.html - Click Console</label>
    Username:<input type="text" id="username"><br/>
    Password:<input type="password" id="password"><br/>
    <button onclick="{login}">Login</button>
    <script>
        export default{
            login(){
                this.$$('input').forEach((elem)=>{
                    console.log(elem.id + ': ' + elem.value);
                });
            }
        }
    </script>
</my-tag>
```

# CSS

## How to change color 

# Event

## Click 

## How to pass an argument

# Loop 

## How to loop array 

## How to loop dictionary

