import { Component, OnInit } from "@angular/core";
import { Subscription, take } from "rxjs";
import { IHeroes } from "src/app/models/heroes";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HeroComponent } from "../hero/hero.component";
import { HeroesService } from "src/app/services/heroes.service";
import { UpperCasePipe } from "@angular/common";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
    heroes!: IHeroes[];
    heroSubsciption!: Subscription;

    constructor(
        private myHeroesService: HeroesService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.heroSubsciption = this.myHeroesService
            .getHeroes()
            .subscribe((data) => {
                this.heroes = data;
                console.log(data);
            });
    }
    openDialog(hero: any) {
        this.dialog.open(HeroComponent, {
            width: "35%",
            data: hero,
        });
    }

    ngOnDestroy() {
        if (this.heroSubsciption) this.heroSubsciption.unsubscribe();
    }
}
