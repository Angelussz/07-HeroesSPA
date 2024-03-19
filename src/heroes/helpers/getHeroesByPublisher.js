import  {heroes} from "../data/heroes";


export const getHeroesByPublisher = (publisher)=>{
    const validatePublisher = ['DC Comics',"Marvel Comics"];
    if(!validatePublisher.includes(publisher)){
        throw new Error(`${publisher} is not valid publisher`)
    }
    return heroes.filter(hero=> hero.publisher === publisher)
}