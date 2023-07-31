class customer extends MigrosBase {
    constructor(firstName, lastName, isHasCard, products) {
        super(firstName, lastName, isHasCard, products);
    }
    calculate(){
       return super.calculate()
    }
}