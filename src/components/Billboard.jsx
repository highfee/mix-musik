import { BiDownload, BiHeart, BiBookmarkPlus } from "react-icons/bi";

const Billboard = () => {
  return (
    <div className="billboard">
      <h1>Billboard top charts</h1>
      <section className="cards__container">
        <div className="card">
          <div className="card_details">
            <img src="./images/first.png" alt="" />
            <div>
              <p className="title">Level of Aquarius</p>
              <p className="subtitle">Hercules</p>
            </div>
          </div>
          <div>
            <p className="time">4:56</p>
            <div>
              <BiDownload fill="#ddd" size={20} />
              <BiHeart fill="#ddd" size={20} />
              <BiBookmarkPlus fill="#ddd" size={20} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_details">
            <img src="./images/first.png" alt="" />
            <div>
              <p className="title">Level of Aquarius</p>
              <p className="subtitle">Hercules</p>
            </div>
          </div>
          <div>
            <p className="time">4:56</p>
            <div>
              <BiDownload fill="#ddd" size={20} />
              <BiHeart fill="#ddd" size={20} />
              <BiBookmarkPlus fill="#ddd" size={20} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billboard;
