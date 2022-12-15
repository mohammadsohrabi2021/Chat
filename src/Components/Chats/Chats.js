import React, { useEffect, useState, useContext } from "react";
import { auth } from "../../firebase";
import { Navigate } from 'react-router-dom';
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

  useEffect(() => {
    if (!user) {
      Navigate('/');
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "a9b6b474-198b-4dc5-bb35-bc5492c231d2",
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
                "private-key": "a57b8767-610e-4a1e-b3a9-d93ff3807079",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user,Navigate]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    Navigate('/');

  };

  if (!user || loading) return "Loading ...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh -50px)"
        projectID="a9b6b474-198b-4dc5-bb35-bc5492c231d2"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
