
const CiudadPaleta = (menuCiudadPaleta4) => {

    // const userNames = users.map(({ name }) => name)
    {Object.values(menuCiudadPaleta4).map((value, index) => {
        return (
          <div key={index}>
            <h2>{value.id}</h2>  
            <p>s</p>  
            <hr />
          </div>
        );
      })}
}
export default CiudadPaleta;