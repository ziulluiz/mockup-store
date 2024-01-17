import { Link } from 'react-router-dom';

import audifonos from '../../assets/audifonos.jpg';
import bocina from '../../assets/bocina.jpg';
import iphone from '../../assets/iphone.jpg';
import S23 from '../../assets/S23.jpg';
import '../../components/cards/cards.css'
const data = [
    {
        id: 1,
        image: audifonos,
        title: 'WH-1000XM5',
        add_to_car: '#',
        buy: '#',
        price: '1000'
    },
    {
        id: 2,
        image: bocina,
        title: 'Bocina JBL',
        add_to_car: '#',
        buy: '#',
        price: '500'
    },
    {
        id: 3,
        image: iphone,
        title: 'Iphone',
        add_to_car: '#',
        but: '#',
        price: '9000'
    },
    {
        id:4,
        image: S23,
        title: 'S23',
        add_to_car: '#',
        buy: '#',
        price: '5000'
    }
]

export const Cards = () => {
  return (
    <section id='cards'>
      <div className="container cards_container">
        {
          data.map(({id, image, title, add_to_car, price}) =>{
            return(
            //  <Link key={id} to={`/product/${id}`} className='card-link'>
                <article key={id} className='card_item'>
                  <div className="card_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title} {price}$</h3>
                  <div className="card_item-cta">
                    <a href={add_to_car} className='btn'>Add to Cart</a>
                    <Link to={`/product/${id}`} className='btn btn-primary' >
                      Buy Now
                    </Link>
                    {/* <a href={buy} className='btn btn-primary' target='_blank'>Buy Now</a> */}
                  </div>
                </article>
              // </Link>
            )
          })
        }
      </div>

    </section>
  )
}
