export function applyMask(value, binding) {
    const { value: mask, modifiers } = binding;

    let pureString = value.replace(/\W/g, "");

    if (modifiers?.numeric) {
        pureString = pureString.replace(/\D/g, "");
    }

    let formattedValue = "";

    let maskIndex = 0;
    for (let i = 0; i < pureString.length && maskIndex < mask.length; i++) {
        if (mask[maskIndex] === "0") {
            formattedValue += pureString[i];
            maskIndex++;
        } else {
            formattedValue += mask[maskIndex];
            maskIndex++;
            i--;
        }
    }

    return formattedValue;
}
