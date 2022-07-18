"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleClassifier = void 0;
class TriangleClassifier {
    isTriangle(sideA, sideB, sideC) {
        if (this.isTringle(sideA, sideB, sideC)) {
            if (this.isEquilateralTriangle(sideA, sideB, sideC)) {
                return "Là tam giác đều";
            }
            if (this.isIsoscelesTriangle(sideA, sideB, sideC)) {
                if (this.isRightTriangle(sideA, sideB, sideC)) {
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
    isEquilateralTriangle(sideA, sideB, sideC) {
        return sideA == sideB && sideB == sideC;
    }
    isRightTriangle(sideA, sideB, sideC) {
        return Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideB, 2))) == sideC
            || Math.sqrt((Math.pow(sideB, 2) + Math.pow(sideC, 2))) == sideA
            || Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideC, 2))) == sideB;
    }
    isIsoscelesTriangle(sideA, sideB, sideC) {
        return sideA == sideB || sideB == sideC || sideA == sideC;
    }
    isTringle(sideA, sideB, sideC) {
        return sideA + sideB > sideC &&
            sideB + sideC > sideA &&
            sideA + sideC > sideB;
    }
}
exports.TriangleClassifier = TriangleClassifier;
