# react-pure-render

A function, a component and a mixin for React pure rendering.  
This module provides exactly the same functionality as [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html), but as a standalone module and in three different flavors.

### Usage

#### Function

This is my preferred method, but it requires ES7 [class property transform](https://gist.github.com/jeffmo/054df782c05639da2adb) to be enabled by putting `{ "stage": 0 }` in your [.babelrc](https://babeljs.io/docs/usage/babelrc/).

```js
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Button {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() { }
}
```

### Class

Inheritance is not very cool but it doesn't hurt a lot if it's just for the sack of this single method. If you don't want to use stage 0 transforms, you can use base class instead:

```js
import PureComponent from 'react-pure-render/component';

export default class Button extends PureComponent {
  render() { }
}
```

### Mixin

If you're working with `createClass`-style components, use the mixin. It's exactly the same as [`React.addons.PureRenderMixin`](https://facebook.github.io/react/docs/pure-render-mixin.html).

```js
var React = require('react');
var PureMixin = require('react-pure-render/mixin');

var Button = React.createClass({
  mixins: [PureMixin],

  render: function () { }
});

module.exports = Button;
```

### License

MIT