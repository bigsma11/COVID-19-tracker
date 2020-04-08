(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{204:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(69),o=t.n(c),i=t(9),l=t(38),d=t.n(l),u=t(70),s=t.n(u),m=t(221),f=t(225),v=t(222),p=t(223),b=t(71),g=t.n(b),E=t(72),h=t.n(E),_=t(39),C=t.n(_);var y=function(e){var a=e.name,t=e.number,n=e.updateDate,c=e.message;return r.a.createElement(m.a,{item:!0,component:f.a,xs:12,md:3,className:h()(C.a.card,C.a[a])},r.a.createElement(v.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},a[0].toUpperCase()+a.slice(1)),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:t,duration:2.5,separator:","})),r.a.createElement(p.a,{color:"textSecondary"},n),r.a.createElement(p.a,{variant:"body2"},"Number of ",c," COVID-19")))};var j=function(e){var a=e.lastUpdate,t=e.confirmed,n={confirmed:t,recovered:e.recovered,deaths:e.deaths},c=["active cases of","recoveries from","deaths caused by"],o=new Date(a).toDateString();return t?r.a.createElement("div",{className:s.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},Object.keys(n).map((function(e,a){return r.a.createElement(y,{name:e,number:n[e].value,key:e,updateDate:o,message:c[a]})})))):r.a.createElement("div",null,"Loading cards data...")},w=t(41),x=t.n(w),O=t(77),k=t(78),S=t.n(k),D="https://covid19.mathdro.id/api",N=function(e,a){var t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],o=r[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),u=d[0],s=d[1];return Object(n.useEffect)((function(){var t=!1;return function(){var n=Object(O.a)(x.a.mark((function n(){var r,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!1),r=e,a&&(r="".concat(e,"/countries/").concat(a)),n.prev=3,n.next=6,S()(r);case 6:c=n.sent,t||o(c.data),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),t||s(!0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(){return n.apply(this,arguments)}}()(),function(){t=!0}}),[e,a]),[c,u]},I=t(42),L=t(80),F=t.n(L);var J=function(e){var a=e.data,t=a.confirmed,n=a.deaths,c=a.recovered,o=e.country,l=N("".concat(D,"/daily")),d=Object(i.a)(l,2),u=d[0],s=d[1];if(!u)return r.a.createElement("div",null,"Loading dailyData...");var m=u.map((function(e){var a=e.confirmed,t=e.deaths,n=e.reportDate;return{confirmed:a.total,deaths:t.total,date:n}})),f=r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}),v=t&&r.a.createElement(I.a,{data:{labels:["Infected","Recovered","deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,c.value,n.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}});return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("div",null,"Something went wrong when fetching daily data"),r.a.createElement("div",{className:F.a.container},o?v:f))},P=t(226),V=t(224),A=t(81),B=t.n(A);var R=function(e){var a=e.onCountryChange,t=N("".concat(D,"/countries")),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("div",null,"Something went wrong when fetch countries data"),c?r.a.createElement(P.a,{className:B.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),c.countries.map((function(e){var a=e.name;return r.a.createElement("option",{key:a,value:a},a)})))):r.a.createElement("div",null,"Loading countries data..."))},U=t(82),G=t.n(U);var M=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],o=N(D,t),l=Object(i.a)(o,2),u=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("div",null,"Something went wrong when fetching basic data"),u?r.a.createElement("div",{className:d.a.container},r.a.createElement("img",{src:G.a,alt:"covid",className:d.a.image}),r.a.createElement(j,u),r.a.createElement(R,{onCountryChange:function(e){c(e)}}),r.a.createElement(J,{data:u,country:t})):r.a.createElement("div",null,"Loading basic data..."))};o.a.render(r.a.createElement(M,null),document.getElementById("root"))},38:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},39:function(e,a,t){e.exports={card:"Card_card__1eE8R",confirmed:"Card_confirmed__19oJa",recovered:"Card_recovered__16_In",deaths:"Card_deaths__3ViEi"}},70:function(e,a,t){e.exports={container:"Cards_container__3bjn6"}},80:function(e,a,t){e.exports={container:"Chart_container__1PIOn"}},81:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,a,t){e.exports=t.p+"static/media/covid.d7265326.png"},84:function(e,a,t){e.exports=t(204)}},[[84,1,2]]]);
//# sourceMappingURL=main.0875127d.chunk.js.map