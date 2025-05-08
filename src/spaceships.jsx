function Ships (props) {


  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h1>{props.name}</h1>
      <p>Speed: {props.speed}</p>
    </div>
  );
}

export default Ships;