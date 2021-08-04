const getDownloadLink = async (
  id: string
): Promise<{
  link: string;
  status: string;
  title: string;
  msg: string;
} | null> => {
  try {
    const res = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY!,
        "x-rapidapi-host": process.env.API_HOST!,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    alert("something went wrong");
    return null;
  }
};

export default getDownloadLink;
