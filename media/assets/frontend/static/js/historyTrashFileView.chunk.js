(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[9],{1232:function(e,t,a){e.exports=a(1289)},1233:function(e,t,a){},1289:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(6),r=a(8),i=a(7),o=a(0),l=a.n(o),s=a(23),u=a.n(s),p=a(195),m=a.n(p),f=a(1),d=window.app.pageOptions,v=d.fileName,b=d.repoID,h=d.objID,w=d.path;var O=function(){return l.a.createElement("a",{href:"".concat(f.ic,"repo/").concat(b,"/").concat(h,"/download/?file_name=").concat(encodeURIComponent(v),"&p=").concat(encodeURIComponent(w)),className:"btn btn-secondary"},Object(f.mb)("Download"))},j=(a(603),window.app.pageOptions),E=j.fromTrash,y=j.fileName,g=j.commitTime,k=j.canDownloadFile,x=j.enableWatermark,N=j.userNickName,C=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"h-100 d-flex flex-column"},l.a.createElement("div",{className:"file-view-header d-flex justify-content-between align-items-center"},l.a.createElement("div",null,l.a.createElement("h2",{className:"file-title"},y),l.a.createElement("p",{className:"meta-info m-0"},E?"".concat(Object(f.mb)("Current Path: ")).concat(Object(f.mb)("Trash")):g)),k&&l.a.createElement(O,null)),l.a.createElement("div",{className:"file-view-body flex-auto d-flex o-hidden"},this.props.content))}}]),a}(l.a.Component);x&&m.a.init({watermark_txt:"".concat(f.hc," ").concat(N),watermark_alpha:.075});var F=C,I=window.app.pageOptions,P=I.canDownloadFile,D=I.err,T="File preview unsupported",S=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e;return e=D==T||this.props.err==T?l.a.createElement("p",null,Object(f.mb)("Online view is not applicable to this file format")):l.a.createElement("p",{className:"error"},D),l.a.createElement("div",{className:"file-view-content flex-1 o-auto"},l.a.createElement("div",{className:"file-view-tip"},e,P&&l.a.createElement(O,null)))}}]),a}(l.a.Component),L=a(199),J=a(250),R=a(251),U=a(4),W=a(196),_=a.n(W),B=(a(181),a(159),a(283),a(414),a(415),a(416),a(147),a(417),a(418),a(238),a(220),a(419),window.app.pageOptions),M=B.fileExt,V=B.fileContent,z={lineNumbers:!0,mode:U.a.chooseLanguage(M),extraKeys:{Ctrl:"autocomplete"},theme:"default",textWrapping:!0,lineWrapping:!0,readOnly:!0,cursorBlinkRate:-1},A=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"file-view-content flex-1 text-file-view"},l.a.createElement(_.a,{ref:"code-mirror-editor",value:V,options:z}))}}]),a}(l.a.Component),G=a(88),K=(a(1233),window.app.pageOptions.fileContent),q=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"file-view-content flex-1 o-auto"},l.a.createElement("div",{className:"md-content"},l.a.createElement(G.a,{markdownContent:K,showTOC:!1,scriptSource:f.Jb+"js/mathjax/tex-svg.js"})))}}]),a}(l.a.Component),H=a(252),Q=a(253),X=window.app.pageOptions,Y=X.fileType,Z=X.err,$=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(Z)return l.a.createElement(F,{content:l.a.createElement(S,null)});var e;switch(Y){case"Image":e=l.a.createElement(L.a,{tip:l.a.createElement(S,null)});break;case"SVG":e=l.a.createElement(J.a,null);break;case"PDF":e=l.a.createElement(R.a,null);break;case"Text":e=l.a.createElement(A,null);break;case"Markdown":e=l.a.createElement(q,null);break;case"Video":e=l.a.createElement(H.a,null);break;case"Audio":e=l.a.createElement(Q.a,null);break;default:e=l.a.createElement(S,{err:"File preview unsupported"})}return l.a.createElement(F,{content:e})}}]),a}(l.a.Component);u.a.render(l.a.createElement($,null),document.getElementById("wrapper"))},199:function(e,t,a){"use strict";var n,c,r=a(5),i=a(6),o=a(8),l=a(7),s=a(0),u=a.n(s),p=a(4),m=a(1),f=(a(420),window.app.pageOptions),d=f.repoID,v=f.repoEncrypted,b=f.fileExt,h=f.filePath,w=f.fileName,O=f.thumbnailSizeForOriginal,j=f.previousImage,E=f.nextImage,y=f.rawPath,g=f.xmindImageSrc;j&&(n="".concat(m.ic,"lib/").concat(d,"/file").concat(p.a.encodePath(j))),E&&(c="".concat(m.ic,"lib/").concat(d,"/file").concat(p.a.encodePath(E)));var k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleLoadFailure=function(){n.setState({loadFailed:!0})},n.state={loadFailed:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){j&&37==e.keyCode&&(location.href=n),E&&39==e.keyCode&&(location.href=c)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";this.props.canUseThumbnail&&!v&&["tif","tiff","psd"].includes(b)&&(e="".concat(m.ic,"thumbnail/").concat(d,"/").concat(O).concat(p.a.encodePath(h)));var t=g?"".concat(m.ic).concat(g):"";return u.a.createElement("div",{className:"file-view-content flex-1 image-file-view"},j&&u.a.createElement("a",{href:n,id:"img-prev",title:Object(m.mb)("you can also press \u2190 ")},u.a.createElement("span",{className:"fas fa-chevron-left"})),E&&u.a.createElement("a",{href:c,id:"img-next",title:Object(m.mb)("you can also press \u2192")},u.a.createElement("span",{className:"fas fa-chevron-right"})),u.a.createElement("img",{src:t||e||y,alt:w,id:"image-view",onError:this.handleLoadFailure}))}}]),a}(u.a.Component);t.a=k},250:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(8),i=a(7),o=a(0),l=a.n(o),s=(a(425),window.app.pageOptions),u=s.fileName,p=s.rawPath,m=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"file-view-content flex-1 svg-file-view"},l.a.createElement("img",{src:p,alt:u,id:"svg-view"}))}}]),a}(l.a.Component);t.a=m},251:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(8),i=a(7),o=a(0),l=a.n(o),s=a(115),u=(a(240),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"file-view-content flex-1 pdf-file-view"},l.a.createElement(s.a,null))}}]),a}(l.a.Component));t.a=u},252:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(8),i=a(7),o=a(0),l=a.n(o),s=a(197),u=(a(424),window.app.pageOptions.rawPath),p=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:u}]};return l.a.createElement("div",{className:"file-view-content flex-1 video-file-view"},l.a.createElement(s.a,e))}}]),a}(l.a.Component);t.a=p},253:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a(8),i=a(7),o=a(0),l=a.n(o),s=a(198),u=(a(426),window.app.pageOptions.rawPath),p=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:u}]};return l.a.createElement("div",{className:"file-view-content flex-1 audio-file-view"},l.a.createElement(s.a,e))}}]),a}(l.a.Component);t.a=p}},[[1232,1,0]]]);
//# sourceMappingURL=historyTrashFileView.chunk.js.map