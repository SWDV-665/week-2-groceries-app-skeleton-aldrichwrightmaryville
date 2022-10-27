import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  groceries =   [       
    {
        Item: "Milk",
        Quantity: "1",
        Price: "$1.76",
        Total: "$1.76"
    },
{
  Item: "Bread",
  Quantity: "2",
  Price: "$2.12",
  Total: "$4.24"
},
{
  Item: "Blueberries",
  Quantity: "3",
  Price: "$1.98",
  Total: "$5.94"
},
{
  Item: "Large Eggs, 18 Count",
  Quantity: "1",
  Price: "$5.07",
  Total: "$5.07"
}
,
{
  Item: "Peanut Butter",
  Quantity: "1",
  Price: "$1.74",
  Total: "$1.74"
}
];



  constructor(public navCtrl: NavController) {

  }

}
