class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = Math.pow(this.b,2) - 4 *( this.a * this.c );
    }
    getterA(){
        return this.a;
    }
    getterB(){
        return this.b;
    }
    getterC(){
        return this.c;
    }
    getDiscriminant() {
        return this.delta;
    }
    getRoot() {
        return (-this.b) /( 2 * this.a);
    }
    getRoot1()  {
        return ((-this.b) + Math.sqrt(this.delta)) /( 2 * this.a);
    }
    getRoot2()  {
        return ((-this.b) - Math.sqrt(this.delta)) /( 2 * this.a);
    }
    check() {
        if (this.delta === 0) {
            return this.getRoot();}
            else if (this.delta > 0) {
                return (`Nghiệm x1 = ${this.getRoot1()} và Nghiệm x2 = ${this.getRoot2()}`);
            }
            else {
                return (`Phương trình vô nghiệm`);
            }
        }
}

let qua = new QuadraticEquation(2,3,1);
console.log(qua.check());