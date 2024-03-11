const Genero ={
    masculino : 'masculino',
    feminino: 'feminino',
    outos: 'outros',
}

enum Gender{
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'

}

type Person ={
name:string;
idade:number;
gender: string;
}

const person: Person = {
name:'danilo',
idade:27,
gender:'male',

}

function DisplayInfo(person:Person):void {
    console.log(`${person.name}`)
    console.log(`${person.idade}`)
    console.log(`${person.gender}`)
}

DisplayInfo(person)