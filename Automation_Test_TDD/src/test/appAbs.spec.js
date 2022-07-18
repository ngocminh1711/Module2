"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appAbs_1 = require("../../ThucHanh/TH1_timgiatri_tuyetdoi/appAbs");
describe("testFindAbsolute0", () => {
    test("testFindAbsolute0", () => {
        let number = 0;
        let expected = 0;
        expect(appAbs_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsolute1", () => {
    test("testFindAbsolute1", () => {
        let number = 1;
        let expected = 1;
        expect(appAbs_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsoluteNegative1", () => {
    test("testFindAbsoluteNegative1", () => {
        let number = -1;
        let expected = 1;
        expect(appAbs_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
