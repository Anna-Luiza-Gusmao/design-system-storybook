var l=Object.defineProperty;var i=(n,t)=>l(n,"name",{value:t,configurable:!0});import{a as r,j as e}from"./jsx-runtime-1becbe17.js";function s({tokens:n,hasRemValue:t=!1}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),t&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([d,a])=>r("tr",{children:[r("td",{children:["$",d]}),e("td",{children:a}),t&&r("td",{children:[Number(a.replace("rem",""))*16,"px"]})]},d))})]})}i(s,"TokensGrid");try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TokensGrid-04fb9197.js.map
