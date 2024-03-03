import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17081188/pexels-photo-17081188.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="About image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
        {/* <Link href={`/blog/post`} className={styles.link}>
          READ MORE
        </Link> */}
      </div>
      ;
    </div>
  );
};

export default PostCard;
