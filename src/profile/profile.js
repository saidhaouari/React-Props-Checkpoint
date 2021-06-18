import React, { Component } from 'react'; 
class CardProfile extends Component {
    render(){
      
        const {imageSource, fullName, profession, bio }= this.props;
        return(
            <div style={{textAlign:'center'}}>
                    <div><img src={imageSource} alt=""/></div>
                    <h1>{fullName}</h1>
                    <h2>{profession}</h2>
                    <p>{bio}</p>
            </div>
        )
    }
}
export default CardProfile ;