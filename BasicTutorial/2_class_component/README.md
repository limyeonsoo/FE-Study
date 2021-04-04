# Class Component  &&  LifeCycle
 
<Class Component>
    - render(), 
    - LifeCycle 관련.
       - mounting  :  constructor, render, componentDidMount
          constuctor -> render -> componentDidMount  순서
       - updating
          ... ...  -> render -> componentDidUpdate 순서
       - unmounting
          componentWillUnmount 

React.Component 상속 후 render() 메소드에 넣어야함.
    -> Class component의 state가 중요.
    state 에 변경되길 원하는 property를 넣고 this.state.property로 접근

 (-) class에 있는 function은 render가 refresh된다고 계속 refresh 되지는 않음.
     -> setState이용  
         (-)(-) but this.state.count 등은 state에 의존하게됨.
         ex)     this.setState({count : this.state.count + 1});
         => this.setState(current => ({ count : current.count + 1}));  // current 이용