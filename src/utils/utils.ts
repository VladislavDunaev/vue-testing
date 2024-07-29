import type { IBinding, ITokens } from "@/types";

export function applyMask(value: string, binding: IBinding): string {
    const { value: mask } = binding;

    let formatted: string = "";
    let valPosition: number = 0;
    const splitMask: string[] = mask.split("");

    const tokens: ITokens = {
        0: { pattern: /\d/ },
        9: { pattern: /\d/ },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
        U: { pattern: /[A-Z]/ },
        L: { pattern: /[a-z]/ },
    };

    for (let i = 0; i <= splitMask.length - 1; i++) {
        const maskChar = splitMask[i];

        if (!value[valPosition]) break;

        const token = tokens[maskChar as keyof ITokens];

        if (token && token?.pattern.test(value[valPosition])) {
            formatted += value[valPosition];
            valPosition++;
        } else if (!token && value[valPosition]) {
            formatted += maskChar;
            if (maskChar === value[valPosition]) {
                valPosition++;
            }
        } else {
            break;
        }
    }

    return formatted;
}
