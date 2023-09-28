import authImg1 from "../components/assets/auth1.png";
import authImg2 from "../components/assets/auth2.jpeg";
import authImg3 from "../components/assets/auth3.jpeg";

const TrendingAuthors = () => {
  return (
    <div>
      <section className="author">
        <div className="container">
          <h2>Trending Author</h2>
          <br />
          <br />
          <br />
          <div className="grid-3">
            <TrendingAuthorCard img={authImg1} name="@YungKwin" />
            <TrendingAuthorCard img={authImg2} name="@MorisCat" />
            <TrendingAuthorCard img={authImg3} name="@Dunkam" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default TrendingAuthors;

export const TrendingAuthorCard = ({ img, name }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <label htmlFor="">{name}</label>
    </div>
  );
};
