import { TEXT_BOLD, TEXT_ITALIC, ORDERED_LIST, UNORDERED_LIST, TEXT_NORMAL } from "@/constants";

export interface IToken {
    pattern: RegExp;
}

export interface ITokens {
    0: IToken;
    9: IToken;
    A: IToken;
    S: IToken;
    U: IToken;
    L: IToken;
}

export interface IBinding {
    value: string;
}

export type ITextStyle = typeof TEXT_BOLD | typeof TEXT_ITALIC | typeof TEXT_NORMAL;

export type IListStyle = typeof ORDERED_LIST | typeof UNORDERED_LIST;
