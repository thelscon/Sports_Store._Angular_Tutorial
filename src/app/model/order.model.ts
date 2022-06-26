import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable ()
export class Order {
    public id : number | undefined | null ;
    public name : string | undefined | null ;
    public address : string | undefined | null ;
    public city : string | undefined | null ;
    public state : string | undefined | null ;
    public zip : string | undefined | null ;
    public country : string | undefined | null ;
    public shipped : boolean = false ;

    constructor ( public cart : Cart ) {}

    clear () {
        this.id = null ;
        this.name = this.address = this.city = null ;
        this.state = this.zip = this.country = null ;
        this.shipped = false ;
        this.cart.clear () ;
    }
}