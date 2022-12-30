import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import MetaHead from "../../components/Head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import TextField from "@mui/material/TextField";

const createPosts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");


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
          'Content-Type': 'application/json',
        },
      });
      console.log('>>>', response)
      const result = await response.json(); 

      return result
    };
    postData().then((data) => {
      console.log(data, "???????");
    });
  }

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

export default createPosts;
