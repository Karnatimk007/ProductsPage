
function Product(props){
    let { name, brand, description, price,image} = props.product;
    return(
        <div className=" w-[250px] h-[400px] bg-white p-5 text-center">
            <img src={image} alt={name} />
            <h2 className="text-[15px] font-bold">{name}</h2>
            <p>{brand}</p>
            <p >{description}</p>
            <p >${price}</p>
        </div>

    )
}

export default Product;
