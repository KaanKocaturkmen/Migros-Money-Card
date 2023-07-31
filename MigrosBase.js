class MigrosBase {
    discountRate = 20;
    constructor(firstName, lastName, isHasCard, products) {
        this.firstName = firstName
        this.lastName = lastName
        this.isHasCard = isHasCard
        this.products = products
    }

    calculate() {
        let pay = 0;

        if (this.checkProducts(this.products)) {
            //basket is full

            if (this.isHasCard) {
                this.products.forEach((item) => {
                    pay += item.price * ((100 - this.discountRate) / 100);
                })
                //Has moneycard
            } else {
                //Donthave
                this.products.forEach((item) => {
                    pay += item.price
                })
            }
        } else {
            alert("Please buy a product at least 1")
        }
        return pay;
    }
    checkProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }
}
