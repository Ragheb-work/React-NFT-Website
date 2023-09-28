import { HiOutlineArrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Banner from "./Banner";

const BlogPage = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid-3">
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-3.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-1.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-4.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-4.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-3.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
          <BlogCard
            cover="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-3.jpg"
            title="Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs"
          />
        </div>
      </section>
    </>
  );
};
export default BlogPage;

export const BlogCard = (props) => {
  return (
    <div className="card">
      <div className="img">
        <img src={props.cover} alt="" />
      </div>
      <h1>
        {props.title}
        <br />
        <button>
          <NavLink className="flex-b-g" to="/single-page">
            Find out more at our Shop <HiOutlineArrowRight size={25} />
          </NavLink>
        </button>
      </h1>
    </div>
  );
};
export const BlogDetails = () => {
  return (
    <section className="blog blogpage">
      <div className="container">
        <div className="card">
          <div className="img">
            <img
              src="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/blog-img-3.jpg"
              alt=""
            />
          </div>
          <h1>
            Awsome NFT Collectibles - Rare, Original & Exclusive Card NFTs
          </h1>
          <p>
            Consequat Mauris Nunc Congue Nisi Vitae Suscipit Tellus. Quis
            Eleifend Quam Adipiscing Vitae Proin Sagittis Nisl Rhoncus. Mauris
            Ultrices Eros In Cursus Turpis Massa Tincidunt. Integer Quis Auctor
            Elit Sed Vulputate Mi Sit Amet. Quis Varius Quam Quisque Id Diam Vel
            Quam. Ultrices Sagittis Orci A Scelerisque Purus Semper Eget Duis.
            Accumsan Tortor Posuere Ac Ut Consequat Semper Viverra Nam Libero.
            Malesuada Fames Ac Turpis Egestas Integer. Eget Arcu Dictum Varius
            Duis. Faucibus Nisl Tincidunt Eget Nullam Non Nisi Est. Duis Ut Diam
            Quam Nulla Porttitor Massa. Iaculis Eu Non Diam Phasellus
            Vestibulum. Imperdiet Dui Accumsan Sit Amet Nulla Facilisi Morbi
            Tempus Iaculisconsequat Sagittis Orci A Scelerisque Purus Semper
            Eget. Suspendisse Interdum Consectetur Libero Id Faucibus Nisl.
            Faucibus In Ornare Quam Viverra Orci Sagittis Eu Volutpat. Vel
            Facilisis Volutpat Est Velit Egestas. Pretium Viverra Suspendisse
            Potenti Nullam Ac. Faucibus Vitae Aliquet Nec Ullamcorper Sit Amet.
            Massa Ultricies Mi Quis Hendrerit Dolor Magna Eget Est Lorem. Erat
            Pellentesque Adipiscing Commodo Elit At. Neque Convallis A Cras
            Semper Auctor Neque Vitae Tempus.
          </p>

          <h3>Be Open To Feedback</h3>
          <p>
            Consequat Mauris Nunc Congue Nisi Vitae Suscipit Tellus. Quis
            Eleifend Quam Adipiscing Vitae Proin Sagittis Nisl Rhoncus. Mauris
            Ultrices Eros In Cursus Turpis Massa Tincidunt. Integer Quis Auctor
            Elit Sed Vulputate Mi Sit Amet. Quis Varius Quam Quisque Id Diam Vel
            Quam. Ultrices Sagittis Orci A Scelerisque Purus Semper Eget Duis.
            Accumsan Tortor Posuere Ac Ut Consequat Semper Viverra Nam Libero.
            Malesuada Fames Ac Turpis Egestas Integer. Eget Arcu Dictum Varius
            Duis. Faucibus Nisl Tincidunt Eget Nullam Non Nisi Est. Duis Ut Diam
            Quam Nulla Porttitor Massa. Iaculis Eu Non Diam Phasellus
            Vestibulum. Imperdiet Dui Accumsan Sit Amet Nulla Facilisi Morbi
            Tempus Iaculisconsequat Sagittis Orci A Scelerisque Purus Semper
            Eget. Suspendisse Interdum Consectetur Libero Id Faucibus Nisl.
            Faucibus In Ornare Quam Viverra Orci Sagittis Eu Volutpat. Vel
            Facilisis Volutpat Est Velit Egestas. Pretium Viverra Suspendisse
            Potenti Nullam Ac. Faucibus Vitae Aliquet Nec Ullamcorper Sit Amet.
            Massa Ultricies Mi Quis Hendrerit Dolor Magna Eget Est Lorem. Erat
            Pellentesque Adipiscing Commodo Elit At. Neque Convallis A Cras
            Semper Auctor Neque Vitae Tempus.
          </p>
        </div>
      </div>
      <br />
      <Banner />
    </section>
  );
};
