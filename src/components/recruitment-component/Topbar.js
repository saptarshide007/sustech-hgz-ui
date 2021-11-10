const Topbar = (props) => {
  const hamburgerClick = props.hamburgerClick;
  const hamburgerActive = props.hamburgerActive;

  let hamburgerClassName = "example-hamburger-menu";

  if (hamburgerActive) {
    hamburgerClassName += " example-hamburger-menu-active";
  }

  return (
    <nav className="example-top-bar">
      <button className={hamburgerClassName} onClick={hamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="example-search-box">
        <input type="search" className="example-search-input" />
        <button type="button" className="example-search-button">
          <span className="example-search-button-icon"></span>
        </button>
      </div>
      <div className="example-top-bar-left-links">
        <ExampleTopBarLink />
        <ExampleTopBarLink />
      </div>
      <div className="example-top-bar-right-links">
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
    <a href="#" className="example-top-bar-link" onClick={() => false}>
      <ExampleIcon size="24px" color="#f2f2f2" />
    </a>
  );
}
function ExampleIcon(props) {
  const size = props.size;
  const color = props.color;

  return (
    <i
      className="example-icon"
      style={{
        "--size": size,
        "--color": color,
      }}
    ></i>
  );
}
export default Topbar;
