(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=a(29),s=a(203),l=a(190),u=a(38),j=a(15),h=a(151),m=a(188),d=a(2),p=Object(m.a)({link:{textDecoration:"none"},title:{fontSize:"20px",color:"white"}});var b=function(){var e=p();return Object(d.jsx)(u.b,{to:"/",className:e.link,children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(h.a,{className:e.title,children:"Main"})})})},x=Object(m.a)({link:{textDecoration:"none"},title:{fontSize:"20px",color:"white"}});var y=function(){var e=x();return Object(d.jsx)(u.b,{to:"/favorite",className:e.link,children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(h.a,{className:e.title,children:"Favorite"})})})},O=a(208),f=a(192),g=a(193),w=Object(m.a)({root:{justifyContent:"flex-end",flexWrap:"initial !important"},item:{marginRight:"10px",marginTop:"5px"},title:{fontSize:"25px",marginLeft:"10px",display:"flex",color:"white"},mainRoot:{flexWrap:"initial",marginTop:"10px"},toggle:{marginTop:"0.3%",color:"white"}});var v=function(e){var t=w();return Object(d.jsxs)(l.a,{container:!0,className:t.mainRoot,children:[Object(d.jsx)(l.a,{item:!0,children:Object(d.jsxs)(h.a,{className:t.title,children:["Weather",Object(d.jsx)(h.a,{className:t.title,children:"App"})]})}),Object(d.jsxs)(l.a,{container:!0,className:t.root,children:[Object(d.jsx)(l.a,{item:!0,className:t.item,children:Object(d.jsx)(b,{})}),Object(d.jsx)(l.a,{item:!0,className:t.item,children:Object(d.jsx)(y,{})}),Object(d.jsx)(l.a,{item:!0,className:t.toggle,children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{control:Object(d.jsx)(O.a,{checked:e.checked,onChange:e.handleChange}),label:"Toggle"})})})]})]})},T=a(64),I=(a(44),a(66),a(195)),P=Object(m.a)({btn:{background:"white"}});var C=function(e){var t=P();return Object(d.jsx)(l.a,{container:!0,justify:"center",children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(I.a,{variant:"outlined",color:"primary",size:"large",onClick:e.submit,className:t.btn,disabled:!!e.validString,children:"Submit"})})})},M=a(19),S=(a(67),a(97)),N=a.n(S),F=a(196),U=a(197),k=a(199),D=a(198),W=a(98),L=a.n(W),E=Object(m.a)({root:{maxWidth:320,marginLeft:"13.5%"},media:{height:50,width:100,marginTop:"5%"},link:{textDecoration:"none"},icon:{marginRight:"5%",marginTop:"2%",color:"#ffee58"}});var R=function(e){var t=E(),a=Object(M.c)((function(e){return e.root.isToAddFavourite}));if(void 0!==e.objCurrentWeather)return Object(d.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(d.jsxs)(F.a,{className:t.root,children:[Object(d.jsxs)(U.a,{children:[Object(d.jsx)(D.a,{className:t.media,image:e.objCurrentWeather[1],title:"Icon-Current Weather"}),Object(d.jsxs)(k.a,{children:[Object(d.jsxs)(h.a,{gutterBottom:!0,children:[Object(d.jsx)("strong",{children:" Current City:"}),Object(d.jsx)(h.a,{children:e.objCurrentWeather[3]})]}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)("strong",{children:" Current Weather:"}),Object(d.jsx)(h.a,{children:e.objCurrentWeather[0]})]}),Object(d.jsxs)(h.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Degree:"})," ",e.objCurrentWeather[2]]})]})]}),Object(d.jsxs)(l.a,{item:!0,style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsx)(I.a,{onClick:e.addToFavorite,disabled:!!a,children:"Add To Favorite"}),a?Object(d.jsx)(L.a,{className:t.icon}):null]})]})})},V=Object(m.a)({root:{height:"85%",marginTop:"5%"},span:{color:"rgb(48, 111, 140)"}});var A=function(e){var t=V(),a=["Current Weather","Date","Min","Max"];return Object(d.jsx)(F.a,{className:t.root,children:Object(d.jsx)(U.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(h.a,{gutterBottom:!0,component:"h2",children:e.data.map((function(e,n){return Object(d.jsxs)(h.a,{children:[Object(d.jsx)("strong",{children:a[n]+":"}),(c=e,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(c)?Object(d.jsx)("img",{src:e,width:"75",height:"45"},n):Object(d.jsx)("span",{className:t.span,children:e},n))]},e);var c}))})})})})},H="SET_CURRENT_WEATHER",_="SET_CURRENT_FORECAST",z="DELETE_CITY ",Y="CURRENT_SEARCH_CITY",B="IS_TO_ADD_FAVOURITE",J="IS_FAVOURITE_EMPTY",K=function(e){return{type:_,payload:e}},G=function(e){return{type:z,payload:e}},$=function(e){return{type:B,payload:e}},Z=function(e){return{type:J,payload:e}},q=a(32),Q=a(17),X=a(202),ee=a(200),te=a(204),ae=Object(m.a)({textField:{background:"white"},form:{width:"80%"},autocompleteTag:{marginBottom:"2%",marginLeft:"10%"},div:{marginTop:"25px"}});var ne=function(e){var t=ae();return Object(d.jsxs)(l.a,{container:!0,xs:12,children:[Object(d.jsx)(l.a,{container:!0,xs:12,sm:10,children:Object(d.jsx)(ee.a,{variant:"outlined",className:t.form,children:Object(d.jsx)(te.a,{options:e.arrayCity,id:"controlled-demo",value:e.searchCity,getOptionLabel:function(e){return e},onKeyUp:e.onKeyPress,onChange:e.onSave,renderInput:function(e){return Object(d.jsx)(X.a,Object(Q.a)(Object(Q.a)({},e),{},{margin:"normal",variant:"outlined",className:t.textField}))},className:t.autocompleteTag})})}),Object(d.jsx)(l.a,{item:!0,xs:!0,sm:2,className:t.div,children:Object(d.jsx)(C,{submit:e.submit,validString:e.validString})})]})};var ce=function(){var e=Object(M.b)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=(a[1],Object(n.useState)("")),r=Object(o.a)(i,2),s=r[0],u=r[1],j=Object(n.useState)(),h=Object(o.a)(j,2),m=h[0],p=(h[1],Object(n.useState)(!0)),b=Object(o.a)(p,2),x=b[0],y=b[1],O=Object(M.c)((function(e){return e.root.currentSearchCity})),f=Object(M.c)((function(e){return e.root.currentWeather})),g=Object(M.c)((function(e){return e.root.currentForecast}));Object(M.c)((function(e){return e.root.localStorageArrayCity})),Object(n.useEffect)((function(){O?I(null,O):w()}),[]);var w=function(){console.log(q.currentWeather[0].Temperature.Metric.Value),q.currentWeather[0].WeatherIcon<10&&(q.currentWeather[0].WeatherIcon="0".concat(q.currentWeather[0].WeatherIcon));var t,a="https://developer.accuweather.com/sites/default/files/".concat(q.currentWeather[0].WeatherIcon,"-s.png"),n=[];n.push(q.currentWeather[0].WeatherText),n.push(a),n.push(q.currentWeather[0].Temperature.Metric.Value+q.currentWeather[0].Temperature.Metric.Unit),n.push("Tel Aviv"),e((t=[].concat(n),{type:H,payload:t}))},v=function(e){var t=new RegExp(/^[a-zA-Z0-9- ]*$/);return!(""===e||/\d/.test(e)||!t.test(e))},I=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t&&t.preventDefault();for(var n=q.tempStringForecast.map((function(e){return Object(T.a)({IconTheme:"https://developer.accuweather.com/sites/default/files/".concat(e.night.Icon<10?"0"+e.night.Icon:e.night.Icon,"-s.png"),date:N.a.utc(e.date).format("MMMM Do YYYY"),temptureMin:e.tempture.Minimum.Value+e.tempture.Minimum.Unit},"temptureMin",e.tempture.Maximum.Value+" "+e.tempture.Maximum.Unit)})),c=[],i=0;i<5;i++)c[i]=Object.values(n[i]);e(K([].concat(c)))};return Object(d.jsxs)(l.a,{container:!0,xs:12,children:[Object(d.jsx)(ne,{arrayCity:c,searchCity:s,onKeyPress:function(e){u(e.target.value);var t=e.target.value;if(y(!0),t.length>1){var a=v(t);y(!a)}},onSave:function(e,t){u(t)},submit:I,validString:x}),Object(d.jsx)(l.a,{container:!0,justifyContent:"center",children:Object(d.jsx)(l.a,{item:!0,sx:12,sm:12,children:Object(d.jsx)(R,{objCurrentWeather:f,addToFavorite:function(t){t.preventDefault();var a=[];a.push({ID:m,name:O||f[3],weather:f[0],tempture:f[2]}),e(G([].concat(a))),e($(!0)),window.localStorage.setItem("city",JSON.stringify([].concat(a)))}})})}),Object(d.jsx)(l.a,{container:!0,justifyContent:"center",children:void 0!=g?g.map((function(e,t){return Object(d.jsx)(l.a,{item:!0,xs:4,sm:2,style:{marginLeft:"1%"},children:Object(d.jsx)(A,{data:e},t)})})):null})]})};var ie=function(){return Object(d.jsx)(l.a,{container:!0,children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(ce,{})})})};var re=function(){return Object(d.jsx)(l.a,{container:!0,justifyContent:"center",children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(ie,{})})})},oe=a(101),se=a(75),le=a.n(se),ue=Object(m.a)({root:{maxWidth:320,marginLeft:"13.5%",marginTop:"10%"},link:{textDecoration:"none"},btnsGrid:{display:"flex",justifyContent:"center"},btn:{marginLeft:"2%"},headline:{fontSize:"20px",fontFamily:"serif"},typography:{fontFamily:"serif",fontSize:"17px"}});var je=function(e){var t=ue(),a=Object(M.b)();return Object(d.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(d.jsxs)(F.a,{className:t.root,children:[Object(d.jsx)(U.a,{children:Object(d.jsxs)(k.a,{children:[Object(d.jsxs)(h.a,{gutterBottom:!0,className:t.headline,children:[Object(d.jsx)("strong",{children:" Current City:"}),Object(d.jsx)(h.a,{style:{fontSize:"20px"},children:e.objLocal.name})]}),Object(d.jsxs)(h.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Current Weather:"}),Object(d.jsx)(h.a,{children:e.objLocal.weather})]}),Object(d.jsxs)(h.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Degree:"}),Object(d.jsx)(h.a,{children:e.objLocal.tempture})]})]})}),Object(d.jsxs)(l.a,{item:!0,className:t.btnsGrid,children:[Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var t=parseInt(e.target.attributes.getNamedItem("data-id").value),n=JSON.parse(window.localStorage.getItem("city"));n.splice(t,1),localStorage.clear(),window.localStorage.setItem("city",JSON.stringify(n)),a(G(Object(oe.a)(n))),a($(!1)),a(Z(!1))},"data-id":e.index,className:le.a.button4,children:"Delete"}),Object(d.jsx)(u.b,{to:"/",className:t.link,children:Object(d.jsx)("button",{onClick:function(){var t;a((t=e.objLocal.name,{type:Y,payload:t}))},className:le.a.button5,children:"Main Page"})})]})]})})},he=a(207),me=a(205);function de(e){return Object(d.jsx)(me.a,Object(Q.a)({elevation:6,variant:"filled"},e))}var pe=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},button:{backgroundColor:"#2196F3","&:hover":{backgroundColor:"#fff",color:"#3c52b2"}},message:{"&:hover":{backgroundColor:"#fff",color:"#3c52b2"}}}}));var be=function(){var e=pe(),t=c.a.useState(!1),a=Object(o.a)(t,2),n=a[0],i=a[1],r=function(e,t){"clickaway"!==t&&i(!1)};return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(I.a,{variant:"outlined",onClick:function(){i(!0)},className:e.button,children:"Open Notification"}),Object(d.jsx)(he.a,{open:n,autoHideDuration:6e3,onClose:r,children:Object(d.jsx)(de,{onClose:r,severity:"success",children:"No Data to Display"})}),Object(d.jsx)(de,{severity:"info",className:e.message,children:"This is an information message! "})]})},xe=Object(m.a)({root:{marginTop:"2%"},title:{color:"#306F8C",fontFamily:"Raleway",fontSize:"58px",fontFeight:"800",lineHeight:"72px",margin:"0 0 24px",textTransform:"uppercase"},div:{marginTop:"5%",justifyContent:"none",display:"flex"},messageContainer:{justifyContent:"center"},message:{marginTop:"10%"}});var ye=function(){var e=Object(M.b)(),t=xe(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=(c[0],c[1]),r=Object(M.c)((function(e){return e.root.localStorageArrayCity})),s=Object(M.c)((function(e){return e.root.isFavouriteEmpty}));return Object(n.useEffect)((function(){localStorage.length>0&&(i(!0),e(G(JSON.parse(window.localStorage.getItem("city")))),e(Z(!0)))}),[]),Object(d.jsxs)(l.a,{container:!0,children:[Object(d.jsx)(l.a,{container:!0,justifyContent:"center",className:t.root,children:Object(d.jsx)(l.a,{item:!0,children:Object(d.jsx)(h.a,{variant:"h4",color:"primary",className:t.title,children:"Welcome to Favourite Page"})})}),s?r.map((function(e,a){return Object(d.jsxs)(l.a,{item:!0,xs:4,sm:6,className:t.div,children:[Object(d.jsx)(je,{objLocal:e,index:a})," "]})})):Object(d.jsx)(l.a,{container:!0,className:t.messageContainer,children:Object(d.jsx)(l.a,{item:!0,className:t.message,sx:12,sm:6,children:Object(d.jsx)(h.a,{children:Object(d.jsx)(be,{})})})})]})},Oe=(a(148),Object(m.a)({rootNav:{backgroundColor:"#306F8C"},grey:{backgroundColor:"#e3e3e3",height:"170vh",overflowY:"hidden"},black:{backgroundColor:"black",height:"170vh"}}));var fe=function(){var e=Oe(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(s.a,{className:c?e.black:e.grey,children:Object(d.jsx)(l.a,{item:!0,xs:12,children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(l.a,{container:!0,className:e.rootNav,children:Object(d.jsx)(v,{handleChange:function(){i((function(e){return!e}))},checked:c})}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.a,{from:"/Philip-Kouchner-07-20-2021",to:"/"}),Object(d.jsx)(j.b,{exact:!0,path:"/",children:Object(d.jsx)(re,{})}),Object(d.jsx)(j.b,{path:"/favorite",children:Object(d.jsx)(ye,{})})]})]})})})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,210)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},we=a(53),ve=a(100),Te={currentWeather:[],currentForecast:[],localStorageArrayCity:[],currentSearchCity:"",isToAddFavourite:!1,isFavouriteEmpty:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(Q.a)(Object(Q.a)({},e),{},{currentWeather:t.payload});case _:return Object(Q.a)(Object(Q.a)({},e),{},{currentForecast:t.payload});case z:return Object(Q.a)(Object(Q.a)({},e),{},{localStorageArrayCity:t.payload});case Y:return Object(Q.a)(Object(Q.a)({},e),{},{currentSearchCity:t.payload});case B:return Object(Q.a)(Object(Q.a)({},e),{},{isToAddFavourite:t.payload});case J:return Object(Q.a)(Object(Q.a)({},e),{},{isFavouriteEmpty:t.payload});default:return e}},Pe=Object(we.combineReducers)({root:Ie}),Ce=Object(we.createStore)(Pe,Object(ve.composeWithDevTools)());r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(M.a,{store:Ce,children:Object(d.jsx)(fe,{})})}),document.getElementById("root")),ge()},32:function(e,t){e.exports={tempStringForecast:[{date:"2021-07-20T07:00:00-05:00",tempture:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:76,Unit:"F",UnitType:18}},night:{Icon:5,IconPhrase:"Mostly cloudy w/ showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"}},{date:"2021-07-21T07:00:00-05:00",tempture:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},night:{Icon:42,IconPhrase:"Mostly cloudy w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"}},{date:"2021-07-22T07:00:00-05:00",tempture:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},night:{Icon:12,IconPhrase:"Showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"}},{date:"2021-07-23T07:00:00-05:00",tempture:{Minimum:{Value:54,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},night:{Icon:12,IconPhrase:"Showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"}},{date:"2021-07-24T07:00:00-05:00",tempture:{Minimum:{Value:53,Unit:"F",UnitType:18},Maximum:{Value:76,Unit:"F",UnitType:18}},night:{Icon:7,IconPhrase:"Mostly clear",HasPrecipitation:!1}}],forecastWeather:{Headline:{EffectiveDate:"2021-07-25T08:00:00-05:00",EffectiveEpochDate:1627218e3,Severity:4,Text:"Pleasant Sunday",Category:"mild",EndDate:null,EndEpochDate:null,MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/extended-weather-forecast/234000?lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"},DailyForecasts:[{Date:"2021-07-20T07:00:00-05:00",EpochDate:1626782400,Temperature:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:76,Unit:"F",UnitType:18}},Day:{Icon:17,IconPhrase:"Partly sunny w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:40,IconPhrase:"Mostly cloudy w/ showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"},{Date:"2021-07-21T07:00:00-05:00",EpochDate:1626868800,Temperature:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},Day:{Icon:17,IconPhrase:"Partly sunny w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"},Night:{Icon:42,IconPhrase:"Mostly cloudy w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us"},{Date:"2021-07-22T07:00:00-05:00",EpochDate:1626955200,Temperature:{Minimum:{Value:57,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},Day:{Icon:17,IconPhrase:"Partly sunny w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"},Night:{Icon:12,IconPhrase:"Showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Moderate"},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us"},{Date:"2021-07-23T07:00:00-05:00",EpochDate:1627041600,Temperature:{Minimum:{Value:54,Unit:"F",UnitType:18},Maximum:{Value:73,Unit:"F",UnitType:18}},Day:{Icon:17,IconPhrase:"Partly sunny w/ t-storms",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:12,IconPhrase:"Showers",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us"},{Date:"2021-07-24T07:00:00-05:00",EpochDate:1627128e3,Temperature:{Minimum:{Value:53,Unit:"F",UnitType:18},Maximum:{Value:76,Unit:"F",UnitType:18}},Day:{Icon:4,IconPhrase:"Intermittent clouds",HasPrecipitation:!0,PrecipitationType:"Rain",PrecipitationIntensity:"Light"},Night:{Icon:34,IconPhrase:"Mostly clear",HasPrecipitation:!1},Sources:["AccuWeather"],MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us"}]},currentWeather:[{LocalObservationDateTime:"2021-07-21T02:10:00-05:00",EpochTime:1626851400,WeatherText:"A shower",WeatherIcon:12,HasPrecipitation:!0,PrecipitationType:"Rain",IsDayTime:!1,Temperature:{Metric:{Value:15.1,Unit:"C",UnitType:17},Imperial:{Value:59,Unit:"F",UnitType:18}},MobileLink:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/current-weather/234000?lang=en-us",Link:"http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/current-weather/234000?lang=en-us"}]}},75:function(e,t,a){e.exports={button4:"mystyle_button4__1FvLe",button5:"mystyle_button5__xm9VY"}}},[[149,1,2]]]);
//# sourceMappingURL=main.82d21fae.chunk.js.map