!function t(s,o,e){function n(i,r){if(!o[i]){if(!s[i]){var c="function"==typeof require&&require;if(!r&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var p=o[i]={exports:{}};s[i][0].call(p.exports,function(t){var o=s[i][1][t];return n(o?o:t)},p,p.exports,t,s,o,e)}return o[i].exports}for(var a="function"==typeof require&&require,i=0;i<e.length;i++)n(e[i]);return n}({1:[function(t,s,o){var e,n;n=t("jade/box-nav"),s.exports=e=function(){function t(t,s,o){var e;this.id=o,e=$(n({nav:s})),t.append(e),$(".nav-item",e).on("click",function(t){return function(s){return t.onClick(s.currentTarget.getAttribute("data-event"))}}(this))}return t.prototype.onClick=function(t){return PubSub.publish(t,this.id)},t}()},{"jade/box-nav":10}],2:[function(t,s,o){var e,n=function(t,s){return function(){return t.apply(s,arguments)}};s.exports=e=function(){function t(t,s){this.data=s,this.resizeSubContent=n(this.resizeSubContent,this),this.hideCurrentSubContent=n(this.hideCurrentSubContent,this),shadowIconsInstance.svgReplaceWithString(pxSvgIconString,t),this.$subContent=$(".sub-content",this.$node),this.$sub=$(".sub",this.$node),this.fadeOutDuration=300,this.animateDuration=250}return t.prototype.hideCurrentSubContent=function(t,s,o){var e;return null==s&&(s=!0),null==o&&(o=!1),null==this.subView?void t():(e=this,this.$subContent.css({opacity:0}),setTimeout(function(){return s&&e.destroySubItem(),o?e.resizeSubContent(null,t):t()},this.fadeOutDuration))},t.prototype.resizeSubContent=function(t,s){return null!=t&&this.$subContent.addClass(t),this.$sub.css({height:this.$subContent[0].offsetHeight}),setTimeout(function(t){return function(){return t.$subContent.css({opacity:1}),null!=s?s():void 0}}(this),this.animateDuration)},t.prototype.closeSubContent=function(){return $(".sub",this.$node).css({height:0})},t.prototype.destroySubItem=function(){return null!=this.subView?(this.subView.destroy(),this.$subContent.empty(),this.$subContent.attr("class","sub-content"),this.subView=null):void 0},t.prototype.buildStats=function(t){var s;return this.stats=new nanobox.HourlyStats(t,nanobox.HourlyStats.strip),s=[{id:"cpu_used",nickname:"CPU",name:"CPU Used"},{id:"ram_used",nickname:"RAM",name:"RAM Used"},{id:"swap_used",nickname:"SWAP",name:"Swap Used"},{id:"disk_used",nickname:"DISK",name:"Disk Used"}],this.stats.build()},t.prototype.updateLiveStats=function(t){return this.stats.updateLiveStats(t)},t.prototype.updateHistoricStats=function(t){return this.stats.updateHistoricStats(t)},t}()},{}],3:[function(t,s,o){var e,n,a,i,r=function(t,s){function o(){this.constructor=t}for(var e in s)c.call(s,e)&&(t[e]=s[e]);return o.prototype=s.prototype,t.prototype=new o,t.__super__=s.prototype,t},c={}.hasOwnProperty;e=t("boxes/box"),n=t("box-nav"),i=t("jade/cluster-box"),s.exports=a=function(t){function s(t,o){var e;this.data=o,this.data.clusterName=this.makeClusterName(this.data.instances),this.data.totalMembers=this.data.instances.length,e=$(i(this.data)),t.append(e),this.buildNav(e),s.__super__.constructor.call(this,e,this.data),this.buildStats($(".stats",e))}return r(s,t),s.prototype.buildNav=function(t){var s;return s=[{txt:"App Component",icon:"app-component",event:"SHOW.APP_COMPONENTS"},{txt:"Instance Health",icon:"instance-health",event:"SHOW.INSTANCES"},{txt:"Scale",icon:"scale",event:"SHOW.SCALE"},{txt:"Stats",icon:"stats",event:"SHOW.STATS"}],this.nav=new n($(".nav-holder",t),s,this.data.id)},s.prototype.makeClusterName=function(t){return t[0].hostName+" - "+t[t.length-1].hostName},s}(e)},{"box-nav":1,"boxes/box":2,"jade/cluster-box":11}],4:[function(t,s,o){var e,n,a,i,r=function(t,s){function o(){this.constructor=t}for(var e in s)c.call(s,e)&&(t[e]=s[e]);return o.prototype=s.prototype,t.prototype=new o,t.__super__=s.prototype,t},c={}.hasOwnProperty;e=t("boxes/box"),n=t("box-nav"),i=t("jade/component-box"),s.exports=a=function(t){function s(t,o){var e;this.data=o,e=$(i(this.data)),t.append(e),this.data.isPlatformComponent?this.buildPlatformComponentNav(e):this.buildAppComponentNav(e),s.__super__.constructor.call(this,e,this.data),this.buildStats($(".stats",e))}return r(s,t),s.prototype.buildAppComponentNav=function(t){var s;return s=[{txt:"Console",icon:"console",event:"SHOW.CONSOLE"},{txt:"Split",icon:"split",event:"SHOW.SPLIT"},{txt:"Admin",icon:"admin",event:"SHOW.ADMIN"},{txt:"Stats",icon:"stats",event:"SHOW.STATS"}],this.nav=new n($(".nav-holder",t),s,this.data.id)},s.prototype.buildPlatformComponentNav=function(t){var s;return s=[{txt:"Console",icon:"console"},{txt:"Stats",icon:"stats"}],this.nav=new n(t,s,this.data.id)},s}(e)},{"box-nav":1,"boxes/box":2,"jade/component-box":12}],5:[function(t,s,o){var e,n,a,i,r,c,l=function(t,s){function o(){this.constructor=t}for(var e in s)p.call(s,e)&&(t[e]=s[e]);return o.prototype=s.prototype,t.prototype=new o,t.__super__=s.prototype,t},p={}.hasOwnProperty;n=t("boxes/box"),a=t("box-nav"),c=t("jade/host-box"),r=t("managers/platform-components"),e=t("managers/app-components"),s.exports=i=function(t){function s(t,o){this.data=o,this.$node=$(c(this.data)),t.append(this.$node),this.buildNav(this.$node),s.__super__.constructor.call(this,this.$node,this.data),this.buildStats($(".stats",this.$node))}return l(s,t),s.prototype.showPlatformComponents=function(){return this.hideCurrentSubContent(function(t){return function(){return t.subView=new r($(".sub-content",t.$node),t.hideCurrentSubContent,t.resizeSubContent),t.resizeSubContent("platform-components")}}(this))},s.prototype.showAppComponents=function(){return this.hideCurrentSubContent(function(t){return function(){return t.subView=new e($(".sub-content",t.$node),t.data.appComponents),t.resizeSubContent("app-components")}}(this))},s.prototype.buildNav=function(t){var s;return s=[{txt:"App Components",icon:"app-component",event:"SHOW.APP_COMPONENTS"},{txt:"Platform Components",icon:"platform-component",event:"SHOW.PLATFORM_COMPONENTS"},{txt:"Scale",icon:"scale",event:"SHOW.SCALE"},{txt:"Stats",icon:"stats",event:"SHOW.STATS"}],this.nav=new a($(".nav-holder",t),s,this.data.id)},s}(n)},{"box-nav":1,"boxes/box":2,"jade/host-box":13,"managers/app-components":7,"managers/platform-components":9}],6:[function(t,s,o){var e,n,a,i;i=t("boxes/host-box"),n=t("boxes/cluster-box"),a=t("boxes/component-box"),e=function(){function t(){var t;t=new pxicons.ShadowIcons}return t.prototype.build=function(s,o,e){switch(this.data=e,this.id=this.data.id,o){case t.HOST:this.box=new i(s,this.data);break;case t.CLUSTER:this.box=new n(s,this.data);break;case t.PLATFORM_COMPONENT:this.box=new a(s,this.data);break;case t.APP_COMPONENT:this.box=new a(s,this.data)}return this.stats=this.box.stats},t.CLUSTER="cluster",t.HOST="host",t.PLATFORM_COMPONENT="platform-component",t.APP_COMPONENT="service-component",t}(),window.nanobox||(window.nanobox={}),nanobox.ClobberBox=e},{"boxes/cluster-box":3,"boxes/component-box":4,"boxes/host-box":5}],7:[function(t,s,o){var e,n,a=function(t,s){function o(){this.constructor=t}for(var e in s)i.call(s,e)&&(t[e]=s[e]);return o.prototype=s.prototype,t.prototype=new o,t.__super__=s.prototype,t},i={}.hasOwnProperty;n=t("managers/manager"),s.exports=e=function(t){function s(t,o){s.__super__.constructor.call(this),this.createComponents(t,o),this.components=[]}return a(s,t),s.prototype.createComponents=function(t,s){var o,e,n,a,i;for(i=[],n=0,a=s.length;a>n;n++)e=s[n],o=new nanobox.ClobberBox,i.push(o.build(t,nanobox.ClobberBox.APP_COMPONENT,e));return i},s}(n)},{"managers/manager":8}],8:[function(t,s,o){var e;s.exports=e=function(){function t(){}return t.prototype.destroy=function(){},t}()},{}],9:[function(t,s,o){var e,n,a=function(t,s){return function(){return t.apply(s,arguments)}},i=function(t,s){function o(){this.constructor=t}for(var e in s)r.call(s,e)&&(t[e]=s[e]);return o.prototype=s.prototype,t.prototype=new o,t.__super__=s.prototype,t},r={}.hasOwnProperty;e=t("managers/manager"),s.exports=n=function(t){function s(t,o,e){this.fadeParentMethod=o,this.resiseParentMethod=e,this.resetView=a(this.resetView,this),this.showComponentAdmin=a(this.showComponentAdmin,this),s.__super__.constructor.call(this),this.createComponents(t)}return i(s,t),s.prototype.createComponents=function(t){var s,o,e,n,a,i;for(s=[nanobox.PlatformComponent.loadBalancer,nanobox.PlatformComponent.logger,nanobox.PlatformComponent.healthMonitor,nanobox.PlatformComponent.router,nanobox.PlatformComponent.storage],this.components=[],i=[],e=0,a=s.length;a>e;e++)n=s[e],o=new nanobox.PlatformComponent(t,n),o.setState("mini"),o.on("show-admin",this.showComponentAdmin),o.on("close-detail-view",this.resetView),i.push(this.components.push(o));return i},s.prototype.showComponentAdmin=function(t,s){return null!=this.components?this.fadeParentMethod(function(t){return function(){var o,e,n,a;for(a=t.components,e=0,n=a.length;n>e;e++)o=a[e],s===o.id?o.setState("full"):o.setState("hidden");return t.resiseParentMethod()}}(this),!1,!1):void 0},s.prototype.resetView=function(){return null!=this.components?this.fadeParentMethod(function(t){return function(){var s,o,e,n,a;for(n=t.components,a=[],o=0,e=n.length;e>o;o++)s=n[o],s.setState("mini"),a.push(t.resiseParentMethod());return a}}(this),!1,!1):void 0},s.prototype.destroy=function(){var t,o,e,n;for(n=this.components,o=0,e=n.length;e>o;o++)t=n[o],t.destroy();return s.__super__.destroy.call(this),this.components=null},s}(e)},{"managers/manager":8}],10:[function(t,s,o){s.exports=function(t){var s,o=[],e=t||{};return function(t,e){o.push('<div class="box-nav">'),function(){var e=t;if("number"==typeof e.length)for(var n=0,a=e.length;a>n;n++){var i=e[n];o.push("<div"+jade.attr("data-event",""+i.event,!0,!1)+' class="nav-item"><div class="icon"><img'+jade.attr("data-src","nav-"+i.icon,!0,!1)+' xtra="2" class="shadow-icon"/></div><div class="text">'+jade.escape(null==(s=i.txt)?"":s)+"</div></div>")}else{var a=0;for(var n in e){a++;var i=e[n];o.push("<div"+jade.attr("data-event",""+i.event,!0,!1)+' class="nav-item"><div class="icon"><img'+jade.attr("data-src","nav-"+i.icon,!0,!1)+' xtra="2" class="shadow-icon"/></div><div class="text">'+jade.escape(null==(s=i.txt)?"":s)+"</div></div>")}}}.call(this),o.push("</div>")}.call(this,"nav"in e?e.nav:"undefined"!=typeof nav?nav:void 0,"undefined"in e?e.undefined:void 0),o.join("")}},{}],11:[function(t,s,o){s.exports=function(t){var s,o=[],e=t||{};return function(t,e,n){o.push('<div class="box cluster-box"><div class="white-box"><div class="id"><div class="name">'+jade.escape(null==(s=t)?"":s)+'</div><div class="service-name">'+jade.escape(null==(s=e)?"":s)+'</div></div><div class="component"><div'+jade.cls(["service-icon",""+e],[null,!0])+"><img"+jade.attr("data-src","hex-"+e,!0,!1)+' scalable="true" xtra="2" class="shadow-icon"/></div><div class="total">'+jade.escape(null==(s=n)?"":s)+'</div></div><div class="stats"></div></div><div class="nav-holder"></div><div class="sub-content"></div></div>')}.call(this,"clusterName"in e?e.clusterName:"undefined"!=typeof clusterName?clusterName:void 0,"serviceType"in e?e.serviceType:"undefined"!=typeof serviceType?serviceType:void 0,"totalMembers"in e?e.totalMembers:"undefined"!=typeof totalMembers?totalMembers:void 0),o.join("")}},{}],12:[function(t,s,o){s.exports=function(t){var s,o=[],e=t||{};return function(t,e){o.push('<div class="box component-box"><div class="white-box"><div class="corner-box"><img data-src="corner-bg" class="shadow-icon"/></div><div class="service-bug"> <div class="bg-hex"></div><img'+jade.attr("data-src","hex-"+e,!0,!1)+' class="shadow-icon"/></div><div class="id"><div class="name">'+jade.escape(null==(s=t)?"":s)+'</div><div class="service-name">'+jade.escape(null==(s=e)?"":s)+'</div></div><div class="stats"></div></div><div class="nav-holder"></div><div class="sub-content"></div></div>')}.call(this,"name"in e?e.name:"undefined"!=typeof name?name:void 0,"serviceType"in e?e.serviceType:"undefined"!=typeof serviceType?serviceType:void 0),o.join("")}},{}],13:[function(t,s,o){s.exports=function(t){var s,o=[],e=t||{};return function(t,e,n){o.push('<div class="box host-box"><div class="white-box"><div class="name">'+jade.escape(null==(s=e)?"":s)+'</div><div class="service-icons">'),function(){var s=t;if("number"==typeof s.length)for(var e=0,n=s.length;n>e;e++){var a=s[e];o.push("<div"+jade.cls(["service-icon",""+a.serviceType],[null,!0])+"><img"+jade.attr("data-src","hex-"+a.serviceType,!0,!1)+' scalable="true" xtra="2" class="shadow-icon"/></div>')}else{var n=0;for(var e in s){n++;var a=s[e];o.push("<div"+jade.cls(["service-icon",""+a.serviceType],[null,!0])+"><img"+jade.attr("data-src","hex-"+a.serviceType,!0,!1)+' scalable="true" xtra="2" class="shadow-icon"/></div>')}}}.call(this),o.push('</div><div class="stats"></div></div><div class="nav-holder"></div><div class="sub"><div class="sub-content"><div class="tester"></div></div></div></div>')}.call(this,"appComponents"in e?e.appComponents:"undefined"!=typeof appComponents?appComponents:void 0,"name"in e?e.name:"undefined"!=typeof name?name:void 0,"undefined"in e?e.undefined:void 0),o.join("")}},{}]},{},[6]);var pxSvgIconString=pxSvgIconString||"";pxSvgIconString+='<g id="hex-ruby" data-size="49x57" class="icons-svg-svg ">	<polygon  class="bg st0" points="47.525,41.449 24.263,54.88 1,41.449 1,14.585 24.263,1.155 47.525,14.588 	"/><path class="st1" d="M25.018,34.365"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="38.754" y1="-209.8297" x2="29.9025" y2="-252.8222" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#EF4C53"/><stop  offset="0.1648" style="stop-color:#EB4A51"/><stop  offset="0.336" style="stop-color:#DE454B"/><stop  offset="0.5103" style="stop-color:#CA3D41"/><stop  offset="0.6867" style="stop-color:#AC3133"/><stop  offset="0.8629" style="stop-color:#872221"/><stop  offset="1" style="stop-color:#651410"/></linearGradient>	<polygon class="st2" points="37.9,34.365 30.617,25.778 25.018,35.111 	"/><polygon class="st3" points="30.617,25.778 36.593,21.858 37.9,34.365 	"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="55.975" y1="-243.8064" x2="34.1656" y2="-255.5014" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#EF4C53"/><stop  offset="0.1648" style="stop-color:#EB4A51"/><stop  offset="0.336" style="stop-color:#DE454B"/><stop  offset="0.5103" style="stop-color:#CA3D41"/><stop  offset="0.6867" style="stop-color:#AC3133"/><stop  offset="0.8629" style="stop-color:#872221"/><stop  offset="1" style="stop-color:#651410"/></linearGradient>	<polygon class="st4" points="37.9,34.365 44.059,25.778 36.593,17.937 36.593,21.858 	"/><polygon class="st5" points="12.137,34.365 19.417,25.778 25.018,35.111 	"/><polygon class="st3" points="19.417,25.778 13.443,21.858 12.137,34.365 	"/><polygon class="st3" points="19.417,25.778 13.443,21.858 12.137,34.365 	"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="10.9052" y1="-246.8011" x2="14.595" y2="-253.0664" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient>	<polygon class="st6" points="19.417,25.778 13.443,21.858 12.137,34.365 	"/><polygon class="st7" points="12.137,33.617 5.976,25.778 13.443,17.937 13.443,21.858 	"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="20.1769" y1="-258.5323" x2="9.362" y2="-252.2236" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient>	<polygon class="st8" points="12.137,33.617 5.976,25.778 13.443,17.937 13.443,21.858 	"/><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="5.9056" y1="-250.3176" x2="23.3317" y2="-260.2038" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#621310"/><stop  offset="0.172" style="stop-color:#661312;stop-opacity:0.828"/><stop  offset="0.3508" style="stop-color:#731418;stop-opacity:0.6492"/><stop  offset="0.5327" style="stop-color:#871621;stop-opacity:0.4673"/><stop  offset="0.7167" style="stop-color:#A5182E;stop-opacity:0.2833"/><stop  offset="0.9007" style="stop-color:#CA1A3F;stop-opacity:0.0993"/><stop  offset="1" style="stop-color:#E11C4A;stop-opacity:0"/></linearGradient>	<polygon class="st9" points="12.137,33.617 5.976,25.778 13.443,17.937 13.443,21.858 	"/><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="20.4641" y1="-254.4051" x2="26.8861" y2="-250.1709" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#EE3A3F"/><stop  offset="1" style="stop-color:#AC2125"/></linearGradient>	<polygon class="st10" points="25.018,25.776 19.417,25.776 19.417,25.778 25.018,35.111 30.617,25.778 30.617,25.776 	"/><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="18.0204" y1="-245.2841" x2="27.362" y2="-254.794" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0.42"/></linearGradient>	<polygon class="st11" points="25.018,25.776 19.417,25.776 19.417,25.778 25.018,35.111 30.617,25.778 30.617,25.776 	"/><polygon class="st12" points="31.46,14.892 25.018,14.892 18.577,14.892 13.443,17.937 13.443,21.858 19.417,25.778 25.018,25.776 		30.617,25.778 36.593,21.858 36.593,17.937 	"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="40.5551" y1="-278.718" x2="23.4085" y2="-258.1744" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient>	<polygon class="st13" points="31.46,14.892 25.018,14.892 18.577,14.892 13.443,17.937 13.443,21.858 19.417,25.778 25.018,25.776 		30.617,25.778 36.593,21.858 36.593,17.937 	"/><polygon class="st1" points="25.045,35.109 25.045,43.867 37.9,34.365 	"/><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="47.8311" y1="-228.2771" x2="14.1866" y2="-246.3181" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#EF4C53"/><stop  offset="0.1648" style="stop-color:#EB4A51"/><stop  offset="0.336" style="stop-color:#DE454B"/><stop  offset="0.5103" style="stop-color:#CA3D41"/><stop  offset="0.6867" style="stop-color:#AC3133"/><stop  offset="0.8629" style="stop-color:#872221"/><stop  offset="1" style="stop-color:#651410"/></linearGradient>	<polygon class="st14" points="25.045,35.109 25.018,35.111 12.137,34.365 25.018,43.886 25.045,43.867 	"/><linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="13.443" y1="-258.1423" x2="13.443" y2="-258.1423" gradientTransform="matrix(1 0 0 1 0 280)">		<stop  offset="0" style="stop-color:#EF4C53"/><stop  offset="0.1648" style="stop-color:#EB4A51"/><stop  offset="0.336" style="stop-color:#DE454B"/><stop  offset="0.5103" style="stop-color:#CA3D41"/><stop  offset="0.6867" style="stop-color:#AC3133"/><stop  offset="0.8629" style="stop-color:#872221"/><stop  offset="1" style="stop-color:#651410"/></linearGradient>	<path class="st15" d="M13.443,21.858"/></g><g id="hex-mongo-db" data-size="49x57" class="icons-svg-svg ">	<polygon  class="bg  st16" points="47.526,41.449 24.262,54.88 1,41.449 1,14.585 24.262,1.155 47.526,14.588 	"/><path class="st17" d="M24.262,10.485v31.978c0,0,8.624-3.63,8.624-15.808S24.262,10.485,24.262,10.485z"/><path class="st18" d="M24.262,10.485v31.978c0,0-8.624-3.63-8.624-15.808S24.262,10.485,24.262,10.485z"/><line class="st19" x1="24.262" y1="42.462" x2="24.262" y2="46.706"/></g><g id="nav-stats" data-size="17x12" class="icons-svg-svg ">	<line class="st20" x1="0.75" y1="1.223" x2="0.75" y2="11.04"/><line class="st20" x1="4.461" y1="3.115" x2="4.461" y2="11.04"/><line class="st20" x1="8.172" y1="0" x2="8.172" y2="11.04"/><line class="st20" x1="11.883" y1="2.662" x2="11.883" y2="11.04"/><line class="st20" x1="15.594" y1="4.403" x2="15.594" y2="11.04"/></g><g id="nav-scale" data-size="22x15" class="icons-svg-svg ">			<ellipse transform="matrix(0.9876 -0.1567 0.1567 0.9876 -1.2715 0.9925)" class="st20" cx="5.658" cy="8.56" rx="4.908" ry="4.908"/><g>		<g>			<path class="st20" d="M10.124,2.168c0.259-0.208,0.535-0.396,0.826-0.563"/><path class="st21" d="M12.759,0.906c0.13-0.029,0.263-0.054,0.397-0.075c3.533-0.559,6.853,1.85,7.414,5.385				c0.56,3.534-1.85,6.853-5.384,7.414c-0.553,0.087-1.1,0.102-1.632,0.052"/><path class="st20" d="M12.597,13.516c-0.325-0.082-0.642-0.188-0.948-0.318"/></g>	</g></g><g id="nav-app-component" data-size="16x19" class="icons-svg-svg ">	<polygon class="st20" points="15.196,13.376 7.973,17.547 0.75,13.376 0.75,5.036 7.973,0.866 15.196,5.037 	"/><polygon class="st22" points="4.869,11.47 7.973,6.093 11.078,11.47 	"/></g><g id="nav-platform-component" data-size="19x13" class="icons-svg-svg ">	<circle class="st20" cx="1.591" cy="6.575" r="0.841"/><circle class="st20" cx="6.502" cy="10.488" r="0.841"/><circle class="st20" cx="6.502" cy="2.714" r="0.841"/><polyline class="st20" points="7.181,10.488 15.812,10.488 17.945,8.354 	"/><polyline class="st20" points="7.181,2.663 15.812,2.663 17.945,0.53 	"/><line class="st20" x1="2.828" y1="6.575" x2="14.815" y2="6.575"/></g><g id="nav-instance-health" data-size="17x17" class="icons-svg-svg ">	<circle class="st22" cx="8.105" cy="1.029" r="1.029"/><circle class="st22" cx="8.102" cy="4.307" r="0.911"/><circle class="st22" cx="8.105" cy="8.252" r="1.029"/><ellipse transform="matrix(0.704 -0.7102 0.7102 0.704 -0.6574 9.2807)" class="st22" cx="10.805" cy="5.429" rx="0.911" ry="0.911"/><ellipse transform="matrix(1 -0.0091 0.0091 1 -0.0738 0.1091)" class="st22" cx="11.953" cy="8.165" rx="0.911" ry="0.91"/><ellipse transform="matrix(0.6975 -0.7166 0.7166 0.6975 -4.4964 11.0439)" class="st22" cx="10.832" cy="10.848" rx="0.911" ry="0.91"/><ellipse transform="matrix(0.9998 -0.0182 0.0182 0.9998 -0.217 0.1496)" class="st22" cx="8.108" cy="11.998" rx="0.911" ry="0.91"/><ellipse transform="matrix(0.691 -0.7229 0.7229 0.691 -6.2182 7.2986)" class="st22" cx="5.427" cy="10.922" rx="0.911" ry="0.911"/><ellipse transform="matrix(0.9996 -0.0271 0.0271 0.9996 -0.2213 0.1173)" class="st22" cx="4.216" cy="8.224" rx="0.911" ry="0.91"/><ellipse transform="matrix(0.6848 -0.7287 0.7287 0.6848 -2.3603 5.5831)" class="st22" cx="5.274" cy="5.52" rx="0.91" ry="0.911"/><ellipse transform="matrix(0.4398 -0.8981 0.8981 0.4398 4.7134 11.0795)" class="st22" cx="11.238" cy="1.762" rx="1.029" ry="1.029"/><ellipse transform="matrix(0.7901 -0.613 0.613 0.7901 0.5412 9.2224)" class="st22" cx="13.736" cy="3.821" rx="1.029" ry="1.029"/><ellipse transform="matrix(0.9792 -0.2031 0.2031 0.9792 -1.0557 3.2055)" class="st22" cx="15.091" cy="6.747" rx="1.03" ry="1.029"/><ellipse transform="matrix(0.2483 -0.9687 0.9687 0.2483 1.6319 22.0035)" class="st22" cx="14.993" cy="9.95" rx="1.029" ry="1.029"/><ellipse transform="matrix(0.6494 -0.7605 0.7605 0.6494 -4.9939 14.7657)" class="st22" cx="13.516" cy="12.798" rx="1.029" ry="1.029"/><ellipse transform="matrix(0.9177 -0.3973 0.3973 0.9177 -4.9432 5.5407)" class="st22" cx="10.9" cy="14.7" rx="1.029" ry="1.029"/><ellipse transform="matrix(0.047 -0.9989 0.9989 0.047 -7.8889 22.2823)" class="st22" cx="7.733" cy="15.276" rx="1.029" ry="1.028"/><ellipse transform="matrix(0.4818 -0.8763 0.8763 0.4818 -10.1978 11.5173)" class="st22" cx="4.639" cy="14.381" rx="1.03" ry="1.029"/><ellipse transform="matrix(0.8181 -0.575 0.575 0.8181 -6.6327 3.4952)" class="st22" cx="2.209" cy="12.233" rx="1.03" ry="1.028"/><ellipse transform="matrix(0.9877 -0.1562 0.1562 0.9877 -1.4295 0.2742)" class="st22" cx="1.03" cy="9.232" rx="1.03" ry="1.029"/><ellipse transform="matrix(0.2942 -0.9557 0.9557 0.2942 -4.9014 5.4662)" class="st22" cx="1.25" cy="6.052" rx="1.029" ry="1.03"/><ellipse transform="matrix(0.6846 -0.7289 0.7289 0.6846 -1.4747 3.1426)" class="st22" cx="2.894" cy="3.275" rx="1.029" ry="1.03"/><ellipse transform="matrix(0.9354 -0.3535 0.3535 0.9354 -0.1598 2.0618)" class="st22" cx="5.564" cy="1.468" rx="1.029" ry="1.03"/></g><g id="corner-bg" data-size="614x57" class="icons-svg-svg ">	<polygon class="st23" points="23.377,57 613.44,57 613.44,0 0,0 0,42.547 	"/></g><g id="hex-load-balancer" data-size="50x57" class="icons-svg-svg ">	<polygon class="st24" points="48.209,42.04 24.603,55.668 1,42.04 1,14.782 24.603,1.155 48.209,14.785 	"/><path class="st25" d="M44.019,28.297"/><line class="st25" x1="47.552" y1="37.19" x2="24.76" y2="22.781"/><line class="st25" x1="45.848" y1="42.162" x2="24.76" y2="28.831"/><polyline class="st25" points="24.76,16.733 47.552,31.141 47.552,33.946 47.552,41.381 	"/><line class="st25" x1="47.547" y1="31.138" x2="29.197" y2="19.538"/><polyline class="st25" points="47.547,37.187 29.197,25.587 29.197,13.489 47.418,25.008 	"/><polyline class="st25" points="24.624,41.952 47.416,27.543 47.416,15.445 24.624,29.854 	"/><line class="st25" x1="24.896" y1="35.903" x2="35.229" y2="29.371"/><line class="st25" x1="24.896" y1="29.854" x2="35.229" y2="23.322"/><line class="st25" x1="35.229" y1="35.42" x2="24.896" y2="41.952"/><line class="st25" x1="24.76" y1="22.781" x2="35.093" y2="29.314"/><line class="st25" x1="24.76" y1="28.831" x2="35.093" y2="35.362"/><line class="st25" x1="35.093" y1="23.264" x2="24.76" y2="16.733"/><line class="st25" x1="47.416" y1="21.495" x2="24.624" y2="35.903"/><polygon class="st26" points="48.209,42.04 24.603,55.668 1,42.04 1,14.782 24.603,1.155 48.209,14.785 48.209,21.242 		48.209,27.278 48.209,33.327 	"/><line class="st25" x1="35.093" y1="29.521" x2="47.416" y2="21.73"/><polyline class="st25" points="47.552,33.742 35.093,41.618 35.093,35.569 47.416,27.779 	"/><path class="st25" d="M47.552,33.946"/><path class="st25" d="M5.187,28.297"/><line class="st25" x1="1.654" y1="37.19" x2="24.446" y2="22.781"/><line class="st25" x1="3.358" y1="42.162" x2="24.446" y2="28.831"/><polyline class="st25" points="24.446,16.733 1.654,31.141 1.654,33.946 1.654,41.381 	"/><line class="st25" x1="1.659" y1="31.138" x2="20.009" y2="19.538"/><polyline class="st25" points="1.659,37.187 20.009,25.587 20.009,13.489 1.788,25.008 	"/><polyline class="st25" points="24.582,41.952 1.79,27.543 1.79,15.445 24.582,29.854 	"/><line class="st25" x1="24.31" y1="35.903" x2="13.977" y2="29.371"/><line class="st25" x1="24.31" y1="29.854" x2="13.977" y2="23.322"/><line class="st25" x1="13.977" y1="35.42" x2="24.31" y2="41.952"/><line class="st25" x1="24.446" y1="22.781" x2="14.113" y2="29.314"/><line class="st25" x1="24.446" y1="28.831" x2="14.113" y2="35.362"/><line class="st25" x1="14.113" y1="23.264" x2="24.446" y2="16.733"/><line class="st25" x1="1.79" y1="21.495" x2="24.582" y2="35.903"/><line class="st25" x1="14.113" y1="29.521" x2="1.79" y2="21.73"/><polyline class="st25" points="1.654,33.742 14.113,41.618 14.113,35.569 1.79,27.779 	"/><path class="st25" d="M1.654,33.946"/><path class="st25" d="M1.654,33.946"/></g><g id="nav-split" data-size="20x12" class="icons-svg-svg ">	<path class="st27" d="M5.658,0.75c-2.711,0-4.908,2.197-4.908,4.908s2.197,4.908,4.908,4.908v0.001c2.481,0,4.443-3.017,5.428-3.12		c1.895-0.197,1.983,1.603,4.171,1.603V9.021c1.857,0,3.362-1.505,3.362-3.362s-1.505-3.362-3.362-3.362V2.268		c-2.449,0-2.276,1.8-4.171,1.602C10.102,3.767,8.14,0.751,5.658,0.751V0.75z"/></g><g id="nav-admin" data-size="24x18" class="icons-svg-svg ">			<ellipse transform="matrix(0.9413 -0.3375 0.3375 0.9413 -4.0973 4.1827)" class="st27" cx="9.981" cy="13.875" rx="3.086" ry="3.088"/><ellipse transform="matrix(0.9412 -0.3377 0.3377 0.9412 -0.506 4.7684)" class="st27" cx="13.452" cy="3.839" rx="3.087" ry="3.088"/><ellipse transform="matrix(0.9413 -0.3376 0.3376 0.9413 -1.7161 7.4835)" class="st27" cx="20.658" cy="8.676" rx="1.901" ry="1.902"/><line class="st27" x1="11.002" y1="10.992" x2="12.624" y2="6.781"/><line class="st27" x1="19.214" y1="7.443" x2="16.343" y2="5.596"/><ellipse transform="matrix(0.8869 -0.4619 0.4619 0.8869 -4.0131 2.2806)" class="st27" cx="2.652" cy="9.337" rx="1.901" ry="1.902"/><line class="st27" x1="4.262" y1="10.352" x2="7.356" y2="11.793"/></g><g id="nav-console" data-size="19x13" class="icons-svg-svg ">	<rect x="0.75" y="0.75" class="st27" width="17.17" height="10.546"/><line class="st27" x1="8.011" y1="7.438" x2="12.011" y2="7.438"/><polyline class="st27" points="3.822,3.38 5.85,5.409 3.822,7.438 	"/></g>';var pxSvgIconString=pxSvgIconString||"";pxSvgIconString+="";