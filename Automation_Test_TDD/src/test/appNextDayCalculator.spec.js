"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NextDayCalculator_1 = require("../../BaiTap/BT2_tinh_ngaytieptheo/NextDayCalculator");
describe("NextDayCalculator", () => {
    let nextDayCalculator = new NextDayCalculator_1.NextDayCalculator();
    test("testCalculator", () => {
        expect(nextDayCalculator.calculatorDate(new Date(2019, 2, 29))).toStrictEqual(new Date(2019, 2, 30));
    });
});
