function NavMenu() {

  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  const handleFocus = (e) => {
    e.target.classList.add('input--active');
    console.log(e.target);
  }

  const handleBlur = (e) => {
    e.target.classList.remove('input--active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();// ngan chn sk mac dinh khi nhan submit form
    console.log(e.target[0].value);
  }

  return (
    <>
      <div className="box">
        <div>NavMenu</div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></input>
          <button onClick={handleClick}>Click Me</button>
        </form>
      </div>
    </>
  );
}

export default NavMenu;