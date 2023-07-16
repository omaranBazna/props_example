import Product from "../../Components/Product/Product"

export default Home = () => {
    const products = [
        {name:'phone', id:'1', price:50},
        {name:'laptop', id:'2', price:90},
        {name:'dishes', id:'3', price:80}
]

return <div>
    {products.map((item)=>{
        return <Product name={item.name} price={item.price} key={item.id} />
    })}
</div>
    
}