import '../../css/Style.css'

const Banner = () => {
    return (
        <div className="banner-conatainer">
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
        <div className="banner-img">
          <img src='src/img/digimart1.jpg' alt="bk" />
        </div>
      </div>
            
        
    );
};

export default Banner;