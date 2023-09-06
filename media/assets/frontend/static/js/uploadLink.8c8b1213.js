"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[709],{27038:function(e,a,t){var r=t(15671),i=t(43144),l=t(60136),o=t(29388),n=t(72791),s=t(54164),d=t(95996),p=t(22228),u=t(53585),c=t(263),m=t(55516),h=t(97326),f=t(53008),g=t.n(f),b=t(10753),v=t.n(b),F=t(38358),x=t(20387),U=t(59508),k=t(52919),y=t(81815),j=t(80184),S="uploading",w="error",C="isSaving",L="uploaded",N=function(e){(0,l.Z)(t,e);var a=(0,o.Z)(t);function t(e){var i;return(0,r.Z)(this,t),(i=a.call(this,e)).onUploadCancel=function(e){e.preventDefault(),i.props.onUploadCancel(i.props.resumableFile)},i.onUploadRetry=function(e){e.preventDefault(),i.props.onUploadRetry(i.props.resumableFile)},i.formatFileSize=function(e){return"number"!==typeof e?"":e>=1e9?(e/1e9).toFixed(1)+" G":e>=1e6?(e/1e6).toFixed(1)+" M":e>=1e3?(e/1e3).toFixed(1)+" K":e.toFixed(1)+" B"},i.state={uploadState:S},i}return(0,i.Z)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.resumableFile,t=S;a.error?t=w:(0!==a.remainingTime||a.isSaved||(t=C),a.isSaved&&(t=L)),this.setState({uploadState:t})}},{key:"render",value:function(){var e=this.props.resumableFile,a=Math.round(100*e.progress()),t=e.error;return(0,j.jsxs)("tr",{className:"file-upload-item",children:[(0,j.jsx)("td",{className:"upload-name",children:(0,j.jsx)("div",{className:"ellipsis",children:e.newFileName})}),(0,j.jsx)("td",{children:(0,j.jsx)("span",{className:"file-size",children:this.formatFileSize(e.size)})}),(0,j.jsxs)("td",{className:"upload-progress",children:[(this.state.uploadState===S||this.state.uploadState===C)&&(0,j.jsxs)(n.Fragment,{children:[e.size>=1e8&&(0,j.jsxs)(n.Fragment,{children:[e.isUploading()&&(0,j.jsxs)("div",{className:"progress-container",children:[(0,j.jsx)("div",{className:"progress",children:(0,j.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})}),-1===e.remainingTime&&(0,j.jsx)("div",{className:"progress-text",children:(0,u.ih)("Preparing to upload...")}),e.remainingTime>0&&(0,j.jsxs)("div",{className:"progress-text",children:[(0,u.ih)("Remaining")," ",d.c.formatTime(e.remainingTime)]}),0===e.remainingTime&&(0,j.jsx)("div",{className:"progress-text",children:(0,u.ih)("Indexing...")})]}),!e.isUploading()&&(0,j.jsx)("div",{className:"progress-container d-flex align-items-center",children:(0,j.jsx)("div",{className:"progress",children:(0,j.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),e.size<1e8&&(0,j.jsx)("div",{className:"progress-container d-flex align-items-center",children:(0,j.jsx)("div",{className:"progress",children:(0,j.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),this.state.uploadState===w&&(0,j.jsx)("div",{className:"message err-message ml-0",dangerouslySetInnerHTML:{__html:t}})]}),(0,j.jsx)("td",{className:"upload-operation",children:(0,j.jsxs)(n.Fragment,{children:[this.state.uploadState===S&&(0,j.jsx)("a",{href:"#",onClick:this.onUploadCancel,role:"button",children:(0,u.ih)("Cancel")}),this.state.uploadState===w&&(0,j.jsx)("a",{href:"#",onClick:this.onUploadRetry,role:"button",children:(0,u.ih)("Retry")}),this.state.uploadState===C&&(0,j.jsx)("span",{className:"saving",children:(0,u.ih)("Saving...")}),this.state.uploadState===L&&(0,j.jsx)("span",{className:"uploaded",children:(0,u.ih)("Uploaded")})]})})]})}}]),t}(n.Component),I=function(e){(0,l.Z)(t,e);var a=(0,o.Z)(t);function t(){return(0,r.Z)(this,t),a.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.file,a=(0,u.ih)("Please upload files less than {placeholder}").replace("{placeholder}",d.c.bytesToSize(1e3*u.Og*1e3));return(0,j.jsxs)("tr",{className:"file-upload-item",children:[(0,j.jsx)("td",{className:"upload-name",children:(0,j.jsx)("div",{className:"ellipsis",children:e.name})}),(0,j.jsx)("td",{colSpan:3,className:"error",children:a})]})}}]),t}(n.Component),D=I,Z=function(e){(0,l.Z)(t,e);var a=(0,o.Z)(t);function t(e){var i;return(0,r.Z)(this,t),(i=a.call(this,e)).toggleDropdown=function(){i.setState({dropdownOpen:!i.state.dropdownOpen})},i.onDropdownToggleKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||i.toggleDropdown()},i.onMenuItemKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||e.target.click()},i.state={dropdownOpen:!1},i}return(0,i.Z)(t,[{key:"render",value:function(){var e=this,a=this.props.allFilesUploaded;return(0,j.jsxs)(n.Fragment,{children:[(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsxs)(F.Z,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown,children:[(0,j.jsx)(x.Z,{color:"primary",caret:!0,onKeyDown:this.onDropdownToggleKeyDown,children:(0,u.ih)("Upload")}),(0,j.jsxs)(U.Z,{children:[(0,j.jsx)(k.Z,{onClick:this.props.onFileUpload,onKeyDown:this.onMenuItemKeyDown,children:(0,u.ih)("Upload Files")}),(0,j.jsx)(k.Z,{onClick:this.props.onFolderUpload,onKeyDown:this.onMenuItemKeyDown,children:(0,u.ih)("Upload Folder")})]})]}),(0,j.jsx)(y.Z,{color:"primary",outline:!0,className:"ml-4",onClick:this.props.onCancelAllUploading,disabled:a,children:(0,u.ih)("Cancel All")})]}),(0,j.jsx)("div",{className:"mt-4 mh-2",children:(0,j.jsxs)("table",{className:"table-thead-hidden",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{width:"35%",children:(0,u.ih)("name")}),(0,j.jsx)("th",{width:"15%",children:(0,u.ih)("size")}),(0,j.jsx)("th",{width:"35%",children:(0,u.ih)("progress")}),(0,j.jsx)("th",{width:"15%",children:(0,u.ih)("state")})]})}),(0,j.jsxs)("tbody",{children:[this.props.forbidUploadFileList.map((function(e,a){return(0,j.jsx)(D,{file:e},a)})),this.props.uploadFileList.map((function(a,t){return(0,j.jsx)(N,{resumableFile:a,onUploadCancel:e.props.onUploadCancel,onUploadRetry:e.props.onUploadRetry},t)})).reverse()]})]})})]})}}]),t}(n.Component),z=t(51832),E=(t(65271),function(e){(0,l.Z)(t,e);var a=(0,o.Z)(t);function t(e){var i;return(0,r.Z)(this,t),(i=a.call(this,e)).componentWillUnmount=function(){window.onbeforeunload=null,!0===i.props.dragAndDrop&&i.resumable.disableDropOnDocument()},i.onbeforeunload=function(){if(window.uploader&&window.uploader.isUploadProgressDialogShow&&100!==window.uploader.totalProgress)return""},i.bindCallbackHandler=function(){var e=i.props,a=e.minFileSizeErrorCallback,t=e.fileTypeErrorCallback;i.maxFilesErrorCallback&&(i.resumable.opts.maxFilesErrorCallback=i.maxFilesErrorCallback),a&&(i.resumable.opts.minFileSizeErrorCallback=i.props.minFileSizeErrorCallback),i.maxFileSizeErrorCallback&&(i.resumable.opts.maxFileSizeErrorCallback=i.maxFileSizeErrorCallback),t&&(i.resumable.opts.fileTypeErrorCallback=i.props.fileTypeErrorCallback)},i.bindEventHandler=function(){i.resumable.on("chunkingComplete",i.onChunkingComplete.bind((0,h.Z)(i))),i.resumable.on("fileAdded",i.onFileAdded.bind((0,h.Z)(i))),i.resumable.on("fileProgress",i.onFileProgress.bind((0,h.Z)(i))),i.resumable.on("fileSuccess",i.onFileUploadSuccess.bind((0,h.Z)(i))),i.resumable.on("fileError",i.onFileError.bind((0,h.Z)(i))),i.resumable.on("uploadStart",i.onUploadStart.bind((0,h.Z)(i))),i.resumable.on("progress",i.onProgress.bind((0,h.Z)(i))),i.resumable.on("complete",i.onComplete.bind((0,h.Z)(i))),i.resumable.on("error",i.onError.bind((0,h.Z)(i))),i.resumable.on("dragstart",i.onDragStart.bind((0,h.Z)(i)))},i.maxFilesErrorCallback=function(e,a){var t=u.dd,r=(0,u.ih)("Please upload no more than {maxFiles} files at a time.");r=r.replace("{maxFiles}",t),z.Z.danger(r)},i.maxFileSizeErrorCallback=function(e){var a=i.state.forbidUploadFileList;a.push(e),i.setState({forbidUploadFileList:a})},i.onChunkingComplete=function(e){!0===i.state.allFilesUploaded&&i.setState({allFilesUploaded:!1});var a=i.props.path,t=e.fileName,r=e.relativePath,l=t===r;if(e.formData={},l)e.formData={parent_dir:a};else{var o=r.slice(0,r.lastIndexOf("/")+1);e.formData={parent_dir:a,relative_path:o}}},i.onFileAdded=function(e,a){if(e.fileName===e.relativePath&&1===a.length){i.setUploadFileList(i.resumable.files),p.I.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(a){i.resumable.opts.target=a.data.upload_link+"?ret-json=1",i.resumableUpload(e)})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)}))}else i.setUploadFileList(i.resumable.files),i.isUploadLinkLoaded||(i.isUploadLinkLoaded=!0,p.I.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(e){i.resumable.opts.target=e.data.upload_link+"?ret-json=1",i.resumable.upload()})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)})))},i.resumableUpload=function(e){var a=i.props,t=a.repoID,r=a.path;p.I.getFileUploadedBytes(t,r,e.fileName).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(u.pL)*1024||1048576,l=Math.floor(t/r);e.markChunksCompleted(l),i.resumable.upload()})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)}))},i.filesAddedComplete=function(e,a){i.state.forbidUploadFileList.length>0&&0===a.length&&i.setState({isUploadProgressDialogShow:!0,totalProgress:100})},i.setUploadFileList=function(){var e=i.resumable.files;i.setState({uploadFileList:e,isUploadProgressDialogShow:!0}),d.c.registerGlobalVariable("uploader","isUploadProgressDialogShow",!0)},i.onFileProgress=function(e){var a=i.getBitrate(),t=i.state.uploadFileList.map((function(t){if(t.uniqueIdentifier===e.uniqueIdentifier&&a){var r=8*(t.size-t.size*t.progress()),i=Math.floor(r/a);t.remainingTime=i}return t}));i.setState({uploadBitrate:a,uploadFileList:t})},i.getBitrate=function(){var e=0,a=0,t=(new Date).getTime();if(i.resumable.files.forEach((function(a){e+=a.progress()*a.size})),i.timestamp){var r=t-i.timestamp;if(r<i.bitrateInterval)return i.state.uploadBitrate;(e<i.loaded||0===i.loaded)&&(i.loaded=e),a=(e-i.loaded)*(1e3/r)*8}return i.timestamp=t,i.loaded=e,a},i.onUploadStart=function(){var e=(0,u.ih)("File upload started");z.Z.notify(e)},i.onProgress=function(){var e=Math.round(100*i.resumable.progress());i.setState({totalProgress:e}),d.c.registerGlobalVariable("uploader","totalProgress",e)},i.onFileUploadSuccess=function(e,a){var t=e.formData,r=(new Date).getTime()/1e3;if(a=t.replace?a:JSON.parse(a)[0],t.relative_path){var l=t.relative_path,o=l.slice(0,l.indexOf("/")),n={id:a.id,name:o,type:"dir",mtime:r};i.notifiedFolders.some((function(e){return e.name===n.name}))||(i.notifiedFolders.push(n),i.props.onFileUploadSuccess(n));var s=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=l+a.name,t.isSaved=!0),t}));i.setState({uploadFileList:s})}else if(t.replace){var d=e.fileName,p={id:a,name:d,type:"file",mtime:r};i.props.onFileUploadSuccess(p);var u=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.newFileName=d,a.isSaved=!0),a}));i.setState({uploadFileList:u})}else{var c={id:a.id,type:"file",name:a.name,size:a.size,mtime:r};i.props.onFileUploadSuccess(c);var m=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=a.name,t.isSaved=!0),t}));i.setState({uploadFileList:m})}},i.onFileError=function(e,a){var t="";if(a){var r=a.replace(/\n/g,"");r=JSON.parse(r),"File locked by others."===(t=r.error)&&(t=(0,u.ih)("File is locked by others.")),"Internal error."===t&&(t=(0,u.ih)("Internal Server Error"))}else t=(0,u.ih)("Network error");var l=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(i.state.retryFileList.push(a),a.error=t),a}));i.loaded=0,i.setState({retryFileList:i.state.retryFileList,uploadFileList:l})},i.onComplete=function(){if(!i.error){var e=(0,u.ih)("All files uploaded");z.Z.success(e)}i.error=!1,i.notifiedFolders=[],i.isUploadLinkLoaded=!1,i.setState({allFilesUploaded:!0})},i.onError=function(e,a){var t=(0,u.ih)("Error");a&&a.fileName&&(t=(0,u.ih)("Failed to upload {file_name}.").replace("{file_name}",a.fileName)),z.Z.danger(t,{id:"file-error-msg"}),i.error=!0,i.isUploadLinkLoaded=!1,d.c.registerGlobalVariable("uploader","totalProgress",100)},i.setHeaders=function(e,a){var t=a.offset,r=a.getOpt("chunkSize"),i=0===e.size?1:e.size,l=0!==t?t*r:0,o=Math.min(i,(t+1)*r)-1;return i-a.endByte<r&&!a.getOpt("forceChunkSize")&&(o=i),{Accept:"application/json; text/javascript, */*; q=0.01","Content-Disposition":'attachment; filename="'+encodeURI(e.fileName)+'"',"Content-Range":"bytes "+l+"-"+o+"/"+i}},i.setQuery=function(e){return e.formData},i.generateUniqueIdentifier=function(e){var a=e.webkitRelativePath||e.relativePath||e.fileName||e.name;return v()(a+new Date)+a},i.onClick=function(e){e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()},i.onFileUpload=function(){i.uploadInput.current.removeAttribute("webkitdirectory"),i.uploadInput.current.click()},i.onFolderUpload=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory"),i.uploadInput.current.click()},i.onDragStart=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory")},i.onCloseUploadDialog=function(){i.loaded=0,i.resumable.files=[],i.isUploadLinkLoaded=!1,i.setState({isUploadProgressDialogShow:!1,uploadFileList:[],forbidUploadFileList:[]}),d.c.registerGlobalVariable("uploader","isUploadProgressDialogShow",!1)},i.onUploadCancel=function(e){var a=i.state.uploadFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier||(a.cancel(),!1)}));i.resumable.isUploading()||(i.setState({totalProgress:"100",allFilesUploaded:!0}),i.loaded=0),i.setState({uploadFileList:a})},i.onCancelAllUploading=function(){var e=i.state.uploadFileList.filter((function(e){return!Math.round(1!==e.progress())||(e.cancel(),!1)}));i.loaded=0,i.setState({allFilesUploaded:!0,totalProgress:"100",uploadFileList:e}),i.isUploadLinkLoaded=!1},i.onUploadRetry=function(e){p.I.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(a){i.resumable.opts.target=a.data.upload_link+"?ret-json=1";var t=i.state.retryFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier})),r=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.error=null,i.retryUploadFile(a)),a}));i.setState({retryFileList:t,uploadFileList:r})})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)}))},i.retryUploadFile=function(e){var a=i.props,t=a.repoID,r=a.path,l=e.fileName;if(!(e.fileName===e.relativePath)){var o=e.formData.relative_path;l=("/"===r?r+o:r+"/"+o)+l}e.bootstrap();var n=!1;e.resumableObj.on("chunkingComplete",(function(){n||p.I.getFileUploadedBytes(t,r,l).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(u.pL)*1024||1048576,i=Math.floor(t/r);e.markChunksCompleted(i),e.resumableObj.upload()})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)})),n=!0}))},i.replaceRepetitionFile=function(){var e=i.props,a=e.repoID,t=e.path;p.I.getUpdateLink(a,t).then((function(e){i.resumable.opts.target=e.data;var a=i.resumable.files[i.resumable.files.length-1];a.formData.replace=1,a.formData.target_file=a.formData.parent_dir+a.fileName,i.setUploadFileList(i.resumable.files),i.resumable.upload()})).catch((function(e){var a=d.c.getErrorMsg(e);z.Z.danger(a)}))},i.cancelFileUpload=function(){i.resumable.files.pop()},i.state={retryFileList:[],uploadFileList:[],forbidUploadFileList:[],totalProgress:0,isUploadProgressDialogShow:!1,currentResumableFile:null,uploadBitrate:0,allFilesUploaded:!1},i.uploadInput=n.createRef(),i.notifiedFolders=[],i.timestamp=null,i.loaded=0,i.bitrateInterval=500,i.isUploadLinkLoaded=!1,window.onbeforeunload=i.onbeforeunload,i}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){this.resumable=new(g())({target:"",query:this.setQuery||{},fileType:this.props.filetypes,maxFiles:u.dd||void 0,maxFileSize:1e3*u.Og*1e3||void 0,testMethod:this.props.testMethod||"post",testChunks:this.props.testChunks||!1,headers:this.setHeaders||{},withCredentials:this.props.withCredentials||!1,chunkSize:1024*parseInt(u.pL)*1024||1048576,simultaneousUploads:this.props.simultaneousUploads||1,fileParameterName:this.props.fileParameterName,generateUniqueIdentifier:this.generateUniqueIdentifier,forceChunkSize:!0,maxChunkRetries:3,minFileSize:0}),this.resumable.assignBrowse(this.uploadInput.current,!0),this.props.dragAndDrop&&this.resumable.assignDrop(document.getElementById("upload-link-drop-zone")),this.bindCallbackHandler(),this.bindEventHandler()}},{key:"render",value:function(){return(0,j.jsxs)(n.Fragment,{children:[(0,j.jsx)("div",{className:"file-uploader-container",children:(0,j.jsx)("div",{className:"file-uploader",children:(0,j.jsx)("input",{className:"upload-input",type:"file",ref:this.uploadInput,onClick:this.onClick})})}),(0,j.jsx)(Z,{retryFileList:this.state.retryFileList,uploadFileList:this.state.uploadFileList,forbidUploadFileList:this.state.forbidUploadFileList,totalProgress:this.state.totalProgress,uploadBitrate:this.state.uploadBitrate,allFilesUploaded:this.state.allFilesUploaded,onCloseUploadDialog:this.onCloseUploadDialog,onCancelAllUploading:this.onCancelAllUploading,onUploadCancel:this.onUploadCancel,onUploadRetry:this.onUploadRetry,onFileUpload:this.onFileUpload,onFolderUpload:this.onFolderUpload})]})}}]),t}(n.Component)),P=E,_=window.app.pageOptions.username,M=window.uploadLink,T=M.dirName,q=M.sharedBy,O=M.noQuota,A=M.maxUploadFileSize,R=M.token,B=M.repoID,H=M.path,K=function(e){(0,l.Z)(t,e);var a=(0,o.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).onFileUploadSuccess=function(e){var a=e.name;e.size;p.I.shareLinksUploadDone(R,d.c.joinPath(H,a))},e}return(0,i.Z)(t,[{key:"render",value:function(){var e=this;return(0,j.jsxs)("div",{className:"h-100 d-flex flex-column",children:[(0,j.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[(0,j.jsx)(c.Z,{}),_&&(0,j.jsx)(m.Z,{})]}),(0,j.jsx)("div",{className:"o-auto",children:(0,j.jsxs)("div",{className:"py-4 px-6 mx-auto rounded",id:"upload-link-panel",children:[(0,j.jsx)("h3",{className:"h5",dangerouslySetInnerHTML:{__html:(0,u.ih)("Upload files to {folder_name_placeholder}").replace("{folder_name_placeholder}",'<span class="op-target">'.concat(d.c.HTMLescape(T),"</span>"))}}),(0,j.jsx)("p",{className:"small shared-by",dangerouslySetInnerHTML:{__html:"".concat((0,u.ih)("shared by:")," ").concat(q.avatar," ").concat(q.name)}}),O?(0,j.jsxs)("div",{className:"py-6 text-center",children:[(0,j.jsx)("span",{className:"sf3-font sf3-font-tips warning-icon"}),(0,j.jsx)("p",{children:(0,u.ih)("The owner of this library has run out of space.")})]}):(0,j.jsxs)(n.Fragment,{children:[(0,j.jsxs)("ol",{className:"small text-gray",children:[(0,j.jsx)("li",{className:"tip-list-item",children:(0,u.ih)("Folder upload is limited to Chrome, Firefox 50+, and Microsoft Edge.")}),A&&(0,j.jsx)("li",{className:"tip-list-item",children:(0,u.ih)("File size should be smaller than {max_size_placeholder}.").replace("{max_size_placeholder}",d.c.bytesToSize(1e3*A*1e3))})]}),(0,j.jsxs)("div",{id:"upload-link-drop-zone",className:"text-center mt-2 mb-4",children:[(0,j.jsx)("span",{className:"sf3-font sf3-font-upload upload-icon"}),(0,j.jsx)("p",{className:"small text-gray mb-0",children:(0,u.ih)("Drag and drop files or folders here.")})]}),(0,j.jsx)(P,{ref:function(a){return e.uploader=a},dragAndDrop:!0,token:R,repoID:B,path:H,onFileUploadSuccess:this.onFileUploadSuccess})]})]})})]})}}]),t}(n.Component);s.render((0,j.jsx)(K,{}),document.getElementById("wrapper"))}},function(e){e.O(0,[351],(function(){return a=27038,e(e.s=a);var a}));e.O()}]);
//# sourceMappingURL=uploadLink.8c8b1213.js.map