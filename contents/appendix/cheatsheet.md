# Riot 4 Cheat Sheet

# Basics

## Browser based quick start

<a href="https://next.plnkr.co/edit/7U2qXDWkcGpNUoH5" target=_blank>Try this example</a>

index.html and app.html example
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

## Accessing DOM 

<a href="https://next.plnkr.co/edit/EsqrIQzyiWIziMsx" target=_blank>Try this example</a>

You can access raw DOM element with ```this.$('#username')```, but $ is not jQuery. It's short hand of ```document.querySelector('#username')```. 
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

<a href="https://next.plnkr.co/edit/niz5gtNHJHlaOuvR?preview" target=_blank>Try this example</a>

If you need multiple selectors, such as class or tag name, use ```this.$$('.my-class')```. This is equivalent to ```this.querySelectorAll('.my-class')```.
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
## Dynamic component mounting - "is" syntax

<a href="https://next.plnkr.co/edit/XLhH3HPawo6N6FaL" target=_blank>Try this example</a>

Riot's ``is`` syntax is useful when you swap some custom tags into a placeholder, such as generic ``div`` tag. 
This is useful technique if you don't want to hardcode a bunch of custom tag name, but load it dynamically from database. 
Let's imagine you are building a menu system, and you want to load different pages depend on user's click.

You have custom pages: ``<dashboard>``, ``<catalog>``, and ``<settings>``, and the state is holding which menu 
you are looking at ``state.menu``

Your menu items are like

```html
<a href="#" onclick="{()=>menuSelected('dashboard')}">Dashboard</a>
<a href="#" onclick="{()=>menuSelected('catalog')}">Catalog</a><br />
```

You are calling a function ``menuSelected`` to set the variable of the user selection:

```js
state: {
    menu: 'dashboard'
},
menuSelected(selectedItem) {
    this.state.menu = selectedItem;
    this.update();
}
```

To begin with, in the main contents area, you use those tags using ``if`` statement.

```html
<dashboard if="{state.menu == 'dashboard'}"></dashboard>
<catalog if="{state.menu == 'catalog'}"></catalog>
<settings if="{state.menu == 'settings'}"></settings>
```

This looks a bit redundant of hardcoded tags because if you add a new tag ``<rewards>``, you have to remember to add line in the content area. Instead, place one div tag and use ``is`` statement. In this way, no matter how many components you add, your contents area is still simple.

```html
<div is="{state.menu}"></div>
```

Because notice that 
```html
<dashboard></dashboard>
```

is quivalent of 

```
<div is="dashboard"></div>
```

so that you can bind the is from the variable defined in the component.




# CSS

## How to change color 

# Event

## Click 

## How to pass an argument

# Loop 

## How to loop array 

## How to loop dictionary

