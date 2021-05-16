import React from "react";
import { useEffect, useState } from "react";
import "./Home.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { find } = useParams();
  const [failed, setFailed] = useState(false);

  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.fdci.se/sosmed/rep.php?${find && `gambar=${find}`}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log("failed to get images");
          setFailed(true);
        }
      })
      .catch((e) => {
        setFailed(true);
      })
      .then((resJson) => {
        setDatas(resJson);
        setLoading(false);
      })
      .catch((e) => {
        setFailed(true);
      });
    return () => {
      setDatas([]);
    };
  }, [find]);

  return (
    <div>
      <Helmet>
        <title>{`Multi Wallpaper - ${
          find ? capitalize(find) : "Rahmat Agung Julians"
        }`}</title>
      </Helmet>
      {loading && <div className="centered">Loading ...</div>}
      {failed && <div className="centered">Failed</div>}
      {datas && (
        <div className="gallery">
          {datas.map((data) => (
            <img key={data} src={data} alt={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
