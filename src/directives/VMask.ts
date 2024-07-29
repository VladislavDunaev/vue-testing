import { applyMask } from "@/utils/utils";
import type { IBinding } from "@/types";

export default {
    updated(el: HTMLInputElement, binding: IBinding) {
        el.value = applyMask(el.value, binding);

        el.dispatchEvent(new Event("input"));
    },
};
