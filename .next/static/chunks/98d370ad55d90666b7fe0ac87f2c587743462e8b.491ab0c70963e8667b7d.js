(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HY1F:function(t,e,n){"use strict";n.r(e);var s=n("0iUn"),i=n("sLSF"),r=n("MI3g"),a=n("a7VT"),o=n("AT/M"),c=n("Tit0"),u=n("q1tI"),l=n.n(u),p=n("Z3vd"),d=n("tRbT"),h=n("NdJi"),f=l.a.createElement,b=new(0,n("gsez").AllHtmlEntities),m=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(r.a)(this,Object(a.a)(e).call(this,t))).onPressAnswer=n.onPressAnswer.bind(Object(o.a)(n)),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"onPressAnswer",value:function(t){var e;for(var n in this.props.answers){var s=this.props.answers[n];if(s.correct){e=b.decode(s.text);break}}this.props.callback(t.correct,e)}},{key:"render",value:function(){var t=this,e=null==this.props.answers?"Answer 1":this.props.answers[0],n=null==this.props.answers?"Answer 2":this.props.answers[1],s=null==this.props.answers?"Answer 3":this.props.answers[2],i=null==this.props.answers?"Answer 4":this.props.answers[3];return f(d.a,{columnGrid:!0,direction:"column",justify:"center",alignItems:"center",spacing:2},f(d.a,{rowGrid:!0,spacing:1},f(p.a,{style:h.a.unselectedButton,onClick:function(){return t.onPressAnswer(e)}},b.decode(e.text)," "),f(p.a,{style:h.a.unselectedButton,onClick:function(){return t.onPressAnswer(n)}},b.decode(n.text))),f(d.a,{rowGrid:!0,spacing:1},f(p.a,{style:h.a.unselectedButton,onClick:function(){return t.onPressAnswer(s)}},b.decode(s.text)," "),f(p.a,{style:h.a.unselectedButton,onClick:function(){return t.onPressAnswer(i)}},b.decode(i.text))))}}]),e}(u.Component);e.default=m},OUhP:function(t,e,n){"use strict";n.r(e);var s=n("0iUn"),i=n("sLSF"),r=n("MI3g"),a=n("a7VT"),o=n("AT/M"),c=n("Tit0"),u=n("q1tI"),l=n.n(u),p=n("Z3vd"),d=(n("cMZM"),n("tRbT")),h=(n("HY1F"),n("NdJi")),f=l.a.createElement,b=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(r.a)(this,Object(a.a)(e).call(this,t))).state={},n.onGoHome=n.onGoHome.bind(Object(o.a)(n)),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"onGoHome",value:function(){this.props.callback("START"),console.log("Hello!!!")}},{key:"render",value:function(){return f(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},f("p",{style:h.a.questionText},"Game Over. You scored: ",this.props.score),f(p.a,{style:h.a.unselectedButton,onClick:this.onGoHome},"Back to Home"))}}]),e}(u.Component);e.default=b},cMZM:function(t,e,n){"use strict";n.r(e);var s=n("0iUn"),i=n("sLSF"),r=n("MI3g"),a=n("a7VT"),o=n("Tit0"),c=n("q1tI"),u=n.n(c),l=n("Z3vd"),p=u.a.createElement,d={selectedButton:{backgroundColor:"white",color:"#1F1F55",boxShadow:"0px 0px 4px #ffffff",borderRadius:20,borderTop:"5px solid #4DFAFA",borderBottom:"5px solid #4DFAFA",borderLeft:"5px solid #4DFAFA",borderRight:"5px solid #4DFAFA",width:332,height:78,fontFamily:"Kontakt"}},h=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return p(l.a,{style:d.selectedButton,variant:"contained",color:"secondary",onClick:this.props.onClick},this.props.text)}}]),e}(c.Component);e.default=h},jVsj:function(t,e,n){"use strict";n.r(e);var s=n("ln6h"),i=n.n(s),r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),c=n("a7VT"),u=n("AT/M"),l=n("Tit0"),p=n("q1tI"),d=n.n(p),h=(n("cMZM"),n("tRbT")),f=n("wx14"),b=n("Ff2n"),m=(n("17x9"),n("iuhU")),x=n("H2TA"),v=n("zLVn"),E=n("dI71"),w=n("i8i4"),y=n.n(w),k=!1,O=n("0PSK"),g="unmounted",j="exited",T="entering",S="entered",C=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var i,r=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?r?(i=j,s.appearStatus=T):i=S:i=e.unmountOnExit||e.mountOnEnter?g:j,s.state={status:i},s.nextCallback=null,s}Object(E.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===g?{status:j}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==T&&n!==S&&(e=T):n!==T&&n!==S||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=y.a.findDOMNode(this);e===T?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===j&&this.setState({status:g})},n.performEnter=function(t,e){var n=this,s=this.props.enter,i=this.context?this.context.isMounting:e,r=this.getTimeouts(),a=i?r.appear:r.enter;!e&&!s||k?this.safeSetState({status:S},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,i),this.safeSetState({status:T},(function(){n.props.onEntering(t,i),n.onTransitionEnd(t,a,(function(){n.safeSetState({status:S},(function(){n.props.onEntered(t,i)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,s=this.getTimeouts();n&&!k?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,s.exit,(function(){e.safeSetState({status:j},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:j},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var s=null==e&&!this.props.addEndListener;t&&!s?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===g)return null;var e=this.props,n=e.children,s=Object(v.a)(e,["children"]);if(delete s.in,delete s.mountOnEnter,delete s.unmountOnExit,delete s.appear,delete s.enter,delete s.exit,delete s.timeout,delete s.addEndListener,delete s.onEnter,delete s.onEntering,delete s.onEntered,delete s.onExit,delete s.onExiting,delete s.onExited,"function"===typeof n)return d.a.createElement(O.a.Provider,{value:null},n(t,s));var i=d.a.Children.only(n);return d.a.createElement(O.a.Provider,{value:null},d.a.cloneElement(i,s))},e}(d.a.Component);function A(){}C.contextType=O.a,C.propTypes={},C.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A},C.UNMOUNTED=0,C.EXITED=1,C.ENTERING=2,C.ENTERED=3,C.EXITING=4;var I=C,F=n("wpWl"),M=n("aXM8"),N=n("cNwE");function q(t,e){var n=t.timeout,s=t.style,i=void 0===s?{}:s;return{duration:i.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:i.transitionDelay}}var D=n("bfFb"),P={entering:{opacity:1},entered:{opacity:1}},G={enter:F.b.enteringScreen,exit:F.b.leavingScreen},H=d.a.forwardRef((function(t,e){var n=t.children,s=t.in,i=t.onEnter,r=t.onExit,a=t.style,o=t.timeout,c=void 0===o?G:o,u=Object(b.a)(t,["children","in","onEnter","onExit","style","timeout"]),l=Object(M.a)()||N.a,p=Object(D.a)(n.ref,e);return d.a.createElement(I,Object(f.a)({appear:!0,in:s,onEnter:function(t,e){!function(t){t.scrollTop}(t);var n=q({style:a,timeout:c},{mode:"enter"});t.style.webkitTransition=l.transitions.create("opacity",n),t.style.transition=l.transitions.create("opacity",n),i&&i(t,e)},onExit:function(t){var e=q({style:a,timeout:c},{mode:"exit"});t.style.webkitTransition=l.transitions.create("opacity",e),t.style.transition=l.transitions.create("opacity",e),r&&r(t)},timeout:c},u),(function(t,e){return d.a.cloneElement(n,Object(f.a)({style:Object(f.a)({opacity:0,visibility:"exited"!==t||s?void 0:"hidden"},P[t],{},a,{},n.props.style),ref:p},e))}))})),Q=d.a.forwardRef((function(t,e){var n=t.children,s=t.classes,i=t.className,r=t.invisible,a=void 0!==r&&r,o=t.open,c=t.transitionDuration,u=Object(b.a)(t,["children","classes","className","invisible","open","transitionDuration"]);return d.a.createElement(H,Object(f.a)({in:o,timeout:c},u),d.a.createElement("div",{className:Object(m.a)(s.root,i,a&&s.invisible),"aria-hidden":!0,ref:e},n))})),U=Object(x.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(Q),B=n("HY1F"),L=n("OUhP"),R=n("ob1h"),V=n("NdJi"),J=d.a.createElement,Z=new(0,n("gsez").AllHtmlEntities),z=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(c.a)(e).call(this,t))).state={startGame:!0,singlePlayer:!0,duration:1,questionIndex:0,currentScore:0,showFeedback:!1,lastQuestionCorrect:!1,lastQuestionAnswer:""},n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(l.a)(e,t),Object(a.a)(e,[{key:"componentWillMount",value:function(){this.onGetQuestions()}},{key:"onGetQuestions",value:function(t){var e,n,s;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=null==t?"entertainment-music":t,r.next=3,i.a.awrap(fetch("https://cocktail-trivia-api.herokuapp.com/api/category/"+e));case 3:return n=r.sent,r.next=6,i.a.awrap(n.json());case 6:s=r.sent,this.setState({questionsArr:s});case 8:case"end":return r.stop()}}),null,this)}},{key:"nextQuestion",value:function(t,e){var n=this,s=t?this.state.currentScore+1:this.state.currentScore,i=this.state.questionIndex+1;this.setState({lastQuestionCorrect:t}),this.setState({lastQuestionAnswer:e}),this.setState({showFeedback:!0}),setTimeout((function(){n.setState({showFeedback:!1})}),2e3),this.setState({currentScore:s}),this.setState({questionIndex:i})}},{key:"render",value:function(){return J("div",{style:V.a.root},J(U,{open:this.state.showFeedback},J(R.default,{wasCorrect:this.state.lastQuestionCorrect,correctAnswer:this.state.lastQuestionAnswer})),J(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},this.state.questionIndex<3&&J(d.a.Fragment,null,J("p",{style:V.a.questionText},this.state.questionsArr&&Z.decode(this.state.questionsArr[this.state.questionIndex].text),"   "),J(B.default,{answers:this.state.questionsArr&&this.state.questionsArr[this.state.questionIndex].answers,callback:this.nextQuestion})),this.state.questionIndex>=3&&J(d.a.Fragment,null,J(L.default,{score:this.state.currentScore,callback:this.props.callback}))))}}]),e}(p.Component);e.default=z},ob1h:function(t,e,n){"use strict";n.r(e);var s=n("0iUn"),i=n("sLSF"),r=n("MI3g"),a=n("a7VT"),o=n("AT/M"),c=n("Tit0"),u=n("q1tI"),l=n.n(u),p=n("tRbT"),d=n("NdJi"),h=l.a.createElement,f=(new(0,n("gsez").AllHtmlEntities),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(r.a)(this,Object(a.a)(e).call(this,t))).onPressDismiss=n.onPressDismiss.bind(Object(o.a)(n)),n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"onPressDismiss",value:function(){this.props.callback()}},{key:"render",value:function(){var t,e;return this.props.wasCorrect?(t="Correct!",e="Way to go! You were right! "+this.props.correctAnswer+" is correct."):(t="Incorrect",e="Oh no, that wasn't right. The correct answer was "+this.props.correctAnswer+"."),h(p.a,{columnGrid:!0,direction:"column",justify:"center",alignItems:"center",spacing:2},h(p.a,{rowGrid:!0,spacing:1},h("p",{style:d.a.feedbackHeaderText},t)),h("p",{style:d.a.feedbackBodyText},e))}}]),e}(u.Component));e.default=f}}]);