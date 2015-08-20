# React &lt;Copyright&gt;

> A react-component to format and display a copyright notice.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-copyright`


## Usage

```javascript
var React     = require('react');
var Copyright = require('react-copyright');

var Component = React.createClass({
  render: function () {
    return (
      <Copyright>Jason Bellamy</Copyright>
    );
  }
});
```


## Options


Property | Type     | Argument     | Values                   | Default   | Description
---------|----------|--------------|--------------------------|-----------|------------
date     | `string` | `<optional>` | [RFC2822/ISO8601](https://tools.ietf.org/html/rfc2822#page-14)        | `today`   | [RFC2822/ISO8601](https://tools.ietf.org/html/rfc2822#page-14) format.
format   | `string` | `<optional>` | `numeric`, `2-digit`     | `numeric` | representation format.
position | `string` | `<optional>` | `pre`, `post`     | `pre` | placement of the copyright year.


## Developing

[react-copyright](https://github.com/jasonbellamy/react-copyright) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
