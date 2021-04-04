fetch  vs axios
 
axios  :  a littel layer on the fetch

example )  componentDidmount() 에서  json을 get해올 때, delay를 기다리기 위해   
  1.  async
  2.  getMovies = async() => { ...   await  ....  }  //비동기식 함수 
      componentDidMount() {  this.getMovies(); };
      

data 가져오기  

 const { data : { data : { movies } } }        //  ES6
 ===  movies.data.data.movies