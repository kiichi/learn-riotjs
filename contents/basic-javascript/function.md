# Function

In this chapter, I mainly focus on transition from ES5 to ES6, this is not just syntactical suger, but this is 
important topic, lexical scoping problem, in the next chapter.

You must learn this syntax "function" keyword.

```js
function calculateBMI(weightInKg, heightInM){
    return weightInKg / (heightInM * heightInM);
}
```

When you calling this function, you just need to call this with parenthesis. 

```js
calculateBMI(61,1.67);
```
The output should be below

```js
21.872422819032593
```

Before jumping to ES6 way to write a function, let's describe what it does. Read this below, and I want you to say
this sentense in your mind.

```
"I created a function which takes weight and height, and then I assigned the name, calculateBMI".
```

Let's look at this in ES6 way. 

```js
const calculateBMI = (weightInKg, heightInM) => {
    return weightInKg / (heightInM * heightInM);
}
```

(To be continued...)
