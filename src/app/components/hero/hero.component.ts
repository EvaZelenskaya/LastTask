import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { HeroesService } from "src/app/services/heroes.service";

@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
    heroForm!: FormGroup;
    output: any;
    constructor(
        private formBuilder: FormBuilder,
        private api: HeroesService,
        @Inject(MAT_DIALOG_DATA) public editHero: any,
        private daialogRef: MatDialogRef<HeroComponent>
    ) {}

    ngOnInit(): void {
        this.heroForm = this.formBuilder.group({
            name: ["ujhjkhkj"],
            status: [""],
            species: [""],
            type: [""],
            gender: [""],
            origin: [""],
            location: [""],
            //epizod: this.formBuilder.array([[""]]),
            episode: this.formBuilder.array([]),
            description: "",
        });

        this.tryDetailedInfo();

        this.heroForm.valueChanges.subscribe((data) => {
            console.log("Form changes", data);
            this.output = data;
        });
    }

    tryDetailedInfo() {
        this.heroForm.controls["name"].setValue(this.editHero.name);
        this.heroForm.controls["status"].setValue(this.editHero.status);
        this.heroForm.controls["species"].setValue(this.editHero.species);
        this.heroForm.controls["type"].setValue(this.editHero.type);
        this.heroForm.controls["gender"].setValue(this.editHero.gender);
        this.heroForm.controls["origin"].setValue(this.editHero.origin.url);
        this.heroForm.controls["location"].setValue(this.editHero.location.url);
        // this.heroForm.controls["episode"].setValue(this.editHero.episode.name);
        //  this.heroForm.controls["created1"].setValue(this.editHero.created);
    }

    update() {
        this.tryDetailedInfo();
    }
}
