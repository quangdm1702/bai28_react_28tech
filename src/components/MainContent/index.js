function MainContent() {
  let name = 'Doan Minh Quang';
  const css = {
    // color: 'white',
    // backgroundColor: 'black'
  };
  return (
    <>
      <div className="box">
        <div className="test" style={css}>
          Xin chao {name}
        </div>

        <div className="test" style={css}>
          Xin chao {name}
        </div>
      </div>

    </>
  );
}

export default MainContent;