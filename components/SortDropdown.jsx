import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function SortDropdown({ currentSort }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const options = [
        { label: "Recommended", value: "recommended" },
        { label: "Newest First", value: "newest" },
        { label: "Popular", value: "popular" },
        { label: "Price: High to Low", value: "price-high" },
        { label: "Price: Low to High", value: "price-low" }
    ];

    // Close dropdown on outside click
    useEffect(() => {
        function onDoc(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("click", onDoc);
        return () => document.removeEventListener("click", onDoc);
    }, []);

    const handleSelect = (value) => {
        setOpen(false);
        const query = { ...router.query, sort: value, page: undefined };
        // remove undefineds
        if (query.categories === "") delete query.categories;
        router.push({ pathname: router.pathname, query }, undefined, { shallow: false });
    };

    const currentLabel = options.find((o) => o.value === currentSort)?.label || "Recommended";

    return (
        <div className="sort-dropdown" ref={ref}>
            <button className="dropdown-btn" onClick={() => setOpen((s) => !s)} aria-haspopup="listbox" aria-expanded={open}>
                {currentLabel} ▾
            </button>

            {open && (
                <ul className="dropdown-menu" role="listbox">
                    {options.map((o) => (
                        <li
                            key={o.value}
                            onClick={() => handleSelect(o.value)}
                            className={currentSort === o.value ? "active" : ""}
                            role="option"
                            aria-selected={currentSort === o.value}
                        >
                            {o.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
