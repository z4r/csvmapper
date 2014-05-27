csvmapper
=========

A Node module to map a csv into an Object

[![Build Status](https://travis-ci.org/z4r/csvmapper.svg?branch=master)](https://travis-ci.org/z4r/csvmapper)

How To Install
--------------

    npm install csvmapper
    
How To Use
----------

```javascript
var csvmapper = require('csvmapper');

csvmapper.map('http://example.net/sources.csv', ['name', 'email', 'date', 'company'], function (err, results) {
    if (err) throw err;
    console.log(results);
});
```

__output__:
```javascript
[
    {
        company: "Ut Ltd",
        date: "2014/11/12",
        email: "nulla.ante.iaculis@massaMauris.com",
        name: "Ethan"
    },
    {
        company: "Integer Company",
        date: "2014/01/12",
        email: "urna@NuncmaurisMorbi.com",
        name: "Craig"
    },
    {
        company: "Aliquet Phasellus Corporation",
        date: "2014/05/07",
        email: "sed@liberoProinsed.edu",
        name: "Julian"
    },
    {
        company: "Nonummy Ipsum Corporation",
        date: "2015/01/13",
        email: "elementum@Sed.ca",
        name: "Perry"
    }
]
```