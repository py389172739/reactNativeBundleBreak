__d(254,function(e,t,n,o){"use strict";var s,r=t(255),i=t(54),a=t(37),p=t(76),l=t(77),u=t(72),d=t(99),h=t(96),c=t(113),b=c("RCTModalHostView",null),f=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){if(this.props.visible===!1)return null;var e={backgroundColor:this.props.transparent?"transparent":"white",top:i.Version>=19?u.RCTModalHostView.Constants.StatusBarHeight:0},t=this.props.animationType;return t||(t="none",this.props.animated&&(t="slide")),p.createElement(b,{animationType:t,transparent:this.props.transparent,onRequestClose:this.props.onRequestClose,onShow:this.props.onShow,style:y.modal,onStartShouldSetResponder:this._shouldSetResponder,supportedOrientations:this.props.supportedOrientations,onOrientationChange:this.props.onOrientationChange},p.createElement(d,{style:[y.container,e]},this.props.children))}},{key:"_shouldSetResponder",value:function(){return!0}}]),t}(p.Component);f.propTypes={animationType:a.oneOf(["none","slide","fade"]),transparent:a.bool,visible:a.bool,onRequestClose:a.func.isRequired,onShow:a.func,animated:h(a.bool,"Use the `animationType` prop instead."),supportedOrientations:a.arrayOf(a.oneOf(["portrait","portrait-upside-down","landscape","landscape-left","landscape-right"])),onOrientationChange:a.func},f.defaultProps={visible:!0};var C=r.isRTL?"right":"left",y=l.create({modal:{position:"absolute"},container:(s={position:"absolute"},babelHelpers.defineProperty(s,C,0),babelHelpers.defineProperty(s,"top",0),s)});n.exports=f});