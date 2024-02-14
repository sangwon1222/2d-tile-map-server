import{f as x,r as b,o as w,h as g,l as n,a7 as i,a8 as a,W as p,a3 as v,a4 as y,p as h,$ as _,n as r,a0 as k}from"./index-8e7e92d0.js";import{a as U}from"./auth-5938e945.js";import"./index-0c264f6f.js";const I=l=>(v("data-v-2fb0b9ca"),l=l(),y(),l),V={class:"sign-up-wrap p-[10px]"},C={class:"flex"},q={class:"flex"},N={class:"mt-10 flex flex-col gap-[10px] p-[10px]"},S=I(()=>n("button",{class:"h-[50px] rounded bg-main-1 text-white",accesskey:"s",type:"submit"},"회원 가입",-1)),P=x({__name:"index",setup(l){const e=b({id:"",pw:"",rePw:"",nickname:"",name:"",email:"",phoneNumber:"",verificationCode:"",recommendId:"",isAgree:!1,openTermsofUse:!1,openPrivacyStatement:!1}),u=async()=>{const s=document.getElementById("pw");if(e.pw!=e.rePw){h.error("비밀번호가 일치하지 않습니다."),e.pw="",e.rePw="",s.focus();return}const o={id:e.id,pw:e.pw,nickname:e.nickname,name:e.name,email:e.email,phoneNumber:e.phoneNumber,recommendId:e.recommendId},t=_(JSON.stringify(o),"signup-info");r.isLoading=!0;try{const{ok:d}=await U.signUp({l:t});d&&location.replace("/login")}catch(d){console.log("error   >",d)}finally{r.isLoading=!1}},m=()=>{console.log("send verification code")},c=()=>{console.log(e.verificationCode,"verification code")},f=()=>{console.log("cancel"),location.replace("/login")};return(s,o)=>(w(),g("div",V,[n("form",{class:"user-info-box gap-[10px] p-[14px]",onSubmit:p(u,["prevent"])},[i(n("input",{id:"id","onUpdate:modelValue":o[0]||(o[0]=t=>e.id=t),type:"text",maxlength:"20",placeholder:"아이디를 입력하세요.",required:""},null,512),[[a,e.id]]),i(n("input",{id:"pw","onUpdate:modelValue":o[1]||(o[1]=t=>e.pw=t),type:"password",maxlength:"20",placeholder:"비밀번호를 입력하세요.",autocomplete:"off",required:""},null,512),[[a,e.pw]]),i(n("input",{id:"re-pw","onUpdate:modelValue":o[2]||(o[2]=t=>e.rePw=t),type:"password",maxlength:"20",autocomplete:"off",placeholder:"비밀번호를 확인해주세요.",required:""},null,512),[[a,e.rePw]]),i(n("input",{id:"nickname","onUpdate:modelValue":o[3]||(o[3]=t=>e.nickname=t),type:"text",maxlength:"20",autocomplete:"off",placeholder:"닉네임을 입력하세요.",required:""},null,512),[[a,e.nickname]]),i(n("input",{id:"name","onUpdate:modelValue":o[4]||(o[4]=t=>e.name=t),type:"text",maxlength:"10",placeholder:"이름을 입력하세요.",required:""},null,512),[[a,e.name]]),i(n("input",{id:"eMail","onUpdate:modelValue":o[5]||(o[5]=t=>e.email=t),type:"email",maxlength:"100",autocomplete:"off",placeholder:"이메일을 입력하세요.",required:""},null,512),[[a,e.email]]),n("div",C,[i(n("input",{id:"phone-number","onUpdate:modelValue":o[6]||(o[6]=t=>e.phoneNumber=t),type:"tel",autocomplete:"off",placeholder:"휴대폰 번호를 입력하세요.(-제외)",required:""},null,512),[[a,e.phoneNumber]]),n("button",{type:"button",class:"w-[160px] bg-main-1 text-white",onClick:p(m,["prevent"])}," 인증번호 발송 ")]),n("div",q,[i(n("input",{id:"verification-code","onUpdate:modelValue":o[7]||(o[7]=t=>e.verificationCode=t),type:"number",placeholder:"인증번호를 입력하세요.",required:""},null,512),[[a,e.verificationCode]]),n("button",{type:"button",class:"w-[160px] bg-main-1 text-white",onClick:p(c,["prevent"])},"인증")]),i(n("input",{"onUpdate:modelValue":o[8]||(o[8]=t=>e.recommendId=t),type:"text",placeholder:"추천인 아이디"},null,512),[[a,e.recommendId]]),n("div",N,[S,n("button",{class:"h-[50px] rounded border",type:"button",onClick:p(f,["self","prevent"])},"취소")])],32)]))}});const M=k(P,[["__scopeId","data-v-2fb0b9ca"]]);export{M as default};
