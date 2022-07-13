export class TriangleClassifier {
    isTriangle(sideA: number, sideB: number, sideC: number) {
        if (sideA + sideB > sideC &&
            sideB + sideC > sideA &&
            sideA + sideC > sideB) {
            if (sideA == sideB && sideB == sideC) {
                return "Là tam giác đều";

            }
            if (sideA == sideB || sideB == sideC || sideA == sideC) {
                return "Là tam giác cân";
            }
            if (Math.pow(sideA, 2) == Math.pow(sideB, 2) + Math.pow(sideC, 2) ||
                Math.pow(sideB, 2) == Math.pow(sideA, 2) + Math.pow(sideC, 2) ||
                Math.pow(sideC, 2) == Math.pow(sideA, 2) + Math.pow(sideB, 2)
            ) {
                return "Là tam giác vuông";
            }

            return "Là tam giác";
        }

        return "Không phải tam giác";
    }
}