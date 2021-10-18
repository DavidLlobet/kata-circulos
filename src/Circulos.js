import "./circles.css";

const circles = [{ id: 1 }, { id: 2 }, { id: 3 }];

function Circulo() {
  return (
    <div className="circles">
      {circles.map((circle) => (
        <div key={circle.id} className="circle"></div>
      ))}
    </div>
  );
}
export default Circulo;
