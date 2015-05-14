import shouldPureComponentUpdate from './function';
import { Component } from 'react';

export default class PureComponent extends Component {}
PureComponent.prototype.shouldComponentUpdate = shouldPureComponentUpdate;
