import { useRouter } from "next/router";
import BlogCard from "../../components/card";
import MetaHead from "../../components/Head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/blog",  {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  });
  const data = await res.json();

  const paths = data.map((curId: any) => {
    return {
      params: {
        blogId: curId.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.blogId;

  const res = await fetch(`http://localhost:3000/blog/${id}`,  {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}


const PostDetails = ({data}: any) => {
    const {id, title} = data;
  return (
    <div>
      <MetaHead
        title="blog-details"
        description="ticket-gateway"
        keywords="Next.js, React.js"
      />
      <div className={styles.main}>
        <div className={styles.description}>
          <Navbar />
          <h3>Blog Details</h3>
          <Card sx={{ minWidth: 275 }} key={id} style={{margin:'10px 0'}}>
              <CardContent>
                <Typography style={{textAlign:'start'}}>
                    <span style={{marginRight:'30px', 
                    borderRadius:'50%', 
                    backgroundColor:'#196CB2',
                    color:'white',
                    padding:'4px 6px'
                    }}>{id}</span> 
                    <Link href={`/posts}`}>
                    {title}
                    </Link></Typography>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
