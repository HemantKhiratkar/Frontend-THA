const Card = () => {
    const Image1 = () => {
        return(
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1788%2F4029%2Fproducts%2F61547-alt1_be949810-5a3d-4408-9423-6fc7436b99af_grande.png%3Fv%3D1576802357&f=1&nofb=1" 
                alt="" />
        );
    };

    return(
        <div className="card">
         <Image1 />
         <h1>REACT CARD</h1>
         <p>new new new</p>
        </div>
    );
}


export default Card;
