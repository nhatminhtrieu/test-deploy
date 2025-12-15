import React from "react";
import "./Contact.scss";
import FBIcon from "../../assets/fb.svg";
import { Image } from "antd";

interface IContact {}

const Contact: React.FC<IContact> = () => {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/lamthanhngoc713", "_blank");
  };

  return (
    <div className="Contact">
      <div className="contact-content">
        Halluuu, I'm Thanh Ngoc Lam 🙋‍♀️ <br />
        <br />I am about to complete my 4-year miracle journey and that would be
        one of the best milestone I have ever achieved in my life. 🎓 <br />
        <br />
        To be honest, this journey has not been easy at all and I would never be
        here without all the support from you - my beloved ones 💖
        <br /> <br />
        Thus, I would be extremely honored and grateful if you could join me at
        my graduation ceremony to celebrate this special occasion with me. 🎉{" "}
        <br /> <br />
        For your best experience, please contact me via:
        <br /> <br />
        <div className="contact-info">
          <div className="phone">📞 (+84) 945 820 509</div>
          <div className="fb" onClick={handleFacebookClick}>
            <Image
              src={FBIcon}
              preview={false}
              className="fb-icon"
              width={20}
            />{" "}
            Lâm Thanh Ngọc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
