"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[866],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(t),p=l,d=m["".concat(u,".").concat(p)]||m[p]||f[p]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5549:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),i=["components"],a={},u=void 0,c={unversionedId:"config/Format & lint",id:"config/Format & lint",isDocsHomePage:!1,title:"Format & lint",description:"- There are many plugins for this , I will use null-ls.nvim in this example!",source:"@site/docs/config/Format & lint.md",sourceDirName:"config",slug:"/config/Format & lint",permalink:"/config/Format & lint",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Autocompletion",permalink:"/config/Autocompletion"},next:{title:"Features",permalink:"/features"}},s=[{value:"Install null-ls",id:"install-null-ls",children:[]},{value:"Null-ls config",id:"null-ls-config",children:[]}],f={toc:s};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are many plugins for this , I will use null-ls.nvim in this example!")),(0,o.kt)("h3",{id:"install-null-ls"},"Install null-ls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},' use {\n      "jose-elias-alvarez/null-ls.nvim",\n      after = "nvim-lspconfig",\n      config = function()\n         require("custom.plugin_confs.null-ls").setup()\n      end,\n   }\n\n-- load it after nvim-lspconfig , since we\'ll use some lspconfig stuff in the null-ls config!\n')),(0,o.kt)("h3",{id:"null-ls-config"},"Null-ls config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NOTE : The below config is my personal one! So use it as a reference or check null-ls docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local null_ls = require "null-ls"\nlocal b = null_ls.builtins\n\nlocal sources = {\n\n   b.formatting.prettierd.with { filetypes = { "html", "markdown", "css" } },\n   b.formatting.deno_fmt,\n\n   -- Lua\n   b.formatting.stylua,\n   b.diagnostics.luacheck.with { extra_args = { "--global vim" } },\n\n   -- Shell\n   b.formatting.shfmt,\n   b.diagnostics.shellcheck.with { diagnostics_format = "#{m} [#{c}]" },\n}\n\nlocal M = {}\n\nM.setup = function()\n   null_ls.setup {\n      debug = true,\n      sources = sources,\n\n      -- format on save\n      on_attach = function(client)\n         if client.resolved_capabilities.document_formatting then\n            vim.cmd "autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync()"\n         end\n      end,\n   }\nend\n\nreturn M\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Format code : leader fm"),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md"},"null-ls builtins")," to get config for your language!"),(0,o.kt)("li",{parentName:"ul"},"Also note that in the above example I've added some config of linters and formatters in null-ls config, so those programs must be installed on my system as well! Like prettierd , stylua , shfmt , eslint_d etc.")))}m.isMDXComponent=!0}}]);