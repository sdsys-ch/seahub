(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[26],{1716:function(e,t,n){n(76),e.exports=n(1717)},1717:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(5),c=n(7),o=n(6),s=n(2),i=n.n(s),u=n(31),d=n.n(u),f=n(8),b=n(1),h=n(105),j=n(94),O=n(19),l=(n(550),n(0)),g=window.shared.pageOptions,p=g.repoID,m=g.filePath,v=g.err,k=g.commitID,w=g.fileType,x=g.fileName,y=g.sharedToken,L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)(h.a,{content:Object(l.jsx)(D,{})})}}]),n}(i.a.Component),D=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},r.state={isLoading:!v,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!v){!function t(){f.a.queryOfficeFileConvertStatus(p,k,m,w.toLowerCase(),y).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(b.tb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(b.tb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(b.tb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return v?Object(l.jsx)(j.a,{}):t?Object(l.jsx)(O.a,{}):n?Object(l.jsx)(j.a,{errorMsg:n}):Object(l.jsx)("div",{className:"shared-file-view-body spreadsheet-file-view",children:Object(l.jsx)("iframe",{id:"spreadsheet-container",title:x,src:"".concat(b.vc,"office-convert/static/").concat(p,"/").concat(k).concat(encodeURIComponent(m),"/index.html?token=").concat(y),onLoad:this.setIframeHeight})})}}]),n}(i.a.Component);d.a.render(Object(l.jsx)(L,{}),document.getElementById("wrapper"))},550:function(e,t,n){}},[[1716,1,0]]]);
//# sourceMappingURL=sharedFileViewSpreadsheet.chunk.js.map