import React from "react";
import "./Announcement.scss";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="detail-item">
        <img src="/src/imgs/gg_time.png" alt="Date" />
        <span>Вебинар</span>
      </div>
      <h1>FRONT-END</h1>
      <div className="img_h2_container">
        <img src="/src/imgs/s-null.png" alt="" />
        <h2>легкий старт в IT профессии</h2>
      </div>
      <p className="middle-p">
        Узнайте какими{" "}
        <strong>
          навыками должен обладать <br /> фронтенд разработчик в 2022 году{" "}
        </strong>
        и как начать <br /> карьеру в востребованной профессии.
      </p>
      <div className="author">
        <img src="/src/imgs//author-image.png" alt="Кирилл Касатонов" />
        <div>
          <h3>
            КИРИЛЛ <span>КАСАТОНОВ</span>
          </h3>
          <p>
            6 лет коммерческого опыта с такими компаниями как <br />{" "}
            Mercedes-Benz и другими крупными корпорациями
          </p>
        </div>
      </div>
      <div className="bonus">
        <img src="/src/imgs//bonus-icon.png" alt="Бонус" />
        <p>
          <span>Бонус за регистрацию</span> <br /> PDF-файл "5 преимуществ{" "}
          <br />
          профессии фронтенд разработчика"
        </p>
      </div>
    </div>
  );
};

export default Announcement;
