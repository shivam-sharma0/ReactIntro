//Card
function Book(props) {
  const reference = (e) => {
    alert("Are you sure");
    console.log(e);
  };

  const { img, title, author } = props;

  const complex = (title) => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => complex(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={reference}>
        Alert
      </button>
    </article>
  );
}

export default Book
