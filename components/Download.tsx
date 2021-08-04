import React, { FC } from "react";
import styles from "../styles/download.module.scss";

interface Props {
  link: string;
  videoTitle: string;
  setVideoTitle: Function;
  setLink: Function;
  setIsUploaded: Function;
}

const Download: FC<Props> = ({
  videoTitle,
  setVideoTitle,
  link,
  setLink,
  setIsUploaded,
}) => {
  const downloadVideo = () => {
    setLink("#");
    setIsUploaded(false);
    setVideoTitle("");
  };

  return (
    <>
      <div className={styles.title}>{videoTitle}</div>
      <a href={link} onClick={() => downloadVideo()}>
        <button className={styles.download}>Download</button>
      </a>
    </>
  );
};

export default Download;
