gh-page 를 이용하여 github에서 제공하는 웹페이지 사용가능.
npm i gh-pages

package.json에 
 "homepage": url
 
  npm run build  명령을 이용해  build 후  gh-pages 에 uproad 해야함.
"scripts"에  "deploy": "gh-pages -d build"
"scripts"에  "predeploy" :"npm run  build"

=> npm run build 실행 시 -> predeploy가 build를 실행 -> build 후 deploy가 gh-pages에 build directory를 업로드


---------------------------------------------------------------------

(new version)

react hook 을 이용하면  state를 사용하기 위해 class component를 사용하지 않아도 됨.

---------------------------------------------------------------------

package   :  react-router-dom  :   router 구성 관련 component

import { HashRouter, Route } from "react-router-dom";

function App() {
  return <HashRouter>
    <Route />
  </HashRouter>
}

 // HashRouter 안에 Route
 *// Route 에 필요한 param 2가지   path  component

 주의 )  react는 동시에 route 할 수 있음.   // url parsing할때 겹치면 동시에 routing
   <Route path="/" component={Home} />
   <Route path="/about" component={about} /> 
 이 모두 있다면  / 위에  /about도 같이 routing 됨.     //      /와 /about의 / 가 겹치기 때문

==>	<Route path="/home>
       	<Route path="/about>

====>    param 으로  exact={true}  추가
       
------------------------------------------------------------------------
Navigation 은 모든 route 에 존재 
  <HashRouter> 사이에  <Navigation/> 
   (-)  Html이기 때문에 계속 refresh 시킴
   ==> import { Link } from "react-router-dom";  이용  cf) Link는 router 안에 있어야함.

 <Link to="/"> Home </Link>
 <Link to="/about"> About </Link> 이용

+ HashRouter => BrowserRouter 로 변경 하면  /#/  사라짐.
  -BrowserRouter  :  github page에 적용이 잘 안됨.

-----------------------------------------------------------------------
component 호출시 param 전달

<Link to="/about"> 에서 to를 이용하여 전달 가능
< Link to = { {
   pathname : "/about",
   state : {
      fromNavigation: true      
    }
   }

-----------------------------------------------------------
 redirect 

  개발자 옵션의  history에는  url을 변경하는 작업들이 있음.
   ex)  go forward ,  go back ....
  
   example ) 
componentDidMount( ){
  const { location, history } = this.props;
  if( location.state === undefined) {
    history.push("/");
  }
}   //  접근이 원하는 방식이 아니라면 main으로 redirection

cf)   DidMount() 말고  render() 에서 하기 위해서는?
  1. 검사하는 방법
    if (location.state) {  return < . .... } 
    else { return null; }

  2. path 에  :id  를 이용
