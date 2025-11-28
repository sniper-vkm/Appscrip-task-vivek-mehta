export default function Home() {
    return null; // empty page, redirect below
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/products",
            permanent: false
        }
    };
}
