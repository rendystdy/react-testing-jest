import React from "react";

export const data = ["Sening", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

const CompVariant = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setUser("Rendy");
    }, 1000);
  }, []);
  return (
    <>
      {user ? <p>Selamat datang {user}</p> : null}
      <p>Hari - hari yang ada: </p>
      {data.map((item, i) => (
        <p data-testid="hari" key={i}>{item}</p>
      ))}
    </>
  );
};

export default CompVariant;
