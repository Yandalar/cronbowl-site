import "./dataElements.css";

export const TableOne = (tabOneOpen) => {
  let show = tabOneOpen;

  if (tabOneOpen === true) {
    return (
      <div className="tableContainer">
        <table className="styledTable">
          <thead>
            <tr>
              <th>Rango</th>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>Entrenador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prueba1</td>
              <td>Prueba1</td>
              <td>Prueba1</td>
              <td>Prueba1</td>
            </tr>
            <tr className="active-row">
              <td>Prueba2</td>
              <td>Prueba2</td>
              <td>Prueba2</td>
              <td>Prueba2</td>
            </tr>
            <tr>
              <td>Prueba3</td>
              <td>Prueba3</td>
              <td>Prueba3</td>
              <td>Prueba2</td>
            </tr>
            <tr className="active-row">
              <td>Prueba4</td>
              <td>Prueba4</td>
              <td>Prueba4</td>
              <td>Prueba4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else return <></>;
};

export const TableTwo = () => {
  return (
    <div className="tableContainer">
      <table className="styledTable">
        <thead>
          <tr>
            <th>OTRA TABLA</th>
            <th>OTRA TABLA</th>
            <th>OTRA TABLA</th>
            <th>OTRA TABLA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
          </tr>
          <tr className="active-row">
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
          </tr>
          <tr>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
          </tr>
          <tr className="active-row">
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
            <td>OTRA TABLA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
