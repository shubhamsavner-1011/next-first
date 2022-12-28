import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const BlogCard = ({ data }: any) => {
  return (
    <div>
      {data?.map((item: any) => {
        return (
          <>
            <Card
              sx={{ minWidth: 275 }}
              key={item.id}
              style={{ margin: "10px 0" }}
            >
              <CardContent>
                <Typography style={{ textAlign: "start" }}>
                  <span
                    style={{
                      marginRight: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#196CB2",
                      color: "white",
                      padding: "4px 6px",
                    }}
                  >
                    {item.id}
                  </span>
                  <Link href={`blogs/${item.id}`}>{item.title}</Link>
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default BlogCard;
