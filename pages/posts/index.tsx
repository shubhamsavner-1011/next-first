import Image from "next/image";
import { type } from "os";
import BlogCard from "../../components/card";
import MetaHead from "../../components/Head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useRouter } from "next/router";


export async function getStaticProps() {
  const res = await fetch("http://localhost:3003/blog");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

interface IProps {
  data: [{ id: number; title: string }];
}

function Posts({ data }: IProps) {
const router = useRouter();
  const createBlog = () => {
    router.push('/posts/createPosts')
  }
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
          <h1>Posts</h1>
          <Box style={{ textAlign: "start" }}>
            <Button
              variant="outlined"
              style={{ borderColor: "black", color: "black", margin: "10px 0" }}
              onClick={createBlog}
            >
              Create New Blog
            </Button>
          </Box>
          <BlogCard data={newData} />
        </div>
      </div>
    </>
  );
}

export default Posts;
