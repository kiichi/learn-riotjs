# Expression

## Evaluating Javascript

Anywhere in HTML, you are allowed to embed curly braces ```{}``` and evaluate any Javascript code on the fly; that means, "run this Javascript code when it is rendered".

Let's create a simple example. First, try to run this conde in your Chrome console. 

```javascript
(new Date()).getFullYear()
```

This will show the current year

```
> 2019
```

In your console, your code gets evaluated, and you see the year right away. Place the same code in your html file using ```{}``` syntax.

```html
<div>&copy; { (new Date()).getFullYear() } Kiichi Takeuchi All rights reserved.</div>
```

This will render the same copyright notice, and the year changes automatically.

```
© 2019 Kiichi Takeuchi All rights reserved.
```

(write about function and binding state, etc...)
