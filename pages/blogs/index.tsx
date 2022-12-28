import Image from "next/image";
import { type } from "os";
import BlogCard from "../../components/card";
import MetaHead from "../../components/Head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

interface IProps {
  data: [{ id: number;title: string; }];
}

function Blog({data}: IProps) {
  const newData = data.slice(0, 10);
  return (
    <>
      <MetaHead
        title="blog"
        description="ticket-gateway"
        keywords="Next.js, React.js"
      />
      <div className={styles.main}>
        <div className={styles.description}>
          <Navbar />
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/359/676/935/windows-10-blue-sky-galaxy-wallpaper-preview.jpg"
            width={800}
            height={500}
            alt="windows"
          />
          <h1>Blogs</h1>
          <BlogCard data={newData} />
        </div>
      </div>
    </>
  );
}

export default Blog;
