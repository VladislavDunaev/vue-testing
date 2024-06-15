import { applyMask } from "@/utils/utils";

export default {
    updated(el: HTMLInputElement, binding: Object) {
        console.dir(binding);
        el.value = applyMask(el.value, binding);

        el.dispatchEvent(new Event("input"));
    },
};
