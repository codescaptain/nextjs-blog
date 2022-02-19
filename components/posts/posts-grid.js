import PostsItem from "./post-item";
import classes from "./posts-grid.module.css"

const PostsGrid = (props) => {
    const {posts} = props
    return (
        <ul className={classes.grid}>
            {posts?.map((post, key) => <PostsItem key={post.slug} post={post}/>)}
        </ul>
    );
};

export default PostsGrid;