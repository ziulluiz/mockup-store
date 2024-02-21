import { useParams, useNavigate } from 'react-router-dom';

import audifonos from '../../assets/audifonos.jpg';
import bocina from '../../assets/bocina.jpg';
import iphone from '../../assets/iphone.jpg';
import S23 from '../../assets/S23.jpg';

import './pocuctDetail.css'

import * as CryptoJS from 'crypto-js';

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



export const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const productId = id ? parseInt(id, 10) : undefined;
  const product = productId ? data.find((product) => product.id === productId) : undefined;
  if (!product) {
    // Si no se encuentra el producto, puedes redirigir a una página de error o manejarlo de otra manera
    navigate('/error');
    return null;
  }

  const handleBuyNowClick = async () => {

    const getCurrentDateTime = () => {
      const d = new Date();
      return (
        d.getFullYear() +
        ":" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        ":" +
        ("0" + d.getDate()).slice(-2) +
        "-" +
        ("0" + d.getHours()).slice(-2) +
        ":" +
        ("0" + d.getMinutes()).slice(-2) +
        ":" +
        ("0" + d.getSeconds()).slice(-2)
      );
    };

    const txndatetime = getCurrentDateTime();

    const parameters = [
      { name: 'chargetotal', value: product.price },
      { name: 'checkoutoption', value: 'combinedpage' },
      { name: 'currency', value: '484' },
      { name: 'hash_algorithm', value: 'HMACSHA256' },
      //{ name: 'parentUri', value:'http://localhost:5173/'},
      { name: 'responseFailURL', value: 'https://pagosonline.mx/DConnect/response.php' },
      { name: 'responseSuccessURL', value: 'https://pagosonline.mx/DConnect/response.php' },
      { name: 'storename', value: '62110594' },
      { name: 'timezone', value: 'America/Mexico_City' },
      { name: 'txntype', value: 'sale' },
      { name: 'txndatetime', value: txndatetime },
      { name: 'sharedSecret', value: 'S1ullu1s' },
      { name: 'hashExtended', value: ''},
    ];


    const sortedParameters = parameters
    .filter(param => param.name !== 'sharedSecret' && param.name !== 'hashExtended')
    .sort((a, b) => a.name.localeCompare(b.name));

    // Crea el stringForExtendedHash concatenando los valores de los parámetros separados por pipes "|"
    const stringForExtendedHash = sortedParameters.map(param => param.value).join('|');

    // Calcula el hash utilizando HMAC-SHA256 y el sharedSecret como llave  
    const hash = CryptoJS.HmacSHA256(stringForExtendedHash, 'S1ullu1s');

    // Convierte el hash a cadena utilizando Base64 
    const hashString = CryptoJS.enc.Base64.stringify(hash);

    const form = document.createElement('form');
    form.id = 'inputForm'; // Asigna el ID al formulario
    form.method = 'POST'; // Establece el método del formulario a POST
    form.action = 'https://test.ipg-online.com/connect/gateway/processing';
    document.body.appendChild(form);
    //const form = document.getElementById('inputForm') as HTMLFormElement;
    if (form){
      const formFields = [
        
        { name: 'chargetotal', value: product.price },
        { name: 'checkoutoption', value: 'combinedpage' },
        { name: 'currency', value: '484' },
        { name: 'hash_algorithm', value: 'HMACSHA256' },
        { name: 'responseFailURL', value: 'https://pagosonline.mx/DConnect/response.php' },
        { name: 'responseSuccessURL', value: 'https://pagosonline.mx/DConnect/response.php' },
        { name: 'storename', value: '62110594' },
        { name: 'timezone', value: 'America/Mexico_City' },
        { name: 'txntype', value: 'sale' },
        { name: 'txndatetime', value: txndatetime },
        //{ name: 'stringForExtendedHash', value: stringForExtendedHash},
        { name: 'hashExtended', value: hashString},
      ];
      //const hashString = calculateExtendedHash();
      formFields.forEach((field) => {
        const inputField = document.createElement('input');
        inputField.type = 'hidden';
        inputField.name = field.name;
        inputField.value = field.value;
        form.appendChild(inputField);
      });
      console.log('Formulario antes de enviar:', form);
      await form.submit();
      console.log('Formulario enviado'); 
      console.log(form)
    }
    
    //navigate(`/product/${id}`);
  };

  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <div className="details_container">
      <article key={product.id} className="card_item_details">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <h3>{product.title}</h3>
        <h3>Precio: {product.price}$</h3>
        <div className="card_item-cta">
          <button className='btn' onClick={handleGoBackClick}>Go Back</button>
          <button className='btn btn-primary' onClick={handleBuyNowClick}>Buy Now</button>
        </div>
      </article>
      {/* <iframe className="myFrame" id="myFrame" name="myFrame"></iframe> */}
    </div>
  );
};

