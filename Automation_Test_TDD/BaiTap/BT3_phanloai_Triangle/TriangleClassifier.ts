export class TriangleClassifier {
    isTriangle(sideA: number, sideB: number, sideC: number) {
        if (this.isTringle(sideA, sideB, sideC)) {
            if (this.isEquilateralTriangle(sideA, sideB, sideC)) {
                return "Là tam giác đều";

            }
            if (this.isIsoscelesTriangle(sideA, sideB, sideC)) {
                if (this.isRightTriangle(sideA, sideB, sideC)){
                    return "Là tam giác vuông cân";
                }
                return "Là tam giác cân";
            }
            if (this.isRightTriangle(sideA, sideB, sideC)) {
                return "Là tam giác vuông";
            }
            return "Là tam giác";
        }

        return "Không phải tam giác";
    }

    private isEquilateralTriangle(sideA: number, sideB: number, sideC: number) {
        return sideA == sideB && sideB == sideC;
    }

    private isRightTriangle(sideA: number, sideB: number, sideC: number) {
        return Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideB, 2))) == sideC
            || Math.sqrt((Math.pow(sideB, 2) + Math.pow(sideC, 2))) == sideA
            || Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideC, 2))) == sideB;
    }

    private isIsoscelesTriangle(sideA: number, sideB: number, sideC: number) {
        return sideA == sideB || sideB == sideC || sideA == sideC;
    }

    private isTringle(sideA: number, sideB: number, sideC: number) {
        return sideA + sideB > sideC &&
            sideB + sideC > sideA &&
            sideA + sideC > sideB;
    }
}