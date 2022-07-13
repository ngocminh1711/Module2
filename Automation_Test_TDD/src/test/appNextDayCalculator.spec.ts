import {NextDayCalculator} from "../../BaiTap/BT2_tinh_ngaytieptheo/NextDayCalculator";


describe("NextDayCalculator", () => {
    let nextDayCalculator = new NextDayCalculator();
    test("testCalculator", () => {


        expect(nextDayCalculator.calculatorDate(new Date(2019,2,29))).toStrictEqual(new Date(2019,2,30))
    });
});