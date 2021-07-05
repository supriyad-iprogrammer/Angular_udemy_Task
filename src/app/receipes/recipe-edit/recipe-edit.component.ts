import { Receipe } from './../receipe.modal';
import { RecipeService } from './../recipe.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      console.log(this.editMode)
    })
  }

  get ingrediantsGroup() {
    return (<FormArray>this.recipeForm.get('ingrediants')).controls;
  }
  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDesc = '';
    let recipeIngred = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name,
        recipeImage = recipe.imagePath,
        recipeDesc = recipe.desc
      if (recipe['ingrediants']) {
        for (let ingrediant of recipe.ingrediants) {
          recipeIngred.push(

            new FormGroup({
              'name': new FormControl(ingrediant.name, Validators.required),
              'amount': new FormControl(ingrediant.amount, [Validators.required, Validators.pattern(/^[0-9]+$/)])

            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImage, Validators.required),

      'desc': new FormControl(recipeDesc, Validators.required),
      'ingrediants': recipeIngred
    })
  }
  onSubmit() {
    console.log(this.recipeForm)
debugger
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancle();
  }
  onAddIngrediants() {
    (<FormArray>this.recipeForm.get('ingrediants')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)])
      })
    )
  }
  onCancle() {
    this.router.navigate(['../'], { relativeTo: this.route })

  }
  onDelete(index: number) {

    (<FormArray>this.recipeForm.get('ingrediants')).removeAt(index)
      ;
  }
}
