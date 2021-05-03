import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import "./ProductInfo.css";



class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.title=this.props.title;
    this.university=this.props.university;
    this.oferent=this.props.oferent;
    this.stars=this.props.stars;
    this.price=this.props.price;
    this.state = {};
  }

  Setstars(num){
      const fullstart = <StarIcon fontSize="small"/>
      const midStart = <StarHalfIcon fontSize="small"/>
      const emptyStar = <StarOutlineIcon fontSize="small"/>
      if(num<=0){
            return emptyStar;
      }else if(num<1){
          return midStart;
      }else{
          return fullstart;
      }
      
  }

  generateStart(){
      var num = this.stars;
      var temp = [];
      for (let i = 0; i <5; i++) {
          console.log(num)
          temp.push(this.Setstars(num));
          num -=1;
      }
      return temp;
  }


  render() {
    return (
        <div className="containerInfo">
            <div>
                <Typography variant="h5" align="center">{this.title}</Typography>
            </div>
            <div className="subContainerInfo">
                <div>
                    <nav>
                        <li><label>Universida: {this.university}</label></li>
                        <li><label>Oferente: <a href="">{this.oferent}</a></label></li>
                        <li><label>Precio: ${this.price}</label></li>
                    </nav>
                </div>
                <div className="producStars">
                    {this.generateStart()}
                </div>
                <div>
                    <button className="buttonAddCar">Añadir al carrito</button>
                </div>
            </div>
            <div>
                <button className="buttonAddList">Añadir a mi lista</button>
            </div>
        </div>
    );
  }
}

export default ProductInfo;
