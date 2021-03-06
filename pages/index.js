import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
    const DUMMY_POST = [
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs'},
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs2'},
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs3'}
    ];
    return (
        <>
            <Hero/>
            <FeaturedPosts posts={DUMMY_POST} />
        </>
    )
}