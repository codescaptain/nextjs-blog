import classes from './post-content.module.css'
import PostHeader from "./post-header";
const DUMMY_POST =
    {
        title: 'Getting start next js',
        image: 'me.jpeg',
        excerpt: '',
        date: '2022-01-01',
        slug: 'getting-started-with-nextjs',
        content: '# This is First Post'};
const imgPath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
const PostContent = () => {
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imgPath}/>
            {DUMMY_POST.content}
        </article>
    );
};

export default PostContent;