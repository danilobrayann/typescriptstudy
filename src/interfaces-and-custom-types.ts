type Coordinatie = {
  x: number;
  y: number;
};


function CalculateDistance(pointA: Coordinatie, pointB: Coordinatie): number {
  const Dx = pointB.x - pointA.x;
  const Dy = pointB.y - pointA.y;

  const result = Math.sqrt(Dx*Dx + Dy*Dy)

  return result;
}

const CoordinatieA: Coordinatie = {
    x: 20,
    y: 2,
  };

  
const CoordinatieB: Coordinatie = {
    x: 35,
    y: 5,
  };

 // console.log(CalculateDistance(CoordinatieA, CoordinatieB))

  ///////////////
  interface car{
    barnd: string;
    model: string;
   year: number;
   startInegir: () => void;

  }

const Mycar: car = {
barnd:'volvo',
model: 'cx60',
year: 2014,
startInegir: () =>{
console.log('motor foi iniciado');
}
  };

function drive (car: car): void {
console.log(`dirigindo ${car.barnd} - ${car.model}` );
car.startInegir();

  }
  drive(Mycar)