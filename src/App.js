import {React,Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header  from "./components/Header";
import Main  from "./components/Main";
import Footer  from "./components/Footer"; 
import SelectedBeast from "./components/SelectedBeast";


class App extends Component {

     constructor(props){
         super(props);
        this.state = {
         
            showModal : false,
            title:"",
            imgUrl:"",
            description:""
            
        };
     }

    
    
    
    handelClose = ()=>{

        this.setState({
            showModal:false
        });

    }
    handelOpen= (title ,imgUrl , description)=>
    {
        this.setState({
            showModal:true,
            title:title,
            imgUrl:imgUrl,
            description:description

        });

    } 
    
  render(){
  return (
      <>
      <Header/>

      <Main handelOpen ={this.handelOpen}/>
     
      <SelectedBeast 
      
      handelClose={this.handelClose} 
      showModal={this.state.showModal}

      title={this.state.title}
       imgUrl={this.state.imgUrl} 
       description={this.state.description} 
       />

      <Footer/> 
      </>
    );}
}

export default App;
