(function(t){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1503d1db"}[t]+".js"}function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=n[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,e[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view"),e("Footer")],1)},r=[],o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"mt-5 mb-5"},[e("hr"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col text-center"},[t._v(" 2021 Copyright E-Commerse Kerajinan Bali ")])])])])}],c={name:"Footer"},l=c,u=e("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null),p=d.exports,m={components:{Footer:p}},v=m,f=Object(u["a"])(v,n,r,!1,null,null,null),h=f.exports,b=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("Navbar"),e("div",{staticClass:"container"},[e("Hero"),e("div",{staticClass:"row mt-4"},[t._m(0),e("div",{staticClass:"col"},[e("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/product"}},[e("b-icon-eye"),t._v("Lihat Semua")],1)],1)]),e("div",{staticClass:"row mb-4"},t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"col-md-3 mt-4"},[e("CardProduct",{attrs:{product:t}})],1)})),0)],1)],1)},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col"},[e("h2",[t._v("Product "),e("strong",[t._v("Terlaris")])])])}],_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Logo")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/product"}},[t._v("Product")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("About")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("Help")])],1)]),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v(" Sign In ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v(" Sign Up ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v(" YourBag "),e("b-icon-bag"),e("span",{staticClass:"badge badge-success ml-2"},[t._v(t._s(t.jumlah_pesanans.length))])],1)],1)])])])])},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],P=e("bc3a"),j=e.n(P),y={name:"Navbar",data:function(){return{jumlah_pesanans:[]}},methods:{setJumlah:function(t){this.jumlah_pesanans=t}},mounted:function(){var t=this;j.a.get("http://localhost:3000/keranjangs").then((function(a){return t.setJumlah(a.data)})).catch((function(t){return console.log(t)}))}},w=y,x=Object(u["a"])(w,_,k,!1,null,null,null),$=x.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero"},[e("div",{staticClass:"d-none d-md-block"},[e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"d-flex h-100"},[e("div",{staticClass:"justify-content-center align-self-center"},[t._m(0),e("p",[t._v("Selamat Berbelanja")]),e("router-link",{staticClass:"btn btn-lg btn-success",attrs:{to:"/product"}},[e("b-icon-arrow-right"),t._v("Go ")],1)],1)])]),t._m(1)])]),e("div",{staticClass:"d-sm-block d-md-none"},[e("div",{staticClass:"row mt-4"},[t._m(2),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"d-flex h-100"},[e("div",{staticClass:"justify-content-center align-self-center"},[t._m(3),e("p",[t._v("Selamat Berbelanja")]),e("button",{staticClass:"btn btn-lg btn-success"},[e("b-icon-arrow-right"),t._v("Go ")],1)])])])])])])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("strong",[t._v("Temukan Product Terbaik,")]),t._v(" "),e("br"),t._v("Disini")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6"},[s("img",{attrs:{src:e("7a6c"),width:"100%"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 mb-3"},[s("img",{attrs:{src:e("7a6c"),width:"100%"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("strong",[t._v("Temukan Product Terbaik,")]),t._v(" "),e("br"),t._v("Disini")])}],N={name:"Hero"},S=N,T=Object(u["a"])(S,E,O,!1,null,null,null),H=T.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow card-product"},[e("img",{staticClass:"card-img-top",attrs:{src:"assets/images/"+t.product.gambar,alt:"..."}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.product.nama))]),e("p",{staticClass:"card-text"},[t._v(" Harga : Rp. "+t._s(t.product.harga)+" ")]),e("router-link",{staticClass:"btn btn-success",attrs:{to:"/product/"+t.product.id}},[e("b-icon-cart"),t._v("Pesan")],1)],1)])},A=[],B={name:"CardProduct",props:["product"]},M=B,J=Object(u["a"])(M,D,A,!1,null,null,null),I=J.exports,L={name:"Home",components:{Navbar:$,Hero:H,CardProduct:I},data:function(){return{products:[]}},methods:{setProducts:function(t){this.products=t}},mounted:function(){var t=this;j.a.get("http://localhost:3000/best-products").then((function(a){return t.setProducts(a.data)})).catch((function(t){return console.log(t)}))}},F=L,K=Object(u["a"])(F,g,C,!1,null,null,null),q=K.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"input-group mb-3",staticStyle:{"padding-left":"400px","padding-right":"400px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cari Product","aria-label":"Cari Product","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{keyup:t.searchProduct,input:function(a){a.target.composing||(t.search=a.target.value)}}}),e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("b-icon-search")],1)])])])]),e("div",{staticClass:"row mb-4"},t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"col-md-3 mt-4"},[e("CardProduct",{attrs:{product:t}})],1)})),0)])],1)},R=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col"},[e("h2",[t._v("Daftar "),e("strong",[t._v("Product")])])])])}],U=(e("ac1f"),e("841c"),{name:"Product",components:{Navbar:$,CardProduct:I},data:function(){return{products:[],search:""}},methods:{setProducts:function(t){this.products=t},searchProduct:function(){var t=this;j.a.get("http://localhost:3000/products?q="+this.search).then((function(a){return t.setProducts(a.data)})).catch((function(t){return console.log(t)}))}},mounted:function(){var t=this;j.a.get("http://localhost:3000/products").then((function(a){return t.setProducts(a.data)})).catch((function(t){return console.log(t)}))}}),Y=U,z=Object(u["a"])(Y,G,R,!1,null,null,null),Q=z.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product-detail"},[e("Navbar"),e("div",{staticClass:"container"},[e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"text-dark",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"text-dark",attrs:{to:"/product"}},[t._v("Product")])],1),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" Detail Product ")])])])])]),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-6"},[e("img",{staticClass:"img-fluid shadow",attrs:{src:"../assets/images/"+t.product.gambar}})]),e("div",{staticClass:"col-md-6"},[e("h2",[e("strong",[t._v(t._s(t.product.nama))])]),e("hr"),e("h4",[t._v(" Harga : "),e("strong",[t._v("Rp. "+t._s(t.product.harga)+" ")])]),e("form",{staticClass:"mt-4",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"jumlah_pemesanan"}},[t._v("Jumlah")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pesan.jumlah_pemesanan,expression:"pesan.jumlah_pemesanan"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.pesan.jumlah_pemesanan},on:{input:function(a){a.target.composing||t.$set(t.pesan,"jumlah_pemesanan",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"alamat"}},[t._v("Alamat")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pesan.alamat,expression:"pesan.alamat"}],staticClass:"form-control",attrs:{placeholder:"Isikan alamat"},domProps:{value:t.pesan.alamat},on:{input:function(a){a.target.composing||t.$set(t.pesan,"alamat",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"nomor"}},[t._v("Nomor Telepon")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pesan.nomor,expression:"pesan.nomor"}],staticClass:"form-control",attrs:{placeholder:"Isikan nomor telepon"},domProps:{value:t.pesan.nomor},on:{input:function(a){a.target.composing||t.$set(t.pesan,"nomor",a.target.value)}}})]),e("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.pemesanan}},[e("b-icon-cart"),t._v("Pesan ")],1)])])])])],1)},W=[],X={name:"ProductDetail",components:{Navbar:$},data:function(){return{product:{},pesan:{}}},methods:{setProduct:function(t){this.product=t},pemesanan:function(){var t=this;this.pesan.jumlah_pemesanan?(this.pesan.products=this.product,j.a.post("http://localhost:3000/keranjangs",this.pesan).then((function(){t.$router.push({path:"/keranjang"}),t.$toast.success("Pesanan Anda Berhasil Ditambahkan",{type:"success",position:"top",duration:"5000",dismissible:!0})})).catch((function(t){return console.log(t)}))):this.$toast.error("Maaf, Anda Belum Mengisi Inputan Pemesanan",{type:"error",position:"top",duration:"5000",dismissible:!0})}},mounted:function(){var t=this;j.a.get("http://localhost:3000/products/"+this.$route.params.id).then((function(a){return t.setProduct(a.data)})).catch((function(t){return console.log(t)}))}},Z=X,tt=Object(u["a"])(Z,V,W,!1,null,null,null),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"keranjang"},[e("Navbar")],1)},st=[],nt={name:"Keranjang",components:{Navbar:$}},rt=nt,ot=Object(u["a"])(rt,et,st,!1,null,null,null),it=ot.exports;s["default"].use(b["a"]);var ct=[{path:"/",name:"Home",component:q},{path:"/product",name:"Product",component:Q},{path:"/product/:id",name:"ProductDetail",component:at},{path:"/keranjang",name:"Keranjang",component:it},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],lt=new b["a"]({mode:"history",base:"/",routes:ct}),ut=lt,dt=e("5f5b"),pt=e("b1e0"),mt=e("b079"),vt=e.n(mt);e("ce8c"),e("f9e3"),e("2dd8"),e("5aea");s["default"].use(vt.a),s["default"].use(dt["a"]),s["default"].use(pt["a"]),s["default"].config.productionTip=!1,new s["default"]({router:ut,render:function(t){return t(h)}}).$mount("#app")},"5aea":function(t,a,e){},"7a6c":function(t,a,e){t.exports=e.p+"img/hero.991d69f3.png"}});
//# sourceMappingURL=app.dc553c7e.js.map