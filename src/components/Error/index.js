import ErrorStyled from "./error.styled";

 function Error(props) { 
     const { children } = props; 
  
     return ( 
        <ErrorStyled>
         <div> 
             <span>{children}</span> 
         </div>
         </ErrorStyled> 
     ) 
 } 
  
 export default Error;