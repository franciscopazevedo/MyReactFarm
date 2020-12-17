import React from 'react';
import './FarmAnimalCard.css';

export class FarmAnimalCard extends React.Component{
render(){

    return(
        <div className="Card">
           <div className=".justify-content-center">

             <img className="card-img-top"
                  src= {this.props.imgSrc}
                  alt="Pedimos desculpa mas infelizmente a imagem não abriu. Faz refresh da pagina ou tenta mais tarde"> 
             </img>

            <div className="card-body"> 

               <h3 className="card-title" >
                   {this.props.cardTitle} 
               </h3>

               <h4 className="card-text" >
                   {this.props.textInf} 
               </h4>

               <a className="btn-btn-primary"
                  href={this.props.hrefButton} 
                >
                    Ver ++
             </a>
            </div>
         </div>
       </div>
    );
}
}

