

Anywhere in HTML, you are allowed to embed curly braces ```{}``` and evaluate any Javascript code on the fly; that means, "run this Javascript code when it is rendered".

Let's create a simple example. First, try to place this conde in your Console. 

```
(new Date()).getFullYear()
```

In your console, your code gets evaluated, and you see the year right away. Place the same code in your html file using ```{}``` syntax.

```
&copy; { (new Date()).getFullYear() } Kiichi Takeuchi All rights reserved.
```

This will render the same copyright notice, and the year changes automatically.

(write about function and binding state)
