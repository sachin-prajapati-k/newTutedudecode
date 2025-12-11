function Personalinfo() {
  const name = "sachin";
  const roll = "Frontend Developer";
  const location = "Noida";
  const email = "sachin13579p@gmail.com";
  return (
    <div style={{ lineHeight: "15px" }}>
      <h1>{name}</h1>
      <h2>{roll}</h2>
      <h2>{location}</h2>
      <p>{email}</p>
    </div>
  );
}
export default Personalinfo;
