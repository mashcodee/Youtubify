import React, { useState, FC, useRef, MutableRefObject } from "react";
import styles from "../styles/upload.module.scss";
import getDownloadLink from "../utils/getDownloadLink";

interface Props {
  setIsUploaded: Function;
  setLink: Function;
  setVideoTitle: Function;
}

const Upload: FC<Props> = ({ setVideoTitle, setLink, setIsUploaded }) => {
  const [videoId, setVideoId] = useState<string>("");
  const uploadBtn = useRef() as MutableRefObject<HTMLButtonElement>;

  const uploadVideo = async (): Promise<void> => {
    uploadBtn.current.innerHTML = "converting...";
    const data = await getDownloadLink(videoId);

    if (data) {
      if (data.status === "ok") {
        uploadBtn.current.innerHTML = "convert";
        setLink(data.link);
        setIsUploaded(true);
        setVideoTitle(data.title);
      } else if (data.status === "processing") uploadVideo();
      else {
        setVideoId("");
        uploadBtn.current.innerHTML = "convert";
        alert(data.msg);
      }
    } else {
      setVideoId("");
      uploadBtn.current.innerHTML = "convert";
    }
  };

  return (
    <>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          uploadVideo();
        }}
        className={styles.form}
      >
        <input
          type="text"
          placeholder="video id"
          maxLength={11}
          minLength={11}
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          className={styles.input}
          required
          autoFocus={true}
          autoComplete="off"
        />
        <button ref={uploadBtn} type="submit" className={styles.convert}>
          Convert
        </button>
      </form>
    </>
  );
};

export default Upload;
