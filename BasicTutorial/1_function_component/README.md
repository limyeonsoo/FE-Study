# Function component

 
React는 원래 여러 react component로 구성 
 (-) but, browser는 인식하지 못해서 여러 compile과정이 필요한데, 
    github에 있는 create-react-app 을 이용해서 한번에 구성하면 편리.

 
react component 를 getElementById('root')로 render한다.

react 는 virtual 이라 빠른 이유.  
  그래서 F12로 보면 DOM은 보이지만, 
  소스코드에서는 HTML이 보이지 않음. 없는 존재

component   :   <App />  
  HTML을 반환하는 함수.


* ReactDOM.render는 오직 하나의 component만 render함.

component는 재사용이 가능하다.
  1. 수동 으로 작성  (코드가 더러움)
  2. child component  : component의 속성으로 구별하도록 한다.
     function func(props){  };  component를 호출 하는 데서 여러 property를 줄 수 있음.
     function func({ attribute }) {};  특정 속성 바로 접근 할 수 있음.  *component용 속성 O, 함수에는 속성 X 가능
     
     cf) array에 여러가지 정의 해놓고 render가능.
     
     Javascript 기능  
        map : array에 대해 function  각각 적용 가능.
        => array를 정의 한 후 map을 이용하여 각각 component 호출
		
	

propTypes : component에 있을 property의 타입을 정해놓음. 
  ex )  name: PropTypes.string.isRequired,  ... 
  -> 사용되지 않으면 isRequired 경고
JSX  :  javascript 안의 HTML