import {TriangleClassifier} from "../../BaiTap/BT3_phanloai_Triangle/TriangleClassifier";

describe("TriangleClassifier", () => {
    test("isTriangle", () => {
        let sideA = 0;
        let sideB = 2;
        let sideC = 3;

        let message = "Không phải tam giác";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });
    test("isTriangle", () => {
        let sideA = 3;
        let sideB = 0;
        let sideC = 2;

        let message = "Không phải tam giác";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });
    test("isTriangle", () => {
        let sideA = 3;
        let sideB = 2;
        let sideC = 0;

        let message = "Không phải tam giác";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });

    test("isTriangle", () => {
        let sideA = 2;
        let sideB = 3;
        let sideC = 4;

        let message = "Là tam giác";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });

    test("isEquilateralTriangle", () => {
        let sideA = 2;
        let sideB = 2;
        let sideC = 2;

        let message = "Là tam giác đều";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });

    test("isIsoscelesTriangle", () => {
        let sideA = 2;
        let sideB = 2;
        let sideC = 3;

        let message = "Là tam giác cân";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });
    test("isRightTriangle", () => {
        let sideA = 3;
        let sideB = 4;
        let sideC = 5;

        let message = "Là tam giác vuông";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });
    test("isRightIsoscelesTriangle", () => {
        let sideA = 2;
        let sideB = 2;
        let sideC = Math.sqrt(8);

        let message = "Là tam giác vuông cân";
        let triangle = new TriangleClassifier();

        expect(triangle.isTriangle(sideA, sideB, sideC)).toEqual(message);


    });
})