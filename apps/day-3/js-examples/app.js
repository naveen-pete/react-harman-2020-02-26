console.log('outside:', this);

const somefn = function () {
  console.log('somefn:', this);
};

somefn();

const person2 = {
  name: 'amar',
  email: 'amar@abc.com'
};

const person1 = {
  name: 'Hari',
  email: 'hari@xyz.com',

  show: function () {
    // const self = this;
    console.log('show this:', this);
    console.log('name:', this.name);
    console.log('email:', this.email);

    const changeName = function () {
      console.log('changeName this:', this);
      this.name = 'Krish';
    };

    // changeName.apply(this);
    console.log('name:', this.name);
  }
};

person1.show();

// person1.show.apply(person2);

const newShow = person1.show.bind(person2);
newShow();