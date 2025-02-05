const obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  description: "This is a custom object with getSetGen function.",
  getSetGen: function () {
    var keys = Object.keys(this);
    for (var i = 0; i < keys.length; i++) {
      var propName = keys[i];
      if (typeof this[propName] !== "function") {
        (function (prop) {
          var data = this[prop];
          Object.defineProperty(this, prop, {
            set: function (value) {
              data = value;
            },
            get: function () {
              return data;
            },
          });
        }).call(this,propName);
      }
    }
  }
};

const product = {
    id: "P-101",
    name: "Laptop",
    price: 1500
};

// Use getSetGen from obj on the product object
obj.getSetGen.call(product);

console.log(product.id);
console.log(product.name);
console.log(product.price);


const user = {
    name: "Ali",
    age: 23
};

// Use getSetGen from obj on the user object
obj.getSetGen.call(user);

console.log(user.name);
console.log(user.age);  

user.name = "Ahmed";
user.age = 25;

console.log(user.name);
console.log(user.age);  


