import*as React from"react";import{memo,useRef,useState,useEffect}from"react";import{atom,useRecoilState,useRecoilValue,selector,useSetRecoilState,RecoilRoot}from"recoil";import styled from"styled-components";var _g;function _extends$1(){return(_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var SvgPuff=function(e){return React.createElement("svg",_extends$1({width:44,height:44,xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},e),_g=_g||React.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:2},React.createElement("circle",{cx:22,cy:22,r:1},React.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),React.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),React.createElement("circle",{cx:22,cy:22,r:1},React.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),React.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))};const LoaderContainer=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
`,Loader=()=>React.createElement(LoaderContainer,null,React.createElement(SvgPuff,null)),statusInitialState={currentIndex:0,total:0,isLoading:!1,isMounted:!1,status:"playing"},statusAtom=atom({key:"status",default:statusInitialState}),ImageContainer=styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
`,Image$2=styled.img`
    height:auto;
    width: auto;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
`,Image=({imgUrl:e,imageContainerStyle:t,imageStyle:r})=>{var a=useRef(null);const[n,i]=useRecoilState(statusAtom);return React.createElement(React.Fragment,null,n.isLoading&&React.createElement(Loader,null),React.createElement(ImageContainer,{style:t},React.createElement(Image$2,{ref:a,src:e,onLoad:()=>{var t=!1;i(e=>Object.assign(Object.assign({},e),{isLoading:t,isMounted:!0}))},style:r})))};var Image$1=memo(Image);const DEFAULT_INTERVAL=3e3,timerInitialState={interval:DEFAULT_INTERVAL,timeTracker:0},timerAtom=atom({key:"timer",default:timerInitialState}),VideoContainer=styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
`,Video$2=styled.video`
  width: auto;
  max-height: 100%;
  max-width: 100%;
  margin: auto;
`,Video=({vidUrl:t,videoStyle:e,videoContainerStyle:r})=>{const a=useRef(null),[n,i]=useRecoilState(statusAtom),[o,l]=useRecoilState(timerAtom),[s,c]=useState(!0),[d,u]=useState(!1),m=(t,r)=>{i(e=>Object.assign(Object.assign({},e),{isLoading:t,isMounted:!0})),l(e=>Object.assign(Object.assign({},e),{interval:r?1e3*r:e.interval}))};return useEffect(()=>{let e;t&&a.current&&"playing"===n.status&&(l(e=>{var t;return Object.assign(Object.assign({},e),{interval:null!=(t=a.current)&&t.duration?1e3*(null==(t=a.current)?void 0:t.duration):e.interval})}),0===o.timeTracker&&(a.current.currentTime=0),d||(e=a.current.play(),u(!0),void 0!==e&&e.then(e=>{c(!1)}).catch(e=>{console.error(e)}))),a.current&&"paused"===n.status&&(u(!1),a.current.pause())},[n,a]),React.createElement(React.Fragment,null,n.isLoading&&React.createElement(Loader,null),React.createElement(VideoContainer,{style:r},React.createElement(Video$2,{ref:a,src:t,autoPlay:!0,playsInline:!0,"webkit-playsInline":"true",onLoadStart:()=>m(!0),onLoadedData:e=>{m(!1,e.target.duration)},style:e,muted:s})))};var _path,Video$1=memo(Video);const StoryIntialState={stories:[]},storyAtom=atom({key:"storyAtom",default:StoryIntialState}),pxToRem=e=>e/16+"rem",HeadingContainer=styled.div`
  position: absolute;
  top: ${pxToRem(30)};
  width: 35ch;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: ${pxToRem(15)};
  font-size: ${pxToRem(18)};
  filter: drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9));
  @media (max-width: 320px) {
    padding-left: ${pxToRem(8)};
    width: 20ch;
  }
  @media (max-width: 375px) {
    padding-left: ${pxToRem(8)};
    width: 25ch;
  }
  @media (max-width: 425px) {
    padding-left: ${pxToRem(8)};
    width: 28ch;
  }
`,BottomContainer=styled.div`
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9));
  height: ${pxToRem(150)};
  width: 100%;
  color: #fff;
  overflow: auto;
  z-index: 1000;
  &::-webkit-scrollbar {
    width: ${pxToRem(5)};
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: ${pxToRem(4)};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`,TextContent=styled.div`
  display: flex;
  padding: 10px;
  font-size: ${pxToRem(16)};
  color: #fff;
  text-align: center;
`,StoryRenderer=({displayLoader:e,headingStyle:t,bottomContainerStyle:r,bottomTextStyle:a})=>{var n=useRecoilValue(storyAtom),i=useRecoilValue(statusAtom);return e?React.createElement(Loader,null):React.createElement(React.Fragment,null,React.createElement(HeadingContainer,{style:t},0<n.stories.length&&n.stories[i.currentIndex].title),0<n.stories.length&&"img"===n.stories[i.currentIndex].type?React.createElement(Image$1,{imgUrl:null==(e=n.stories[i.currentIndex])?void 0:e.url,imageStyle:n.imageStyle,imageContainerStyle:n.imageContainerStyle}):React.createElement(Video$1,{vidUrl:null==(t=n.stories[i.currentIndex])?void 0:t.url,videoStyle:n.videoStyle,videoContainerStyle:n.videoContainerStyle}),React.createElement(BottomContainer,{style:r},React.createElement(TextContent,{style:a},0<n.stories.length&&n.stories[i.currentIndex].description)))},StoryBody=styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111;
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`,StoryControlsOverlay=styled.div`
    position: absolute;
    height: inherit;
    width: inherit;
    display: flex;
`,StoryControls=styled.div`
    width: 50%;
    z-index: 999;
`,storiesSelector=selector({key:"storiesSelector",get:({get:e})=>{return e(storyAtom).stories}}),ProgressContainer=styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  max-width: 100%;
  width: 98%;
  flex-wrap: nowrap;
  padding: ${pxToRem(5)};
  padding-top: ${pxToRem(7)};
  align-self: center;
  z-index: 99;
  filter: drop-shadow(0 1px 8px #222);
  position: absolute;
`,ProgressWrapperContainer=styled.div`
  height: ${pxToRem(2)};
  max-width: 100%;
  background-color: #555;
  margin: ${pxToRem(2)};
  border-radius: ${pxToRem(2)};
  width: 33%;
  display: flex;
`,ProgressItem=styled.div.attrs(e=>({style:{transform:`scaleX(${e.scale/100})`}}))`
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-radius: ${pxToRem(2)};
    transform-origin: center left;
    backface-visibility: hidden;
    perspective: 1000;
`,Progress=({nextCallback:t,interval:r})=>{const a=useRecoilValue(storiesSelector),[n,i]=useRecoilState(statusAtom),[o,l]=useRecoilState(timerAtom),[s,c]=useState();let d=useRef(),u=o.timeTracker;const m=e=>{s||c(e),l(e=>(u=e.timeTracker+100/(e.interval/1e3*60),Object.assign(Object.assign({},e),{timeTracker:e.timeTracker+100/(e.interval/1e3*60)}))),u<100?d.current=requestAnimationFrame(m):(cancelAnimationFrame(d.current),n.currentIndex<n.total-1?(l(e=>({interval:"img"===a[n.currentIndex+1].type?r:e.interval,timeTracker:0})),i(e=>Object.assign(Object.assign({},e),{currentIndex:e.currentIndex+1,isLoading:!0,isMounted:!1}))):null!=t&&t())};return useEffect(()=>{if("paused"!==n.status)return n.isMounted&&!n.isLoading&&(d.current=requestAnimationFrame(m)),()=>{d.current&&cancelAnimationFrame(d.current)};d.current&&cancelAnimationFrame(d.current)},[n]),React.createElement(ProgressContainer,null,a.map((e,t)=>React.createElement(ProgressWrapperContainer,{style:{width:100/a.length+"%"},key:"progress-wrapper-"+t},React.createElement(ProgressItem,{scale:t===n.currentIndex?o.timeTracker:t<n.currentIndex?100:0,key:"progress-"+t}))))};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var SvgXmarkSolid=function(e){return React.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},e),_path=_path||React.createElement("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25-6.2 6.25-14.4 9.35-22.6 9.35s-16.38-3.125-22.62-9.375L160 301.3 54.63 406.6C48.38 412.9 40.19 416 32 416s-16.37-3.1-22.625-9.4c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"}))};const ClsoeContainer=styled.div`
  position: absolute;
  height: ${pxToRem(45)};
  width: 100%;
  margin-top: ${pxToRem(20)};
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  align-items: center;
`,CloseIcon=styled(SvgXmarkSolid)`
  margin-right: ${pxToRem(20)};
  cursor: pointer;
  padding: ${pxToRem(5)} ${pxToRem(10)};
  fill: white;
  height: ${pxToRem(20)};
`,Close=({closeCallback:e})=>React.createElement(ClsoeContainer,null,React.createElement(CloseIcon,{onClick:e}));var Close$1=memo(Close);const Stories=r=>{var e;const t=useSetRecoilState(storyAtom),a=useRecoilValue(storiesSelector),n=useSetRecoilState(timerAtom),[i,o]=useRecoilState(statusAtom),l=useRef(null);useEffect(()=>{var e;t(r),o(e=>{return Object.assign(Object.assign({},e),{isLoading:!0,isMounted:!1,total:null!=(e=r.stories.length)?e:0})}),n({timeTracker:0,interval:null!=(e=r.interval)?e:DEFAULT_INTERVAL})},[r]);var s=e=>{l.current=setTimeout(()=>{o(e=>Object.assign(Object.assign({},e),{isPaused:!0,status:"paused"}))},200)};var c=t=>e=>{e.preventDefault(),l.current&&clearTimeout(l.current),"paused"===i.status?o(e=>Object.assign(Object.assign({},e),{status:"playing"})):("next"===t&&(i.currentIndex<i.total-1?(n(e=>{var t;return{interval:"img"===a[i.currentIndex+1].type?null!=(t=r.interval)?t:DEFAULT_INTERVAL:e.interval,timeTracker:0}}),o(e=>Object.assign(Object.assign({},e),{currentIndex:e.currentIndex+1,isLoading:!0,isMounted:!1}))):i.isLoading||null==(e=r.nextCallback)||e.call(r)),"previous"===t&&(0<i.currentIndex?(n(e=>{var t;return{interval:"img"===a[i.currentIndex-1].type?null!=(t=r.interval)?t:DEFAULT_INTERVAL:e.interval,timeTracker:0}}),o(e=>Object.assign(Object.assign({},e),{currentIndex:e.currentIndex-1,isLoading:!0,isMounted:!1}))):i.isLoading||null==(e=r.previousCallback)||e.call(r)))};return React.createElement(StoryBody,{style:r.storyBodyStyle},React.createElement(Close$1,{closeCallback:r.closeCallback}),React.createElement(Progress,{nextCallback:r.nextCallback,interval:null!=(e=r.interval)?e:DEFAULT_INTERVAL}),React.createElement(StoryRenderer,{displayLoader:r.displayLoader,headingStyle:r.headingStyle,bottomContainerStyle:r.bottomContainerStyle,bottomTextStyle:r.bottomTextStyle}),React.createElement(StoryControlsOverlay,null,React.createElement(StoryControls,{onMouseDown:s,onMouseUp:c("previous"),onTouchStart:s,onTouchEnd:c("previous")}),React.createElement(StoryControls,{onMouseDown:s,onMouseUp:c("next"),onTouchStart:s,onTouchEnd:c("next")})))};function MyStories(e){return React.createElement(RecoilRoot,null,React.createElement(Stories,Object.assign({},e)))}export{MyStories as default};
