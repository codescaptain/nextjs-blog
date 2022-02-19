import AllPosts from "../../components/posts/all-posts";

export default  function AllPostsPage() {
    const DUMMY_POST = [
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs'},
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs2'},
        {title: 'Getting start next js', image: 'me.jpeg', excerpt: '', date: '2022-01-01', slug: 'getting-started-with-nextjs3'}
    ];
    return(
        <AllPosts posts={DUMMY_POST} />

    )
}