/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button } from "@mui/material";
import MetaHead from "../../components/Head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useState } from "react";

const createBlog = () => {
 const [title, setTitle] = useState<string>('');
 const [sucess, setSuccess] = useState<string>('');

  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: title,
      };
      const response = await fetch("http://localhost:3000/blog", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      return result;
    };

    postData().then((data) => {
      console.log(data, "????");
      setSuccess(data);
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
      setTimeout(() => router.push('/blogs') , 1500)
    });
  }

  return (
    <>
      {sucess && (
     <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     />
      )}

      <MetaHead
        title="blog"
        description="ticket-gateway"
        keywords="Next.js, React.js"
      />
      <div className={styles.main}>
        <div className={styles.description}>
          <Navbar />
          <Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                onChange={(event) => setTitle(event.target.value)}
              />
            </Box>
            <Button
              variant="outlined"
              style={{ borderColor: "black", color: "black", margin: "10px 0" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default createBlog;
