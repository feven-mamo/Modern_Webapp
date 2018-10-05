//Exercise two and three
(function () {
    function isWeekend() {
        const todayDate = new Date();
        const day = todayDate.getDate();
        switch (day) {
            case 0:
            case 6:
                return true;
            default:
                return false;
        }

    }
    console.log('is today the Weekend', isWeekend());

    const item = {
        "name": "Biscuit",
        "type": "regular",
        "category": "food",
        "price": 2.0
    }
    function applyCoupon(category) {
        return function (discount) {
            return function (Item) {
                if (Item.category == category) {
                    Item.price *= 1 - discount;
                }
                return Item;
            }
        }
    }
    const result = applyCoupon("food")(0.1)(item).price == 1.8;
    console.log("applyCoupon", result);

})();