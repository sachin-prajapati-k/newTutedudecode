function Bio() {
  const BioInfo = "i will be a full stack developer one day";
  const skills = ["html", "css", "js", "React", "python", "java", "c and c++"];
  return (
    <>
      <h1>About me</h1>
      <h2>{BioInfo}</h2>
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <span key={index}> {skill} </span>
      ))}
    </>
  );
}

export default Bio;
