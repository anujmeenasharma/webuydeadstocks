import Services from '../page';

export async function generateMetadata({ params }) {
    const { category } = await params;

    // Format the category slug into a readable name
    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${categoryName} Services`,
    };
}

export default async function CategoryPage({ params }) {
    const { category } = await params;

    // Format the category slug into a readable name
    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <>
            <Services />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `${categoryName} Services - We Buy Dead Stocks`,
                        "url": `https://www.webuydeadstocks.com/services/${category}`,
                        "provider": {
                            "@type": "Organization",
                            "name": "We Buy Dead Stocks"
                        }
                    })
                }}
            />
        </>
    );
}
