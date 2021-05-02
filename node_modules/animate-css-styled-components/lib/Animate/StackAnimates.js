'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('./Utils');

var Utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackAnimates = function (_PureComponent) {
  _inherits(StackAnimates, _PureComponent);

  function StackAnimates(props) {
    _classCallCheck(this, StackAnimates);

    var _this = _possibleConstructorReturn(this, (StackAnimates.__proto__ || Object.getPrototypeOf(StackAnimates)).call(this, props));

    _this.state = Utils.buildState(props);
    return _this;
  }

  _createClass(StackAnimates, [{
    key: 'renderNextAnimate',
    value: function renderNextAnimate() {
      var _this2 = this;

      if (this.HaveMoreAnimations) {
        setTimeout(function () {
          _this2.setState(Utils.buildState(_this2.props, _this2.getNextIndex), function () {
            return _this2.renderNextAnimate();
          });
        }, this.getNextStartTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Animation = this.state.Animation;


      return _react2.default.createElement(
        Animation,
        this.state,
        this.props.children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderNextAnimate();
    }
  }, {
    key: 'getNextIndex',
    get: function get() {
      return this.state.index + 1;
    }
  }, {
    key: 'getNextStartTime',
    get: function get() {
      var time = Utils.convertToMs(parseFloat(Utils.removeUnit(this.state.duration)));
      var delay = Utils.convertToMs(parseFloat(Utils.removeUnit(this.state.delay)));
      return time + delay;
    }
  }, {
    key: 'HaveMoreAnimations',
    get: function get() {
      return this.getNextIndex < this.props.Animation.length;
    }
  }]);

  return StackAnimates;
}(_react.PureComponent);

exports.default = StackAnimates;