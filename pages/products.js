import Head from "next/head";
import FiltersLeftPanel from "../components/FiltersLeftPanel";
import ProductCard from "../components/ProductCard";
import SortDropdown from "../components/SortDropdown";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Products({ products, totalItems, sort, availableCategories }) {
    return (
        <>
            <Head>
                <title>Products — SSR Filter & Sort Demo</title>
                <meta name="description" content="Server side rendered product grid with filtering and sorting options." />
            </Head>

            <Header />


            <main className="container">
                <section className="hero" style={{ textAlign: "center", padding: "28px 0 12px" }}>
                    <h2 style={{ margin: "8px 0", fontWeight: 400 }}>DISCOVER OUR PRODUCTS</h2>
                    <p style={{ color: "#666" }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </section>

                <div className="results">
                    <FiltersLeftPanel availableCategories={availableCategories} />

                    <section className="grid-area">
                        <div className="topline">
                            <div>{totalItems} ITEMS</div>
                            <div><SortDropdown currentSort={sort} /></div>
                        </div>

                        <div className="product-grid" role="list">
                            {products.map((p) => <ProductCard key={p.id} p={p} />)}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}


export async function getServerSideProps(context) {
    const { query } = context;
    const sort = query.sort || "recommended";
    const categoriesQ = query.categories || ""; // comma separated
    const instock = query.instock === "1";

    const allProducts = [
        {
            id: 1,
            name: "Grey Backpack",
            category: "Bags",
            image: "/images/grey-backpack.jpg",
            alt: "Grey canvas handmade backpack with leather straps",
            price: 2999,
            outOfStock: false,
            createdAt: 1715000000000,
            popularity: 80
        },
        {
            id: 2,
            name: "Knitted Toy",
            category: "Toys",
            image: "/images/knitted-toy.jpg",
            alt: "Yellow and blue knitted soft toy for kids",
            price: null,
            outOfStock: true,
            createdAt: 1714000000000,
            popularity: 50
        },
        {
            id: 3,
            name: "Leather Keychain",
            category: "Accessories",
            image: "/images/keychain.jpg",
            alt: "Premium leather keychain with metallic ring",
            price: 3100,
            outOfStock: false,
            createdAt: 1713000000000,
            popularity: 95
        },
        {
            id: 4,
            name: "White Baby Hat",
            category: "Clothing",
            image: "/images/baby-hat.jpg",
            alt: "White cotton baby hat for newborns",
            price: 3020,
            outOfStock: false,
            createdAt: 1712000000000,
            popularity: 40
        },
        {
            id: 5,
            name: "Travel Bag",
            category: "Bags",
            image: "/images/travel-bag.jpg",
            alt: "Dark handcrafted travel bag with straps",
            price: 3050,
            outOfStock: true,
            createdAt: 1711000000000,
            popularity: 70
        },
        {
            id: 6,
            name: "Blue Dino Toy",
            category: "Toys",
            image: "/images/dino-toy.jpg",
            alt: "Cute blue dinosaur plush toy",
            price: 3070,
            outOfStock: false,
            createdAt: 1710000000000,
            popularity: 88
        }
    ];

    const availableCategories = Array.from(new Set(allProducts.map((p) => p.category)));

    let filtered = [...allProducts];

    if (categoriesQ) {
        const cats = categoriesQ.split(",").map((c) => c.trim()).filter(Boolean);
        filtered = filtered.filter((p) => cats.includes(p.category));
    }

    if (instock) {
        filtered = filtered.filter((p) => (!p.outOfStock) && (p.price !== null));
    }

    switch (sort) {
        case "newest":
            filtered.sort((a, b) => b.createdAt - a.createdAt);
            break;
        case "popular":
            filtered.sort((a, b) => b.popularity - a.popularity);
            break;
        case "price-high":
            filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
            break;
        case "price-low":
            filtered.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
            break;
        default:
            break;
    }

    return {
        props: {
            products: filtered,
            totalItems: filtered.length,
            sort,
            availableCategories
        }
    };
}
