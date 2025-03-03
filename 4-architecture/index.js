setTimeout(() => {
    console.log("this is timeout")
}, 0);

setImmediate(()=>console.log("hello from immediate!"));

setTimeout(() => {
    console.log("this is timeout 2")
}, 0);