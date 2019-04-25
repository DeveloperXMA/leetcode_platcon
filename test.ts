// const a = new EE();

a.subscribe('event1', function(data) {
  console.log(data); 
});
a.subscribe('event1', function(data) {
  console.log(data); 
});
a.subscribe('event1', function(data) {
  console.log(data); 
});
a.subscribe('event1', function(data) {
  console.log(data); 
});
a.emit('event1', 1, 2, 3, 4);

function(a,b,c,d,f) {
  
}

// a.emit('event', {
//   a: '2342'
// });


function EE () {
  // this.eventParams = {
  //   'print': [1,2,3,]
  // };
  // this.suscriber = [];

  this.eventHash = {
    event1: [callback1, callback2, callback3, callback4]
  };

}

EE.prototype.subscribe = function(eventName, callback) {
  // let subscribes = this.suscriber;
  // for (let subscribe of subscribes) {

  // }
  // let callBackParmas = this.eventParams[eventName];

  this.eventHash = this.eventHash[eventName] || [];
  this.eventHash.push(callback);
  
}


EE.prototype.emit = function(eventName, ...arguments) {
  let callbacks = this.event[eventName];
  for (let callback of callbacks) {
    callback(...arguments);
  }
}



