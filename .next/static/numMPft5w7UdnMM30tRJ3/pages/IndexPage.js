(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"H/I7":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/IndexPage",function(){return a("vxWH")}])},utVJ:function(t,e,a){"use strict";a.r(e);var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),c=a("a7VT"),r=a("AT/M"),u=a("Tit0"),o=a("q1tI"),s=a.n(o),d=a("Z3vd"),S=a("cMZM"),k=a("tRbT"),m=a("NdJi"),h=s.a.createElement,b=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={randomvar:"",startGame:!0,singlePlayer:!0,duration:1},a.onClickStartGame=a.onClickStartGame.bind(Object(r.a)(a)),a.onClickSingle=a.onClickSingle.bind(Object(r.a)(a)),a.onClickMulti=a.onClickMulti.bind(Object(r.a)(a)),a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"onClickStartGame",value:function(){this.setState({startGame:!this.state.startGame}),this.props.callback("QUESTIONS")}},{key:"onClickSingle",value:function(){this.setState({singlePlayer:!0})}},{key:"onClickMulti",value:function(){this.setState({singlePlayer:!1})}},{key:"onSelectDuration",value:function(t){this.setState({duration:t})}},{key:"render",value:function(){var t=this,e=h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:this.onClickStartGame},"Start Game"),a=this.state.singlePlayer?h(S.default,{text:"Single Player"}):h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:this.onClickSingle},"Single Player"),n=this.state.singlePlayer?h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:this.onClickMulti},"Multi Player"):h(S.default,{text:"Multi Player"}),i=1===this.state.duration?h(S.default,{text:"Short Game [10 min]"}):h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:function(){return t.onSelectDuration(1)}},"Short Game [10 min]"),l=2===this.state.duration?h(S.default,{text:"Medium Game [20 min]"}):h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:function(){return t.onSelectDuration(2)}},"Medium Game [20 min]"),c=3===this.state.duration?h(S.default,{text:"Long Game [30 min]"}):h(d.a,{style:m.a.unselectedButton,variant:"contained",onClick:function(){return t.onSelectDuration(3)}},"Long Game [30 min]");return h("div",{style:m.a.root},h(k.a,{style:m.a.title}," TRIVIA "),h(k.a,{style:m.a.row,spacing:3},a,n),h(k.a,{style:m.a.row,spacing:3},i,l,c),h(k.a,{style:m.a.row,spacing:3},e))}}]),e}(o.Component);e.default=b},vxWH:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return m}));var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),c=a("a7VT"),r=a("AT/M"),u=a("Tit0"),o=a("q1tI"),s=a.n(o),d=(a("cMZM"),a("utVJ")),S=a("jVsj"),k=s.a.createElement,m=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={gameState:"START"},a.renderSwitch=a.renderSwitch.bind(Object(r.a)(a)),a.backHome=a.backHome.bind(Object(r.a)(a)),a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"backHome",value:function(t){this.setState({gameState:t})}},{key:"renderSwitch",value:function(t){switch(t){case"START":return k(d.default,{callback:this.backHome});case"QUESTIONS":return k(S.default,{callback:this.backHome});default:return k(d.default,null)}}},{key:"render",value:function(){return k(s.a.Fragment,null," ",this.renderSwitch(this.state.gameState))}}]),e}(o.Component)}},[["H/I7",0,2,1,3,4,5,6,7]]]);