export default function ProductCard({ p }) {
    return (
        <article className="card" aria-labelledby={`product-${p.id}-title`}>
            <div className="image-wrap">
                <img src={p.image} alt={p.alt} loading="lazy" />
                {p.outOfStock && <div className="badge">OUT OF STOCK</div>}
            </div>
            <h3 id={`product-${p.id}-title`} className="product-title">{p.name}</h3>
            <p className="price">{typeof p.price === "number" ? `₹ ${p.price}` : "Price not available"}</p>
        </article>
    );
}
