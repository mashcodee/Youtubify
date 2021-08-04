import React, { useState, FC } from "react";
import styles from "../styles/container.module.scss";
import Upload from "./Upload";
import Download from "./Download";

interface Props {}

const Container: FC<Props> = (props) => {
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [link, setLink] = useState<string>("#");
  const [videoTitle, setVideoTitle] = useState<string>("");

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {isUploaded ? (
          <Download
            link={link}
            setLink={setLink}
            setIsUploaded={setIsUploaded}
            videoTitle={videoTitle}
            setVideoTitle={setVideoTitle}
          />
        ) : (
          <Upload
            setVideoTitle={setVideoTitle}
            setIsUploaded={setIsUploaded}
            setLink={setLink}
          />
        )}
      </div>
    </section>
  );
};

export default Container;
