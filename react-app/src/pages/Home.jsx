    import ProductList from "../components/ProductList";
    function Home() {
        const addToCart = (product) => {
            console.log("Added",product); // adds product to cart
        };
        return (
            <div>
                <ProductList  addToCart={addToCart}/>
            </div>
        );
    }
    export default Home;