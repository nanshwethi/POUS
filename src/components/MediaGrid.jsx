import { Link } from "react-router-dom";

const MediaGrid = () => {
  return (
    <div className=" flex flex-wrap gap-5">
      <Link to={"/media/media-grid"}>
        <img src="/public/avocado.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/lemon.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/lime.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/orange.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/pineapple.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/strawberries.avif" className="media-img" alt="" />
      </Link>
      <Link to={"/media/media-grid"}>
        <img src="/public/lemon.avif" className="media-img" alt="" />
      </Link>
    </div>
  );
};

export default MediaGrid;
