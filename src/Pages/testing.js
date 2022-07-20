return (
    <>
      
      {beers.map((beer, index) => {
        return <div className="cards" key={index}>
        {beer.name}  &nbsp;|&nbsp;
        {beer.style} &nbsp;|&nbsp;
        {beer.abr}%  &nbsp;|&nbsp; <span style={{color: 'green'}}>$ </span>
        {beer.price}
        
        </div>;
        
      })}
      
    </>
  );
};

export default Reload;
