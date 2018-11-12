import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  body,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{
    margin:0;
    padding:0;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{
    display:block;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  audio,canvas,video{
    display:inline-block;
    *display:inline;
    *zoom:1;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  a div,a p,a h1,a h2,a h3,a h4,a h5,a h6{
    *cursor:pointer;
  }
  body,button,input,select,textarea{
    font:12px/1.5 tahoma,arial,sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:1em;
  }
  a{
    text-decoration:none;
  }
  @media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){
    a:active{
      background-color:transparent;
    }
  }
  a:active{
    outline:0 none;
  }
  small,cite,code,em,th,i,b{
    font-size:1em;
    font-style:normal;
    font-weight:500;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  input,select,textarea,button{
    font-size:1em;
    -webkit-box-sizing:content-box;
    -moz-box-sizing:content-box;
    box-sizing:content-box;
  }
  button,input[type=button],input[type=submit]{
    cursor:pointer;
  }
  button[disabled],input[disabled]{
    cursor:default;
  }
  button::-moz-focus-inner,input::-moz-focus-inner{
    border:0 none;
    padding:0;
  }
  textarea{
    overflow:auto;
    vertical-align:top;
  }
  input:focus,textarea:focus{
    outline:0 none;
  }
  table{
    border-collapse:collapse;
    border-spacing:0;
  }
  fieldset,img,iframe{
    border:0 none;
  }
  img{
    display:inline-block;
    vertical-align:bottom;
    -ms-interpolation-mode:bicubic;
  }
  iframe{
    display:block;
  }
  ul,ol{
    list-style:none;
  }
  li{
    vertical-align:top;
  }
  q:before,q:after{
    content:'';
  }
  input,textarea,button{
    -webkit-appearance: none;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #333;
    // font-size: .3rem;
    padding-bottom: 1rem;
    // background: #f9f9f9;
    // background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
    //  background-blend-mode: multiply,multiply;
    // background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
    // background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
    background-attachment: fixed;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  }
  a {
    text-decoration: none;
    color: #2c3e50;
  }


.markdown-text p,.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0
}

.markdown-text>:last-child,.preview>:last-child,textarea#title {
  margin-bottom: 1em
}

.markdown-text>:first-child,.preview>:first-child {
  margin-top: 0
}

.markdown-text li,.preview li {
  font-size: 14px;
  line-height: 2em
}

.markdown-text li code,.markdown-text p code,.preview li code,.preview p code {
  color: #000;
  background-color: #fcfafa;
  padding: 4px 6px
}

.markdown-text a {
  text-decoration: underline;
  
  ::before {
    content: '🔗';
    display: inline-block;
    margin: 0 2px;
  }
}

.markdown-text img {
  cursor: pointer;
  max-width: 100%;
}

.markdown-text h1 code,.markdown-text h2 code,.markdown-text h3 code,.markdown-text h4 code,.markdown-text h5 code,.markdown-text h6 code {
  font-size: inherit;
  color: inherit
}

.markdown_editor .markdown_in_editor,.markdown_editor .markdown_in_preview {
  display: none
}

.markdown_editor.in_editor .markdown_in_editor,.markdown_editor.in_preview .markdown_in_preview {
  display: block
}

blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee
}

blockquote p {
  font-size: 17.5px;
  font-weight: 300;
  line-height: 1.25
}

blockquote small {
  color: #999
}


blockquote:after,blockquote:before,q:after,q:before {
  content: ""
}

code,pre {
  padding: 0 3px 2px;
  font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
  font-size: 12px;
  color: #333;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px
}

code {
  padding: 2px 4px;
  color: #d14;
  white-space: nowrap;
  background-color: #f7f7f9;
  border: 1px solid #e1e1e8
}

pre {
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border: 1px solid rgba(0,0,0,.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px
}

fieldset,legend,pre code {
  padding: 0;
  border: 0
}

pre code {
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent
}
`

export const AppContainer = styled.div`
  width: 50vw;
  margin: 20px auto 0;
`