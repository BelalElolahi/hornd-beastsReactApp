import React from "react";



import HornedBeasts from "./HornedBeasts";
import DataPost from "./Data.json";
import HornForm from "./HornForm";


class Main extends React.Component {
   constructor(props){
       super(props);

       this.state ={
         showFiltaring :false,
         filterToNumberOfHorns : 0,
            data:DataPost
         
       };
   }


   SelecttionHornFilter=(event)=>{
    let filterToNumberOfHorns = parseInt( event.target.value);

    if (filterToNumberOfHorns === '')
    {
        this.setState({ data : DataPost });
    } else{
       
      let filterData =DataPost.filter(item=>{
        return item.horns === filterToNumberOfHorns;
      });

      

      this.setState({
        filterToNumberOfHorns : filterToNumberOfHorns,
        data:filterData

      });
      console.log(filterToNumberOfHorns);
      console.log(this.state.data);
    }
      
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
              
            this.state.data.map(item => {
            return  <HornedBeasts 
            handelOpen={this.props.handelOpen}  
            title={item.title} 
            imgUrl={item.image_url} 
            description={item.description} 
            keyword={item.keyword} 
            horns={item.horns}
            />; 
          }) 

          

           
        
          }
         

      </div>
     
        
      
      
    );
  
 }
}

export default Main;
