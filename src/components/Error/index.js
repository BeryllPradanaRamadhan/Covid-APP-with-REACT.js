import styles from "./error.module.css" 
  
 function Error(props) { 
     const { children } = props; 
  
     return ( 
         <div className={styles.error}> 
             <span>{children}</span> 
         </div> 
     ) 
 } 
  
 export default Error;