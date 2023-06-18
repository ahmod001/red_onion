import breakfast1 from "../images/breakfast/breakfast1.png";
import breakfast2 from "../images/breakfast/breakfast2.png";
import breakfast3 from "../images/breakfast/breakfast3.png";
import breakfast4 from "../images/breakfast/breakfast4.png";
import breakfast5 from "../images/breakfast/breakfast5.png";
import breakfast6 from "../images/breakfast/breakfast6.png";

import lunch1 from "../images/lunch/lunch1.png";
import lunch2 from "../images/lunch/lunch2.png";
import lunch3 from "../images/lunch/lunch3.png";
import lunch4 from "../images/lunch/lunch4.png";
import lunch5 from "../images/lunch/lunch5.png";
import lunch6 from "../images/lunch/lunch6.png";

import dinner1 from "../images/dinner/dinner1.png";
import dinner2 from "../images/dinner/dinner2.png";
import dinner3 from "../images/dinner/dinner3.png";
import dinner4 from "../images/dinner/dinner4.png";
import dinner5 from "../images/dinner/dinner5.png";
import dinner6 from "../images/dinner/dinner6.png";

// This class will Make Meal objects
class Meal {
    constructor(id, name, img, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = 'Consequatur facere labore atque hic. Alias, saepe, impedit veritatis molestias voluptatum commodi veniam architecto laudantium accusantium dicta laboriosam quas recusandae praesentium adipisci';
        this.price = price;
    }
}

export const fakeMeals = {
    breakfast: [
        new Meal(0, 'Eggs Bandit', breakfast1, 8.99),
        new Meal(1, 'Breakfast Sandwich', breakfast2, 9.99),
        new Meal(2, 'Baked Chicken', breakfast3, 10.99),
        new Meal(3, 'Bagel and Cream Cheese', breakfast4, 6.99),
        new Meal(4, 'Full Breakfast Fried Egg Toast Brunch', breakfast5, 3.99),
        new Meal(5, 'Toast Croissant Fried Egg', breakfast6, 19.99)
    ],

    lunch: [
        new Meal(6, 'Beef Steak', lunch1, 15.99),
        new Meal(7, 'Honey-Soy-Glazed Salmon with Peppers', lunch2, 7.99),
        new Meal(8, 'Tarragon-Rubbed-Salmon', lunch3, 6.99),
        new Meal(9, 'Indian Lunch', lunch4, 8.99),
        new Meal(10, 'Fried Chicken Bento', lunch5, 9.99),
        new Meal(11, 'Healthy Meal Plan', lunch6, 23.99)
    ],

    dinner: [
        new Meal(12, 'Baked Chicken', dinner1, 9.99),
        new Meal(13, 'Lemony Salmon Piccata', dinner2, 10.99),
        new Meal(14, 'Garlic Butter Baked Salmon', dinner3, 6.99),
        new Meal(15, 'French fries with cheese', dinner4, 8.99),
        new Meal(16, 'Pork Tenderloin with Quinoa Pilaf', dinner5, 12.99),
        new Meal(17, 'Salmon with Grapefruit and Lentil Salad', dinner6, 9.99)
    ]
}

// Combining all meals into a single array for effortless searching
export const allMeals = fakeMeals.breakfast.concat(fakeMeals.lunch, fakeMeals.dinner)




// Set Backup on Local Storage Function //
export const localStorageHandler = (action, key, target) => {
    // Set to LocalStorage
    if (action === 'set') {
        localStorage.setItem('redOnion_' + key, JSON.stringify(target))
    }
    // Get from LocalStorage
    else if (action === 'get') {
        return JSON.parse(localStorage.getItem('redOnion_' + key))
    }
    // Remove From LocalStorage
    else if (action === 'remove') {
        localStorage.removeItem('redOnion_' + key)
    }
}