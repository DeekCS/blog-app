import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Abdulkareem's BLOG</span>
        {/* <span className="headerTitleLg">BLOG</span> */}
      </div>
      <img
        className="headerImg"
        src="https://www.mpconsultants.com.tr/wp-content/uploads/2021/04/blogbanner1.png"
        alt=""
      />
    </div>
  );
}
