import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css"

const PostsItem = (props) => {
    const {title, image, excerpt, date, slug} = props.post

    const formatedDate = new Date(date).toDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year : 'numeric'

    });
    const imgPath = `/images/posts/${slug}/${image}`;
    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
                <a>
                    <div className={classes.image}>
                        <Image src={imgPath} alt={title}  layout="responsive" width={300} height={200}/>
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formatedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostsItem;