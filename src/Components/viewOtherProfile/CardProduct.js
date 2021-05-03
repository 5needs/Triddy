import React from 'react'
import circlesImg from './images/circles.png'
import './styles/CardProduct.css'
import Button from '@material-ui/core/Button';


class CardProduct extends React.Component {

    render(){
        const { title, price, img,leftColor,rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                 style={{
                     backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                 }}
            >
                <div className="card-body">
                    <div className="row center">
                        {img}
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>Price ${price}</p>
                            <Button variant="contained" color="primary">
                                Rent
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct