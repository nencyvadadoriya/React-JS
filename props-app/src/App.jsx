import { useState } from 'react'
import ProductView from './componets/productView'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Focus Card Tray',
      href: '#',
      price: '$64',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 6,
      name: 'Focus Multi-Pack',
      href: '#',
      price: '$39',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
      imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    },
    {
      id: 7,
      name: 'Brass Scissors',
      href: '#',
      price: '$50',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
      imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    },
    {
      id: 8,
      name: 'Focus Carry Pouch',
      href: '#',
      price: '$32',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
  ]
  return (
    <>
      {
        // using Boostrap
      /* <center>
        <h1>hello Boostrap</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis ipsam cum minima laboriosam esse.</p>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://static.vecteezy.com/system/resources/previews/009/338/810/original/3d-illustration-credit-card-png.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cards</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </center> */}
      <ProductView products={products} />
    </>
  )
}

export default App;
