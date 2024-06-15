import { applyMask } from "../utils/utils";

describe("Apply Mask Function", () => {
    it.each`
        input               | mask                     | result
        ${"11111111"}       | ${"00/00/0000"}          | ${"11/11/1111"}
        ${"222222"}         | ${"00:00:00"}            | ${"22:22:22"}
        ${"33333333333333"} | ${"00/00/0000 00:00:00"} | ${"33/33/3333 33:33:33"}
        ${"44444444"}       | ${"00000-000"}           | ${"44444-444"}
        ${"5555555555"}     | ${"(000) 000-0000"}      | ${"(555) 555-5555"}
        ${"666666666666"}   | ${"000.000.000.000"}     | ${"666.666.666.666"}
    `("Mask $mask with input $input equal $result", ({ input, mask, result }) => {
        expect(applyMask(input, { value: mask })).toBe(result);
    });

    it("If the input is too long, the mask will cut off unnecessary values", () => {
        const input = "99999999999999999999999999999999999999999999";
        const maskedInput = applyMask(input, { value: "0 0 0 0" });
        expect(maskedInput).toEqual("9 9 9 9");
    });

    it("If the string has letters but uses a numeric modifier, only numbers will be included in the mask", () => {
        const input = "qwwerewdfsfsdf345lkgfgklfgflg678kfgkgfgf90";
        const maskedInput = applyMask(input, { value: "00/00/0000", modifiers: { numeric: true } });
        expect(maskedInput).toEqual("34/56/7890");
    });

    it("If there are letters in the string and no numeric modifier is used, the mask will include letters and numbers", () => {
        const input = "qwerty+1-2/";
        const maskedInput = applyMask(input, { value: "0-0-0-0-0-0-0-0" });
        expect(maskedInput).toEqual("q-w-e-r-t-y-1-2");
    });

    it("If a string is passed that is too short, it will be formatted for as long as it lasts", () => {
        const input = "to-short";
        const maskedInput = applyMask(input, { value: "00/00/00/00/00" });
        expect(maskedInput).toEqual("to/sh/or/t");
    });
});
