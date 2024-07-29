import { describe, expect, it } from "@jest/globals";
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
        ${"lowUPP000"}      | ${"AAA/AAA/AAA"}         | ${"low/UPP/000"}
        ${"lowerUPPER"}     | ${"SSSSS-SSSSS"}         | ${"lower-UPPER"}
        ${"UPPER"}          | ${"U-U-U-U-U"}           | ${"U-P-P-E-R"}
        ${"lower"}          | ${"L_L_L_L_L"}           | ${"l_o_w_e_r"}
    `("Mask $mask with input $input equal $result", ({ input, mask, result }) => {
        expect(applyMask(input, { value: mask })).toBe(result);
    });

    it("If the input is too long, the mask will cut off unnecessary values", () => {
        const input = "99999999999999999999999999999999999999999999";
        const maskedInput = applyMask(input, { value: "0 0 0 0" });
        expect(maskedInput).toEqual("9 9 9 9");
    });

    it("If the next letter does not match the pattern, all following characters are ignored", () => {
        const input = "1234ignorenext";
        const maskedInput = applyMask(input, { value: "00/00/0000" });
        expect(maskedInput).toEqual("12/34/");
    });

    it("If a string is passed that is too short, it will be formatted for as long as it lasts", () => {
        const input = "toshort";
        const maskedInput = applyMask(input, { value: "SS/SS/SS/SS/SS" });
        expect(maskedInput).toEqual("to/sh/or/t");
    });
});
