"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var scrollbarStyle=function(){var barWidth=5,radius=0;return{"::-webkit-scrollbar":{width:barWidth+"px"},"::-webkit-scrollbar-track":{"-webkit-border-radius":radius+"px","border-radius":radius+"px",background:"rgba(0,0,0,0.1)"},"::-webkit-scrollbar-thumb":{"-webkit-border-radius":radius+"px","border-radius":radius+"px",background:"rgba(0,0,0,0.2)"},"::-webkit-scrollbar-thumb:hover":{background:"rgba(0,0,0,0.4)"},"::-webkit-scrollbar-thumb:window-inactive":{background:"rgba(0,0,0,0.05)"}}},styles=[{".example.pages":{"&.slider, .content, .page":{height:"inherit"}," .page-content":[scrollbarStyle(),{height:"inherit","-webkit-overflow-scrolling":"touch","-webkit-transform":"translate3d(0, 0, 0)","overflow-x":"hidden","overflow-y":"auto"," .article-content":{padding:"20px 16px"}," .title":{"font-size":"21px","line-height":"29.4px",margin:"0 0 16px 0"}," p":{"font-size":"15px","line-height":"21px",color:"#777",margin:"0 0 16px 0"}}]}}];exports["default"]=styles;
//# sourceMappingURL=pages-style.js.map