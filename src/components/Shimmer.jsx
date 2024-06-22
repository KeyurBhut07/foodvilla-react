const Shimmer = () => {
  return (
    <>
      <div className="resuturant-list">
        {Array(25)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
