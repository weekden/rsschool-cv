# Denis Nedelko

##  Contacts   
- Phone:+375(29) 529-73-31
- Email:gmdenisnedelko@gmail.com
- Telegram:[@denisnedelko](https://t.me/denisnedelko)
- GitHub:[weekden](https://github.com/weekden)
- CodePen:[@denisnedelko](https://codepen.io/Denis-Nedelko)

## About Me
I am 35 years old. I love setting new goals and achieving them. I really want to follow the learning path to the very end. I am confident that the knowledge gained will help me in the future.
> So why not start right now...

## Skils
- HTML
- CSS 
- JavaScript
- FireBase

## Code Example
``` 
function HashStorage() {
    this.storage = {};

    this.addValue = function (key, value) {
        this.storage[key] = value;
    };

    this.getValue = function (key) {
        if (this.storage[key]) {
            return this.storage[key];
        }
        return;
    };

    this.deleteValue = function (key) {
        if (this.storage[key] !== undefined) {
            delete this.storage[key];
            return true;
        }
        return false;
    };

    this.getKeys = function () {
        const arrayKeys = [];
        for (key in this.storage) {
            arrayKeys.push(key);
        }
        return arrayKeys;
    };
} 
```

## Education
- Brest State Technical University
    + Faculty of Electronics and Information systems
- IT-Academy
    + Front-end development (stage#1)
    + Front-end development (stage#2)

## Languages
- Russian (naitive)
- English (A1+)
    