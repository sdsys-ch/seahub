(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[14],{1246:function(e,t,a){e.exports=a(1294)},1247:function(e,t,a){},1294:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),o=a(26),c=a(8),l=a(7),i=a(0),s=a.n(i),m=a(23),d=a.n(m),h=a(16),u=a(4),b=a(1),p=a(9),f=a(15),g=a(18),E=a(10),O=a(42),v=a(3),j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).action=function(){r.setState({btnDisabled:!0}),r.props.restoreRepo()},r.state={btnDisabled:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.formActionURL,e.csrfToken,e.toggle);return s.a.createElement(v.x,{centered:!0,isOpen:!0,toggle:t},s.a.createElement(v.A,{toggle:t},Object(b.mb)("Restore Library")),s.a.createElement(v.y,null,s.a.createElement("p",null,Object(b.mb)("Are you sure you want to restore this library?"))),s.a.createElement(v.z,null,s.a.createElement(v.c,{color:"secondary",onClick:t},Object(b.mb)("Cancel")),s.a.createElement(v.c,{color:"primary",onClick:this.action,disabled:this.state.btnDisabled},Object(b.mb)("Restore"))))}}]),a}(i.Component),k=(a(93),a(106),a(1247),window.app.pageOptions),y=k.repoID,w=k.repoName,C=k.canRestoreRepo,D=k.commitID,N=k.commitTime,F=k.commitDesc,I=k.commitRelativeTime,S=k.showAuthor,P=k.authorAvatarURL,M=k.authorName,R=k.authorNickName,x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggleDialog=function(){r.setState({isConfirmDialogOpen:!r.state.isConfirmDialogOpen})},r.onSearchedClick=function(e){if(!0===e.is_dir){var t=b.ic+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(h.c)(t,{repalce:!0})}else{var a=b.ic+"lib/"+e.repo_id+"/file"+u.a.encodePath(e.path);window.open("about:blank").location.href=a}},r.goBack=function(e){e.preventDefault(),window.history.back()},r.renderFolder=function(e){r.setState({folderPath:e,folderItems:[],isLoading:!0}),p.a.listCommitDir(y,D,e).then((function(e){r.setState({isLoading:!1,folderItems:e.data.dirent_list})})).catch((function(e){r.setState({isLoading:!1,errorMsg:u.a.getErrorMsg(e,!0)})}))},r.clickFolderPath=function(e,t){t.preventDefault(),r.renderFolder(e)},r.renderPath=function(){var e=r.state.folderPath,t=e.split("/");return"/"==e?w:s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{href:"#",onClick:r.clickFolderPath.bind(Object(o.a)(r),"/")},w),s.a.createElement("span",null," / "),t.map((function(e,a){if(a>0&&a!=t.length-1)return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement("a",{href:"#",onClick:r.clickFolderPath.bind(Object(o.a)(r),t.slice(0,a+1).join("/"))},t[a]),s.a.createElement("span",null," / "))})),t[t.length-1])},r.restoreRepo=function(){p.a.revertRepo(y,D).then((function(e){r.toggleDialog(),E.a.success(Object(b.mb)("Successfully restored the library."))})).catch((function(e){var t=u.a.getErrorMsg(e);r.toggleDialog(),E.a.danger(t)}))},r.state={isLoading:!0,errorMsg:"",folderPath:"/",folderItems:[],isConfirmDialogOpen:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.renderFolder(this.state.folderPath)}},{key:"render",value:function(){var e=this.state,t=e.isConfirmDialogOpen,a=e.folderPath;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"h-100 d-flex flex-column"},s.a.createElement("div",{className:"top-header d-flex justify-content-between"},s.a.createElement("a",{href:b.ic},s.a.createElement("img",{src:b.Jb+b.Eb,height:b.Db,width:b.Fb,title:b.jc,alt:"logo"})),s.a.createElement(O.a,{onSearchedClick:this.onSearchedClick})),s.a.createElement("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-10 offset-md-1"},s.a.createElement("h2",{dangerouslySetInnerHTML:{__html:u.a.generateDialogTitle(Object(b.mb)("{placeholder} Snapshot"),w)+' <span class="heading-commit-time">('.concat(N,")</span>")}}),s.a.createElement("a",{href:"#",className:"go-back",title:Object(b.mb)("Back"),onClick:this.goBack},s.a.createElement("span",{className:"fas fa-chevron-left"})),"/"==a&&s.a.createElement("div",{className:"d-flex mb-2 align-items-center"},s.a.createElement("p",{className:"m-0"},F),s.a.createElement("div",{className:"ml-4 border-left pl-4 d-flex align-items-center"},S?s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:P,width:"20",height:"20",alt:"",className:"rounded mr-1"}),s.a.createElement("a",{href:"".concat(b.ic,"profile/").concat(encodeURIComponent(M),"/")},R)):s.a.createElement("span",null,Object(b.mb)("Unknown")),s.a.createElement("p",{className:"m-0 ml-2",dangerouslySetInnerHTML:{__html:I}}))),s.a.createElement("div",{className:"d-flex justify-content-between align-items-center op-bar"},s.a.createElement("p",{className:"m-0"},Object(b.mb)("Current path: "),this.renderPath()),"/"==a&&C&&s.a.createElement("button",{className:"btn btn-secondary op-bar-btn",onClick:this.toggleDialog},Object(b.mb)("Restore"))),s.a.createElement(_,{data:this.state,renderFolder:this.renderFolder}))))),t&&s.a.createElement(g.a,null,s.a.createElement(j,{restoreRepo:this.restoreRepo,toggle:this.toggleDialog})))}}]),a}(s.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).theadData=[{width:"5%",text:""},{width:"55%",text:Object(b.mb)("Name")},{width:"20%",text:Object(b.mb)("Size")},{width:"20%",text:""}],r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.isLoading,n=t.errorMsg,r=t.folderPath,o=t.folderItems;return a?s.a.createElement(f.a,null):n?s.a.createElement("p",{className:"error mt-6 text-center"},n):s.a.createElement("table",{className:"table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,this.theadData.map((function(e,t){return s.a.createElement("th",{key:t,width:e.width},e.text)})))),s.a.createElement("tbody",null,o.map((function(t,a){return s.a.createElement(L,{key:a,item:t,folderPath:r,renderFolder:e.props.renderFolder})}))))}}]),a}(s.a.Component),L=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleMouseOver=function(){r.setState({isIconShown:!0})},r.handleMouseOut=function(){r.setState({isIconShown:!1})},r.restoreItem=function(e){e.preventDefault();var t=r.props.item,a=u.a.joinPath(r.props.folderPath,t.name);("dir"==t.type?p.a.revertFolder(y,a,D):p.a.revertFile(y,a,D)).then((function(e){E.a.success(Object(b.mb)("Successfully restored 1 item."))})).catch((function(e){var t=u.a.getErrorMsg(e);E.a.danger(t)}))},r.renderFolder=function(e){e.preventDefault();var t=r.props.item,a=r.props.folderPath;r.props.renderFolder(u.a.joinPath(a,t.name))},r.state={isIconShown:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state.isIconShown,a=this.props.folderPath;return"dir"==e.type?s.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},s.a.createElement("td",{className:"text-center"},s.a.createElement("img",{src:u.a.getFolderIconUrl(),alt:Object(b.mb)("Directory"),width:"24"})),s.a.createElement("td",null,s.a.createElement("a",{href:"#",onClick:this.renderFolder},e.name)),s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("a",{href:"#",className:"action-icon sf2-icon-reply ".concat(t?"":"invisible"),onClick:this.restoreItem,title:Object(b.mb)("Restore")}))):s.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},s.a.createElement("td",{className:"text-center"},s.a.createElement("img",{src:u.a.getFileIconUrl(e.name),alt:Object(b.mb)("File"),width:"24"})),s.a.createElement("td",null,s.a.createElement("a",{href:"".concat(b.ic,"repo/").concat(y,"/snapshot/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(D,"&p=").concat(encodeURIComponent(u.a.joinPath(a,e.name))),target:"_blank"},e.name)),s.a.createElement("td",null,u.a.bytesToSize(e.size)),s.a.createElement("td",null,s.a.createElement("a",{href:"#",className:"action-icon sf2-icon-reply ".concat(t?"":"invisible"),onClick:this.restoreItem,title:Object(b.mb)("Restore")}),s.a.createElement("a",{href:"".concat(b.ic,"repo/").concat(y,"/").concat(e.obj_id,"/download/?file_name=").concat(encodeURIComponent(e.name),"&p=").concat(encodeURIComponent(u.a.joinPath(a,e.name))),className:"action-icon sf2-icon-download ".concat(t?"":"invisible"),title:Object(b.mb)("Download")})))}}]),a}(s.a.Component);d.a.render(s.a.createElement(x,null),document.getElementById("wrapper"))}},[[1246,1,0]]]);
//# sourceMappingURL=repoSnapshot.chunk.js.map