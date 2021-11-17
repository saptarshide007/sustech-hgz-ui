import "./AppList.css"
class Post {
    constructor(title, img) {
      this.title = title;
      this.img = img;
    }}
  
  
  const app =  [
      new Post(
      'AccessManagment',
      'https://vuejs.org//images/logo.png'),
  
      new Post(
      'Recruitment',
      'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'),
  
      new Post(
      'HumanResource',
      'https://angularjs.org/img/ng-logo.png'),
  
      new Post(
      'TimeReport',
      'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'),
  
      new Post(
      'ProjectManagment',
      'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'),
  
      new Post(
      'Aurelia',
      'https://cdn.auth0.com/blog/aurelia-logo.png'),
  
      new Post(
      'Node.js',
      'https://code-maven.com/img/node.png'),
  
      new Post(
      'Pusher',
      'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'),
  
      new Post(
      'Feathers.js',
      'https://cdn.worldvectorlogo.com/logos/feathersjs.svg')];
const AppList=(props)=>{
    
    return(<div id="app">
    <div class="wrapper">
      {app.map((post)=>{
          return(
                <div class="card" onClick={()=>props.setApp("Recruitment")} >
                    <a href="#">
                        <img src={post.img} />
                        <label for={ post.title }>{ post.title }</label>
                    </a>
                </div>)
      })}
    </div>
  </div>);
};

export default AppList;
