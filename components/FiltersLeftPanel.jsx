import { useRouter } from "next/router";

export default function FiltersLeftPanel({ availableCategories = [] }) {
    const router = useRouter();
    const query = router.query || {};
    const categoriesParam = query.categories || "";
    const selected = categoriesParam ? categoriesParam.split(",").filter(Boolean) : [];

    const toggleCategory = (cat) => {
        let next = [...selected];
        if (next.includes(cat)) {
            next = next.filter((c) => c !== cat);
        } else {
            next.push(cat);
        }
        const queryObj = { ...query, categories: next.length ? next.join(",") : undefined, page: undefined };
        router.push({ pathname: router.pathname, query: queryObj }, undefined, { shallow: false });
    };

    return (
        <aside className="filters" aria-label="Filters">
            <button className="hide-filter" onClick={() => { /* optional: toggle show/hide */ }} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", padding: 0 }}>Hide Filter</button>

            <div className="filter-group">
                <h3>Category</h3>
                {availableCategories.map((cat) => (
                    <label key={cat} style={{ display: "block", marginBottom: 8, cursor: "pointer" }}>
                        <input
                            type="checkbox"
                            checked={selected.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            style={{ marginRight: 8 }}
                        />
                        {cat}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h3>Availability</h3>
                <label style={{ display: "block", cursor: "pointer" }}>
                    <input
                        type="checkbox"
                        checked={query.instock === "1"}
                        onChange={() => {
                            const next = query.instock === "1" ? undefined : "1";
                            const newQuery = { ...query, instock: next, page: undefined };
                            router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: false });
                        }}
                        style={{ marginRight: 8 }}
                    />
                    In stock only
                </label>
            </div>

            {/* Add more filter groups as needed */}
        </aside>
    );
}
