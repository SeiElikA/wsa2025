import{d as v,o as a,c as n,a as s,u as h,t as e,_ as u,F as f,r as y,n as b,b as S,e as j,f as B,g as i,i as C,h as T,w as M,j as D,k as P,l as V,A as F,m as R,S as z,p as E,q as N,s as L,v as H,x as W,P as I}from"./index-BT-J2Fjq.js";import{P as O}from"./PageTab-DtunMM-2.js";import{f as Y}from"./free-mode-B-BN4T18.js";const q={class:"second-slide",id:"host"},U={class:"image-row",ref:"topRow"},X={"data-aos":"fade-up",class:"top-first-rest",ref:"topFirstRest"},G=["src"],K=["src"],J=["src"],Q={class:"host-copy"},Z={class:"welcome-title","data-aos":"fade-right"},x={class:"title"},ss={class:"subtitle"},ts={class:"welcome-desc"},os={class:"image-row",ref:"bottomRow"},ls={"data-aos":"fade-up","data-aos-offset":"0",class:"bottom-rest",ref:"bottomRest"},is=["src"],es=["src"],as=["src"],ns=v({__name:"HostBanner",setup(m){const t=Array.from({length:6},(d,o)=>`/wsa2025/images/wsa/host_section01_${(o+1).toString().padStart(2,"0")}.jpg`);return(d,o)=>(a(),n("div",q,[s("div",U,[s("div",X,[s("img",{class:"image-item",src:h(t)[0],alt:"banner2"},null,8,G),s("img",{class:"image-item",src:h(t)[2],alt:"banner2"},null,8,K),s("img",{class:"image-item",src:h(t)[3],alt:"banner3"},null,8,J)],512)],512),s("div",Q,[o[0]||(o[0]=s("div",{"data-aos":"example-anim1",class:"welcome-img"},null,-1)),s("div",Z,[s("h4",x,e(d.$t("host.welcome")),1),s("h2",ss,e(d.$t("host.welcome_sub")),1)]),s("p",ts,e(d.$t("host.content")),1)]),s("div",os,[s("div",ls,[s("img",{class:"image-item",src:h(t)[4],alt:"banner4"},null,8,is),s("img",{class:"image-item",src:h(t)[5],alt:"banner5"},null,8,es),s("img",{class:"image-item",src:h(t)[1],alt:"banner6"},null,8,as)],512)],512)]))}}),cs=u(ns,[["__scopeId","data-v-b80a0bff"]]),_s={class:"coin-group"},ds={class:"imgs"},rs={class:"coin-label"},ms=v({__name:"HostCurrencyCoin",props:{label:{},imgs:{}},setup(m){const t=m;return(d,o)=>(a(),n("div",_s,[s("div",ds,[(a(!0),n(f,null,y(t.imgs,(l,r)=>(a(),n("div",{class:"coin-img",key:r,style:b({backgroundImage:`url(${l})`})},null,4))),128))]),s("div",rs,e(t.label),1)]))}}),$=u(ms,[["__scopeId","data-v-704c2c43"]]),hs={class:"bill-group"},us={class:"bill-label"},$s=v({__name:"HostCurrencBill",props:{label:{},img:{}},setup(m){const t=m;return(d,o)=>(a(),n("div",hs,[s("div",{class:"bill-img",style:b({backgroundImage:`url(${t.img})`})},null,4),s("div",us,e(t.label),1)]))}}),p=u($s,[["__scopeId","data-v-92756c42"]]),ps={class:"host-currency",id:"currency"},vs={class:"container"},gs={class:"currency-title"},bs={class:"currency-desc"},ws={class:"column right-panel"},fs={class:"content"},ys={key:0,class:"currency-table"},ks={class:"row"},Hs={class:"col"},Is={class:"col"},Cs={class:"row"},Ss={class:"col"},Ts={class:"col"},Ms={class:"col"},As={key:1,class:"currency-table currency-table--mb"},Ls={class:"row"},js={class:"col"},Bs={class:"col"},Ds={class:"col"},Ps={class:"col"},Vs={class:"col"},Fs={key:0,class:"currency-table"},Rs={class:"row"},zs={class:"col"},Es={class:"row"},Ns={class:"col"},Ws={class:"col"},Os={class:"row"},Ys={class:"col"},qs={class:"col"},Us={key:1,class:"currency-table currency-table--mb"},Xs={class:"row"},Gs={class:"col"},Ks={class:"col"},Js={class:"col"},Qs={class:"col"},Zs={class:"col"},xs=v({__name:"HostCurrency",setup(m){const t=S(null),d=S(!1),o=C("isDesktop"),l=C("isMobile"),r=["/wsa2025/images/wsa/host_section02_1.png","/wsa2025/images/wsa/host_section02_5.png","/wsa2025/images/wsa/host_section02_10.png","/wsa2025/images/wsa/host_section02_20.png","/wsa2025/images/wsa/host_section02_50.png"],c=["/wsa2025/images/wsa/host_section02_100.jpg","/wsa2025/images/wsa/host_section02_200.jpg","/wsa2025/images/wsa/host_section02_500.jpg","/wsa2025/images/wsa/host_section02_1000.jpg","/wsa2025/images/wsa/host_section02_2000.jpg"];function w(){if(!(o!=null&&o.value)){d.value=!0;return}if(t.value){const{top:_}=t.value.getBoundingClientRect();d.value=_<0}}return j(()=>{window.addEventListener("scroll",w)}),B(()=>{window.removeEventListener("scroll",w)}),(_,k)=>(a(),n("div",ps,[s("div",vs,[s("aside",{class:"column sidebar",style:b({position:d.value?"static":"sticky"})},[k[0]||(k[0]=s("div",{class:"sitebar-light"},null,-1)),s("h4",gs,e(_.$t("host.currency_title")),1),s("p",bs,e(_.$t("host.currency_desc")),1)],4),s("div",ws,[s("div",fs,[h(l)?(a(),n("div",As,[s("div",Ls,[s("div",js,[i($,{label:_.$t("host.coin50"),imgs:[r[4]]},null,8,["label","imgs"])]),s("div",Bs,[i($,{label:_.$t("host.coin20"),imgs:[r[3]]},null,8,["label","imgs"])]),s("div",Ds,[i($,{label:_.$t("host.coin10"),imgs:[r[2]]},null,8,["label","imgs"])]),s("div",Ps,[i($,{label:_.$t("host.coin5"),imgs:[r[1]]},null,8,["label","imgs"])]),s("div",Vs,[i($,{label:_.$t("host.coin1"),imgs:[r[0]]},null,8,["label","imgs"])])])])):(a(),n("div",ys,[s("div",ks,[s("div",Hs,[i($,{label:_.$t("host.coin50"),imgs:[r[4]]},null,8,["label","imgs"])]),s("div",Is,[i($,{label:_.$t("host.coin20"),imgs:[r[3]]},null,8,["label","imgs"])])]),s("div",Cs,[s("div",Ss,[i($,{label:_.$t("host.coin10"),imgs:[r[2]]},null,8,["label","imgs"])]),s("div",Ts,[i($,{label:_.$t("host.coin5"),imgs:[r[1]]},null,8,["label","imgs"])]),s("div",Ms,[i($,{label:_.$t("host.coin1"),imgs:[r[0]]},null,8,["label","imgs"])])])]))]),s("div",{ref_key:"lastCurrency",ref:t,class:"content"},[h(l)?(a(),n("div",Us,[s("div",Xs,[s("div",Gs,[i(p,{label:_.$t("host.banknote2000"),img:c[4]},null,8,["label","img"])]),s("div",Ks,[i(p,{label:_.$t("host.banknote1000"),img:c[3]},null,8,["label","img"])]),s("div",Js,[i(p,{label:_.$t("host.banknote500"),img:c[2]},null,8,["label","img"])]),s("div",Qs,[i(p,{label:_.$t("host.banknote200"),img:c[1]},null,8,["label","img"])]),s("div",Zs,[i(p,{label:_.$t("host.banknote100"),img:c[0]},null,8,["label","img"])])])])):(a(),n("div",Fs,[s("div",Rs,[s("div",zs,[i(p,{label:_.$t("host.banknote2000"),img:c[4]},null,8,["label","img"])])]),s("div",Es,[s("div",Ns,[i(p,{label:_.$t("host.banknote1000"),img:c[3]},null,8,["label","img"])]),s("div",Ws,[i(p,{label:_.$t("host.banknote500"),img:c[2]},null,8,["label","img"])])]),s("div",Os,[s("div",Ys,[i(p,{label:_.$t("host.banknote200"),img:c[1]},null,8,["label","img"])]),s("div",qs,[i(p,{label:_.$t("host.banknote100"),img:c[0]},null,8,["label","img"])])])]))],512)])]),k[1]||(k[1]=s("div",{class:"container container--mb"},null,-1))]))}}),st=u(xs,[["__scopeId","data-v-18414dd7"]]),tt={},ot={class:"power",id:"electricity"},lt={class:"power-container"},it={class:"power-title"};function et(m,t){return a(),n("div",ot,[s("div",lt,[s("aside",null,[t[0]||(t[0]=s("div",{class:"sitebar-light"},null,-1)),s("div",it,[s("h4",null,e(m.$t("host.power_title")),1),s("p",null,e(m.$t("host.power_desc")),1)]),t[1]||(t[1]=s("div",{class:"power-desc"},null,-1))]),t[2]||(t[2]=s("div",{class:"power-content"},[s("div",{class:"power-img"})],-1))])])}const at=u(tt,[["render",et],["__scopeId","data-v-3c8bb2b8"]]),nt={class:"climate-item"},ct={class:"climate-item__icon"},_t=["src"],dt={class:"climate-item__copy"},rt=v({__name:"HostClimateItem",props:{icon:{},title:{},desc:{}},setup(m){const t=m;return(d,o)=>(a(),n("div",nt,[s("div",ct,[s("img",{src:t.icon,alt:"icon"},null,8,_t)]),s("div",dt,[s("h4",null,e(t.title),1),s("p",null,e(t.desc),1)])]))}}),g=u(rt,[["__scopeId","data-v-3d54e10b"]]),mt={class:"climate",id:"climate"},ht={class:"climate-container"},ut={class:"climate-title"},$t={key:0,class:"climate-content"},pt={class:"row"},vt={class:"col"},gt={class:"row"},bt={class:"col"},wt={class:"col"},ft={class:"row"},yt={class:"col"},kt={class:"col"},Ht={key:1,class:"climate-content"},It={class:"col"},Ct=v({__name:"HostClimate",setup(m){const t={temperature:"/wsa2025/images/wsa/icon/host/mdi_temperature.svg",rain:"/wsa2025/images/wsa/icon/host/mdi_weather-heavy-rain.svg",sun:"/wsa2025/images/wsa/icon/host/mdi_weather-sunny.svg",humidity:"/wsa2025/images/wsa/icon/host/mdi_humidity-alert.svg",wind:"/wsa2025/images/wsa/icon/host/mdi_weather-windy.svg"},d=C("isDesktop");return(o,l)=>(a(),n("div",mt,[s("div",ht,[l[0]||(l[0]=s("div",{class:"title-light"},null,-1)),s("div",ut,e(o.$t("host.climate_title")),1),h(d)?(a(),n("div",$t,[s("div",pt,[s("div",vt,[i(g,{icon:t.temperature,title:o.$t("host.climate_title1"),desc:o.$t("host.climate_desc1")},null,8,["icon","title","desc"])])]),s("div",gt,[s("div",bt,[i(g,{icon:t.rain,title:o.$t("host.climate_title2"),desc:o.$t("host.climate_desc2")},null,8,["icon","title","desc"])]),s("div",wt,[i(g,{icon:t.sun,title:o.$t("host.climate_title3"),desc:o.$t("host.climate_desc3")},null,8,["icon","title","desc"])])]),s("div",ft,[s("div",yt,[i(g,{icon:t.humidity,title:o.$t("host.climate_title4"),desc:o.$t("host.climate_desc4")},null,8,["icon","title","desc"])]),s("div",kt,[i(g,{icon:t.wind,title:o.$t("host.climate_title5"),desc:o.$t("host.climate_desc5")},null,8,["icon","title","desc"])])])])):(a(),n("div",Ht,[(a(!0),n(f,null,y(Object.keys(t),(r,c)=>(a(),n("div",{class:"row",key:r},[s("div",It,[i(g,{icon:t[r],title:o.$t(`host.climate_title${c+1}`),desc:o.$t(`host.climate_desc${c+1}`)},null,8,["icon","title","desc"])])]))),128))]))])]))}}),St=u(Ct,[["__scopeId","data-v-ecb3c34b"]]),Tt={class:"host-skill",id:"skill"},Mt={class:"host-skill-container"},At={class:"image-col"},Lt={class:"copy-col"},jt=["innerHTML"],Bt={class:"desc"},Dt=["innerHTML"],Pt={class:"image-col"},Vt={key:0,class:"skill-swiper"},Ft=v({__name:"HostSkill",setup(m){const t=T(()=>Array(6).fill(0).map((l,r)=>`/wsa2025/images/wsa/host_section04_${(r+1).toString().padStart(2,"0")}.jpg`)),d=C("isDesktop"),o={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0},freemode:!0,spaceBetween:8,slidesPerView:1.5,breakpoints:{744:{slidesPerView:3}},modules:[F,Y]};return(l,r)=>(a(),n("div",Tt,[s("div",Mt,[s("div",At,[(a(!0),n(f,null,y(t.value.slice(0,3),c=>(a(),n("div",{class:"image-item",key:c,style:b({backgroundImage:`url(${c})`})},null,4))),128))]),s("div",Lt,[s("h2",{class:"title",innerHTML:l.$t("host.skill_title")},null,8,jt),s("p",Bt,e(l.$t("host.skill_desc")),1),s("p",{class:"desc link",innerHTML:l.$t("host.skill_link_text")},null,8,Dt)]),s("div",Pt,[(a(!0),n(f,null,y(t.value.slice(3),c=>(a(),n("div",{class:"image-item",key:c,style:b({backgroundImage:`url(${c})`})},null,4))),128))]),h(d)?V("",!0):(a(),n("div",Vt,[i(h(E),D(P(o)),{default:M(()=>[(a(!0),n(f,null,y(t.value,(c,w)=>(a(),R(h(z),{key:w,class:"slide"},{default:M(()=>[s("div",{style:b({backgroundImage:`url(${c})`}),class:"img-slide",alt:"skill image decoration"},null,4)]),_:2},1024))),128))]),_:1},16)]))])]))}}),Rt=u(Ft,[["__scopeId","data-v-a31d380a"]]),zt=["id"],Et={class:"host-wda-container"},Nt={class:"host-wda-title"},Wt={class:"host-wda-content"},Ot=["innerHTML"],Yt=v({__name:"HostWDA",setup(m){return(t,d)=>(a(),n("div",{class:"host-wda",id:h(N).WDA},[s("div",Et,[s("div",Nt,[s("h1",null,e(t.$t("host.wda_title")),1)]),s("div",Wt,[s("p",{innerHTML:t.$t("host.wda_content")},null,8,Ot)])])],8,zt))}}),qt=u(Yt,[["__scopeId","data-v-a33556ef"]]),Ut="/wsa2025/images/ri_global-fill.svg",A="/wsa2025/images/ri_map-pin-fill.svg",Xt={class:"location",id:"location"},Gt={class:"location-container"},Kt={class:"location-subtitle"},Jt={class:"location-title"},Qt={class:"info-bar"},Zt=["src"],xt={class:"info-bar__desc-container"},so={class:"info-bar__desc"},to={class:"info-bar__link",href:"https://www.tainex.com.tw/",target:"_blank"},oo={class:"info-bar"},lo={class:"info-bar__detail"},io={class:"hall-info"},eo={class:"location-row"},ao={class:"floor-name"},no={class:"location-row location-row--with-list"},co={class:"floor-name"},_o={class:"floor-name__list"},ro={class:"info-bar"},mo={class:"info-bar__detail"},ho={class:"hall-info"},uo={class:"location-row"},$o={class:"floor-name"},po={class:"location-row location-row--with-list"},vo={class:"floor-name"},go={class:"floor-name__list"},bo={class:"location-row location-row--with-list"},wo={class:"floor-name"},fo={class:"floor-name__list"},yo="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3358992883273!2d121.61554097708489!3d25.056601877801867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2z5Y-w5YyX5Y2X5riv5bGV6Ka96aSoMemkqA!5e0!3m2!1szh-TW!2stw!4v1738190342523!5m2!1szh-TW!2stw",ko="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.671791369028!2d121.618116!3d25.056602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2sTaipei%20Nangang%20Exhibition%20Center%20Hall%201!5e0!3m2!1sen!2stw!4v1739504746300!5m2!1sen!2stw",Ho=v({__name:"HostLocation",setup(m){const{locale:t}=L(),d=T(()=>t.value==="en"?ko:yo);return(o,l)=>(a(),n("div",Xt,[s("div",Gt,[s("header",null,[s("h4",Kt,e(o.$t("competition.location_subtitle")),1),s("h4",Jt,e(o.$t("competition.location_title")),1)]),s("div",Qt,[s("iframe",{src:d.value,width:"600",height:"356",style:{border:"0"},class:"info-bar__map",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,8,Zt),s("div",xt,[s("p",so,e(o.$t("competition.location_map_desc")),1),s("a",to,[l[0]||(l[0]=s("img",{src:Ut,alt:"map-pin"},null,-1)),H(" "+e(o.$t("host.location_visit_website")),1)])])]),s("div",oo,[l[4]||(l[4]=s("div",{class:"info-bar__img info-bar__img--hall1"},null,-1)),s("div",lo,[s("div",io,[l[1]||(l[1]=s("img",{class:"hall-info__pin",src:A,alt:"map-pin"},null,-1)),s("span",null,e(o.$t("competition.location_hall1")),1)]),s("div",eo,[l[2]||(l[2]=s("div",{class:"floor"},"4F",-1)),s("div",ao,e(o.$t("competition.location_hall1_floor1")),1)]),s("div",no,[l[3]||(l[3]=s("div",{class:"floor"},"1F",-1)),s("div",co,[H(e(o.$t("competition.location_hall1_floor2"))+" ",1),s("ul",_o,[s("li",null,e(o.$t("competition.location_hall1_floor2_list1")),1),s("li",null,e(o.$t("competition.location_hall1_floor2_list2")),1),s("li",null,e(o.$t("competition.location_hall1_floor2_list3")),1)])])])])]),s("div",ro,[l[9]||(l[9]=s("div",{class:"info-bar__img info-bar__img--hall2"},null,-1)),s("div",mo,[s("div",ho,[l[5]||(l[5]=s("img",{class:"hall-info__pin",src:A,alt:"map-pin"},null,-1)),s("span",null,e(o.$t("competition.location_hall2")),1)]),s("div",uo,[l[6]||(l[6]=s("div",{class:"floor"},"7F",-1)),s("div",$o,e(o.$t("competition.location_hall2_floor1")),1)]),s("div",po,[l[7]||(l[7]=s("div",{class:"floor"},"4F",-1)),s("div",vo,[H(e(o.$t("competition.location_hall2_floor2"))+" ",1),s("ul",go,[s("li",null,e(o.$t("competition.location_hall2_floor2_list1")),1),s("li",null,e(o.$t("competition.location_hall2_floor2_list2")),1)])])]),s("div",bo,[l[8]||(l[8]=s("div",{class:"floor"},"1F",-1)),s("div",wo,[H(e(o.$t("competition.location_hall2_floor3"))+" ",1),s("ul",fo,[s("li",null,e(o.$t("competition.location_hall2_floor3_list1")),1),s("li",null,e(o.$t("competition.location_hall2_floor3_list2")),1)])])])])])])]))}}),Io=u(Ho,[["__scopeId","data-v-43096c81"]]),Co={class:"host"},So=v({__name:"HostView",setup(m){const{t}=L(),d=T(()=>[{label:t("page_tabs.host_tab_01"),value:I.Skill},{label:t("page_tabs.host_tab_02"),value:I.Taipei},{label:t("page_tabs.host_tab_03"),value:I.WDA},{label:t("page_tabs.host_tab_04"),value:I.Location}]),o=W(),l=S(d.value[0].value),r=c=>{o.push({name:"host",hash:c})};return(c,w)=>(a(),n("div",Co,[i(O,{tabs:d.value,"active-tab":l.value,"onUpdate:activeTab":r},null,8,["tabs","active-tab"]),i(Rt),i(cs),i(st),i(at),i(St),i(qt),i(Io)]))}}),Lo=u(So,[["__scopeId","data-v-0f1e1b54"]]);export{Lo as default};
