(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{293:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(34),o=a(35),s=a(37),l=a(36),r=a(0),c=a.n(r),i=a(10),u=a(17),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(s.a)(r,t);var a=Object(l.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(i.a,{to:"./login"})}}]),r}(c.a.Component);return Object(u.b)(m)(t)}},294:function(e,t,a){e.exports={mainProfileBlock:"ProfileInfo_mainProfileBlock__31kJl",imgBlock:"ProfileInfo_imgBlock__1sxK-",descriptionBlock:"ProfileInfo_descriptionBlock__1jZDV",mainPhoto:"ProfileInfo_mainPhoto__Z9wyD",fileBtn:"ProfileInfo_fileBtn__1Gtlm"}},295:function(e,t,a){},296:function(e,t,a){e.exports={name:"ProfileData_name__2kpuj",status:"ProfileData_status__Eb3nH",line:"ProfileData_line__wuqBn",sectionAbout:"ProfileData_sectionAbout__3j2Ri",btnEdit:"ProfileData_btnEdit__1WX3h",contact:"ProfileData_contact__1bwRx",aboutRight:"ProfileData_aboutRight__dSIco"}},297:function(e,t,a){e.exports={postBlock:"MyPosts_postBlock__FgH-q",posts:"MyPosts_posts__1eRFb",postText:"MyPosts_postText__2V3uW"}},298:function(e,t,a){e.exports={item:"Post_item__iEFF-"}},299:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),s=a(37),l=a(36),r=a(0),c=a.n(r),i=(a(295),a(96)),u=a(294),m=a.n(u),p=a(40),f=a(107),b=a.n(f),d=a(32),E=a(129),h=a(49),v=a.n(h),k=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"Save")),n&&c.a.createElement("div",{className:v.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(d.c)("Full name","fullName",[],d.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(d.c)("","lookingForAJob",[],d.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(d.c)("My professional skills","lookingForAJobDescription",[],d.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(d.c)("About me","aboutMe",[],d.b)),c.a.createElement("div",null,Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(d.c)(e,"contacts."+e,[],d.a)))}))))})),P=a(296),_=a.n(P),g=function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(e.status),l=Object(i.a)(s,2),u=l[0],m=l[1];Object(r.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"===")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onChange:function(e){m(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},O=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:_.a.contact},c.a.createElement("b",null,t)," ",c.a.createElement("span",{className:_.a.aboutRight},a))},j=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode,o=e.status,s=e.updateStatus;return c.a.createElement("div",null,a&&c.a.createElement("div",{className:_.a.btnEdit},c.a.createElement("button",{onClick:n},"Edit")),c.a.createElement("div",{className:_.a.name},t.fullName),c.a.createElement("div",{className:_.a.status},c.a.createElement(g,{status:o,updateStatus:s,profile:t})),c.a.createElement("div",{className:_.a.line}),c.a.createElement("div",{className:_.a.sectionAbout},c.a.createElement("span",null,"About Me:")," ",c.a.createElement("span",{className:_.a.aboutRight},t.aboutMe)),c.a.createElement("div",{className:_.a.sectionAbout},c.a.createElement("span",null,"Looking for a job:")," ",c.a.createElement("span",{className:_.a.aboutRight},t.lookingForAJob?"YES":"NO")),t.lookingForAJob&&c.a.createElement("div",{className:_.a.sectionAbout},c.a.createElement("span",null,"My skills:")," ",c.a.createElement("span",{className:_.a.aboutRight},t.lookingForAJobDescription)),c.a.createElement("div",{className:_.a.line}),c.a.createElement("div",null,Object.keys(t.contacts).map((function(e){return c.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},N=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,s=e.savePhoto,l=e.saveProfile,u=Object(r.useState)(!1),f=Object(i.a)(u,2),d=f[0],E=f[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.mainProfileBlock},c.a.createElement("div",{className:m.a.imgBlock},c.a.createElement("img",{src:t.photos.large||b.a,className:m.a.mainPhoto}),o&&c.a.createElement("input",{className:m.a.fileBtn,type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})),c.a.createElement("div",{className:m.a.descriptionBlock},d?c.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){E(!1)}))}}):c.a.createElement(j,{goToEditMode:function(){E(!0)},profile:t,isOwner:o,status:a,updateStatus:n}))))},y=a(95),S=a(41),w=a(297),A=a.n(w),B=a(298),x=a.n(B),D=function(e){return c.a.createElement("div",{className:x.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),c.a.createElement("span",null,e.message),c.a.createElement("div",null,c.a.createElement("span",null,"Like: ",e.likeCount)))},F=a(89),I=a(57),M=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=Object(S.a)(this.props.posts).reverse().map((function(e){return c.a.createElement(D,{key:e.id,message:e.message,likeCount:e.likesCount})}));c.a.createRef();return c.a.createElement("div",null,c.a.createElement("div",{className:A.a.postBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(C,{onSubmit:function(t){e.props.addPost(t.newPostText)}})),c.a.createElement("div",{className:"".concat(A.a.postBlock," ").concat(A.a.posts)},t))}}]),a}(c.a.Component),T=Object(I.a)(10),C=Object(E.a)({form:"profileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",{className:A.a.postText},c.a.createElement(F.a,{name:"newPostText",component:d.b,placeholder:"What's new?",validate:[I.b,T]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),R=M,J=a(17),U=Object(J.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(y.a)(t))}}}))(R),V=function(e){return c.a.createElement("div",null,c.a.createElement(N,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(U,null))},L=a(10),W=a(9),q=a(293),z=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(W.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),L.f,q.a)(z)}}]);
//# sourceMappingURL=3.d6742c8d.chunk.js.map