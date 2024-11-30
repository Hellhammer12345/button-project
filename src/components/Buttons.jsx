const Button = (props) => { 
    if (props.theme === "primary") {

        return (

            <button className="gradient-button">Button</button>
        )
        

        
    } else if (props.theme === "secondary") {

        return (

           <button className="flat-button">Button</button>
        )
        
    }  else if (props.theme === "outline") {

        return (

            <button className="threeD-button">Button</button>
        )
        
    }
  

     
    }
      

  




export default Button;