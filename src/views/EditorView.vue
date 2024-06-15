<template>
    <div class="w-full">
        <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div class="flex items-center justify-between px-3 py-2 border-b">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-3">
                            <button
                                @click="applyList('ordered')"
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 21 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                                    />
                                </svg>
                                <span class="sr-only">Ordered list</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <button
                                @click="applyList('unordered')"
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="w-6 h-6 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
                                    />
                                </svg>

                                <span class="sr-only">Unordered List</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <button
                                @click="applyStyle('bold')"
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="w-6 h-6 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                                    />
                                </svg>

                                <span class="sr-only">Text Bold</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <button
                                @click="applyStyle('italic')"
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="w-6 h-6 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                                    />
                                </svg>

                                <span class="sr-only">Text Italics</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <button
                                @click="applyLink"
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="w-6 h-6 text-gray-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                                    />
                                </svg>

                                <span class="sr-only">Add Link</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-2 bg-white rounded-b-lg">
                    <label for="editor" class="sr-only">Publish post</label>
                    <div
                        id="editor"
                        ref="editor"
                        class="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:outline-0 min-h-[250px]"
                        tabindex="1"
                        contenteditable
                        v-once
                    ></div>
                </div>
            </div>
            <button
                @click="saveToLocalStorage"
                type="button"
                class="inline-flex items-center px-5 py-2.5 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
            >
                Save To LS
            </button>
            <button
                @click="retriveFromLocalStorage"
                type="button"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-blue-200"
            >
                Restore From LS
            </button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    methods: {
        applyStyle(style) {
            const selection = window.getSelection();
            if (selection.rangeCount) {
                const range = selection.getRangeAt(0);
                const selectedNode = range.startContainer.parentNode;
                if (
                    (style === "bold" && selectedNode.style.fontWeight === "bold") ||
                    (style === "italic" && selectedNode.style.fontStyle === "italic")
                ) {
                    const parent = selectedNode.parentNode;
                    while (selectedNode.firstChild) parent.insertBefore(selectedNode.firstChild, selectedNode);
                    parent.removeChild(selectedNode);
                } else {
                    const span = document.createElement("span");
                    span.style.fontWeight = style === "bold" ? "bold" : "normal";
                    span.style.fontStyle = style === "italic" ? "italic" : "normal";
                    range.surroundContents(span);
                }
            }
        },
        applyList(listType) {
            const selection = window.getSelection();
            if (selection.rangeCount) {
                const range = selection.getRangeAt(0);
                const selectedText = selection.toString();
                const list = document.createElement(listType === "ordered" ? "ol" : "ul");

                selectedText.split("\n").forEach((line) => {
                    if (line.trim() !== "") {
                        const listItem = document.createElement("li");
                        listItem.textContent = line;
                        list.appendChild(listItem);
                    }
                });

                range.deleteContents();
                range.insertNode(list);
            }
        },
        applyLink() {
            const url = prompt("Enter the URL");
            if (url) {
                const selection = window.getSelection();
                if (selection.rangeCount) {
                    const range = selection.getRangeAt(0);
                    const anchor = document.createElement("a");
                    anchor.href = url;
                    anchor.target = "_blank";
                    range.surroundContents(anchor);
                }
            }
        },
        saveToLocalStorage() {
            localStorage.setItem("content", this.$refs["editor"].innerHTML);
        },
        retriveFromLocalStorage() {
            const savedContent = localStorage.getItem("content");
            if (savedContent) {
                this.$refs["editor"].innerHTML = savedContent;
            }
        },
    },
};
</script>

<style lang="css">
#editor ol {
    list-style: numeric inside;
}
#editor ul {
    list-style: disc inside;
}
#editor a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
