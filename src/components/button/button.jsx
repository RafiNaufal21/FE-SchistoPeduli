const Button = (props) => {
  const { children, variant, href } = props;
  return (
    <>
      <a className={`btn ${variant}`} href={`${href}`}>
        {children}
        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
          <i className="fa fa-arrow-right"></i>
        </div>
      </a>
    </>
  );
};

export default Button;
