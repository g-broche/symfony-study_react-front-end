import '../css/cart.css';
import { useAppSelector } from '../store/store';



export default function Cart() {
    const cartArticles = useAppSelector(state => state.cartReducer.content)
    console.log(cartArticles)
    if (cartArticles) {

        return (
            <>
                <section id="cart">
                    {cartArticles.map(cartArticle =>
                        <p>{cartArticle.name}</p>
                    )}
                </section>
            </>
        )

    }
}