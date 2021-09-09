import {React,Component} from "react";

import HornedBeasts from "./HornedBeasts";
import DataPost from "./Data.json";
import HornForm from "./HornForm";


class Main extends Component {
   constructor(props){
       super(props);

       this.state ={
         showFiltaring :false,
         filterToNumberOfHorns : 0
         
       };
   }


   SelecttionHornFilter=(event)=>{
      let filterToNumberOfHorns = event.target.value;

      this.setState({
        filterToNumberOfHorns : filterToNumberOfHorns
      });
      console.log(filterToNumberOfHorns);
   }

   handlesubmit=(e)=>{
    e.preventDefault();
        this.setState({
            showFiltaring:true,
        });
        console.log(this.state.showFiltaring);
    
   }
  render(){
  return (
    
      <div className="row">

          <HornForm handlesubmit={this.handlesubmit} SelecttionHornFilter={this.SelecttionHornFilter} />
          {
              
          this.state.showFiltaring ? DataPost.map(item => {
              if(item.horns === this.state.filterToNumberOfHorns.toString()){
            return  <HornedBeasts handelOpen={this.props.handelOpen}  
            title={item.title} 
            imgUrl={item.image_url} 
            description={item.description} 
            keyword={item.keyword} 
            horns={item.horns}
            />;} 
          })
           
        
          : DataPost.map(item => {
              return  <HornedBeasts handelOpen={this.props.handelOpen}  
              title={item.title} 
              imgUrl={item.image_url} 
              description={item.description} 
              keyword={item.keyword} 
              horns={item.horns}
              />;
            })}
         

      </div>
     
        
      
      
    );
  
 }
}

export default Main;
