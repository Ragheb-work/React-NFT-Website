import colimg1 from "../components/assets/colimg1.png";
import colimg2 from "../components/assets/colimg2.png";
import colimg3 from "../components/assets/colimg3.png";

import userImg1 from "../components/assets/auth1.png";
import userImg2 from "../components/assets/auth2.jpeg";
import userImg3 from "../components/assets/auth3.jpeg";

const Collections = () => {
  return (
    <>
      <section className="collections">
        <div className="container">
          <div className="text">
            <h2>Trending Collections</h2>
            <label htmlFor="">
              Libero Enim Sed Faucibu. Turpis In Eu Mu Sis Lorem Ipsum.
            </label>
          </div>

          <div className="grid-3">
            <CollectionsCard
              cover={colimg1}
              img={userImg1}
              name="Marco Dre"
              user="@_gas0line"
            />
            <CollectionsCard
              cover={colimg2}
              img={userImg2}
              name="Kyoto Kid"
              user="@_kyoto92"
            />
            <CollectionsCard
              cover={colimg3}
              img={userImg3}
              name="Emil Koli"
              user="@_Koli89"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Collections;

export const CollectionsCard = (props) => {
  const { cover, img, name, user } = props;
  return (
    <div className="card">
      <div className="imgs">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <img className="user" src={img} alt="" />
      </div>
      <div className="content">
        <h3>{name} </h3>
        <p>{user}</p>
      </div>
    </div>
  );
};
