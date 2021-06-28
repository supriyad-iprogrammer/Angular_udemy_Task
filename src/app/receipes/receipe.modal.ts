import { Ingredints } from 'src/app/shared/ingrediant.modal';


export class Receipe{
public name:string;
public desc:string;
public imagepath:string;
  public ingrediants!: Ingredints[];

constructor(name:string, desc:string,imagepath:string, ingrediants:Ingredints[]){
  this.name=name;
  this.desc=desc;
  this.imagepath=imagepath;
  this.ingrediants=ingrediants;
}
}
