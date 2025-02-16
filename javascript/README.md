
# Javascript




## CallBack vs Promises Vs Async Await

async await >> promises chain >> callback hell
## Callback

A CallBack is a function passed as an argument to another function.


### Callback Hell
Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom).

This style of programming becomes difficult to understand and manage.
## Promises
Promise is for eventual completion of task. It is an object in js. It is a solution to callback hell.

```let promise = new Promise((resolve, reject)=>{ }) // function with two handlers```

*resolve & reject are two callbacks provided by JS

.then() & .catch()

``` promise.then((res)=> {.....}) ```\
``` promise.catch((err)=>{...}) ```




## Async Await
Async function always returns a promise.

``` async function myFunc(){...} ``` 

Await pauses the execution of its sorrounding async function until the promise is settled.
