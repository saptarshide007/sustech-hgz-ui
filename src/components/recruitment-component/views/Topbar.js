import styles from "../resources/css/modules/Topbar.module.css";
const Topbar = (props) => {
  const hamburgerClick = props.hamburgerClick;
  const hamburgerActive = props.hamburgerActive;

  let hamburgerClassName = "example-hamburger-menu";

  if (hamburgerActive) {
    hamburgerClassName += " example-hamburger-menu-active";
  }

  return (
    <nav className={`${styles["example-top-bar"]}`}>
      <button
        className={`${styles["example-hamburger-menu"]}`}
        onClick={hamburgerClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles["example-search-box"]}`}>
        <input type="search" className={`${styles["example-search-input"]}`} />
        <button type="button" className={`${styles["example-search-button"]}`}>
          <span className={`${styles["example-search-button-icon"]}`}></span>
        </button>
      </div>
      <div className={`${styles["example-top-bar-left-links"]}`}>
        <ExampleTopBarLink />
        <ExampleTopBarLink />
      </div>
      <div className={`${styles["example-top-bar-right-links"]}`}>
        <ExampleTopBarLink />
        <ExampleTopBarLink />
        <ExampleTopBarLink />
        <ExampleTopBarLink />
      </div>
    </nav>
  );
};
function ExampleTopBarLink() {
  return (
    <a
      href="#"
      className={`${styles["example-top-bar-link"]}`}
      onClick={() => false}
    >
      <ExampleIcon size="24px" color="#f2f2f2" />
    </a>
  );
}
function ExampleIcon(props) {
  const size = props.size;
  const color = props.color;

  return (
    <i
      className={`${styles["example-icon"]}`}
      style={{
        "--size": size,
        "--color": color,
      }}
    ></i>
  );
}
export default Topbar;
