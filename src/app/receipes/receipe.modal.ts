import { Ingredints } from 'src/app/shared/ingrediant.modal';


export class Recipe{

public name:string;
public desc:string;
public imagePath:string;
  public ingrediants: Ingredints[];

constructor(name:string, desc:string,imagePath:string, ingrediants:Ingredints[]){
  this.name=name;
  this.desc=desc;
  this.imagePath=imagePath;
  this.ingrediants=ingrediants;
}
}
