import React, { useEffect, useState, useContext } from "react";
import { CircularProgress, Grid} from "@mui/material";
import { auth } from "../../firebase";
// import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// component
import Navbar from "../Navbar/Navbar";

// styles
import styles from "./Chats.module.css";

// context
import { AuthContext } from "./../../Contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  // const navigate = useNavigate();
  const history = useHistory();


  useEffect(() => {
    if (!user) {
      // navigate('/');
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "2780ea22-01a3-45d6-9c33-aa03bfce025b",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then(avatar => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "e3363ca3-c945-4f12-8573-cd16408170c7",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user,history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    // navigate('/');
    history.push("/")

  };

  if (!user || loading) return  (
    <Grid display={'flex'} justifyContent={'center'} mt={5}>
      <CircularProgress />;
    </Grid>
  )

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh -50px)"
        projectID="2780ea22-01a3-45d6-9c33-aa03bfce025b"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
