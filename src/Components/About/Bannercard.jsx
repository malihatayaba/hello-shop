import '../../css/Style.css'
const Footer = () => {
  return (
    <div>
      <div className="banner-conatainer">
        <div className="banner-img">
          <img src="src/img/cartp.jpg" alt="bk" />
        </div>

        <div className="banner-text">
          <h1 className="banner-title">
            We are here to make great design accessible and delightfull for
            everyone
          </h1>
          <p className="banner-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire,
          </p>
        </div>
      </div>

     

      <div className="card-container">
        <div className="card-body">
          <h2 className="card-title">Team</h2>
          <p className="card-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">Board of 50M monthly enrichments</h2>
          <p className="card-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">Press</h2>
          <p className="card-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
