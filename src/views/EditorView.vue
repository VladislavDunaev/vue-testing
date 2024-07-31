<template>
    <div class="w-full">
        <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div class="flex items-center justify-between px-3 py-2 border-b">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-3">
                            <editor-button @click="applyList('ordered')" title="Ordered list">
                                <img width="16" height="16" src="@/assets/icons/ordered-list.svg" alt="Ordered List" />
                            </editor-button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <editor-button @click="applyList('unordered')" title="Unordered list">
                                <img
                                    width="24"
                                    height="24"
                                    src="@/assets/icons/unordered-list.svg"
                                    alt="Unordered List"
                                />
                            </editor-button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <editor-button @click="applyStyle('bold')" title="Text Bold">
                                <img width="24" height="24" src="@/assets/icons/text-bold.svg" alt="Text Bold" />
                            </editor-button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <editor-button @click="applyStyle('italic')" title="Text Italics">
                                <img width="24" height="24" src="@/assets/icons/text-italic.svg" alt="Text Italic" />
                            </editor-button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:pe-3 sm:ps-3">
                            <editor-button @click="applyLink" title="Add Link">
                                <img width="24" height="24" src="@/assets/icons/link.svg" alt="Add Link" />
                            </editor-button>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-2 bg-white rounded-b-lg">
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
                @click="retrieveFromLocalStorage"
                type="button"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-blue-200"
            >
                Restore From LS
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import type { IListStyle, ITextStyle } from "@/types";
import { ORDERED_LIST, TEXT_BOLD, TEXT_ITALIC, TEXT_NORMAL } from "@/constants";
import EditorButton from "@/components/EditorButton.vue";

export default {
    components: { EditorButton },
    methods: {
        applyStyle(style: ITextStyle) {
            const selection = window.getSelection();
            if (selection?.rangeCount) {
                const range = selection.getRangeAt(0);
                const selectedNode = range.startContainer.parentNode as HTMLElement;
                if (
                    (style === TEXT_BOLD && selectedNode.style.fontWeight === TEXT_BOLD) ||
                    (style === TEXT_ITALIC && selectedNode.style.fontStyle === TEXT_ITALIC)
                ) {
                    const parent = selectedNode.parentNode;
                    while (selectedNode.firstChild) parent?.insertBefore(selectedNode.firstChild, selectedNode);
                    parent?.removeChild(selectedNode);
                } else {
                    const span = document.createElement("span");
                    span.style.fontWeight = style === TEXT_BOLD ? TEXT_BOLD : TEXT_NORMAL;
                    span.style.fontStyle = style === TEXT_ITALIC ? TEXT_ITALIC : TEXT_NORMAL;
                    range.surroundContents(span);
                }
            }

            selection?.removeAllRanges();
        },
        applyList(listType: IListStyle) {
            const selection = window.getSelection();
            if (selection?.rangeCount) {
                const range = selection.getRangeAt(0);
                const selectedText = selection.toString();
                const list = document.createElement(listType === ORDERED_LIST ? "ol" : "ul");

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
                if (selection?.rangeCount) {
                    const range = selection.getRangeAt(0);
                    const anchor = document.createElement("a");
                    anchor.href = url;
                    anchor.target = "_blank";
                    anchor.textContent = selection.toString();
                    range.deleteContents();
                    range.insertNode(anchor);
                }
            }
        },
        saveToLocalStorage() {
            localStorage.setItem("content", (this.$refs["editor"] as HTMLElement).innerHTML);
        },
        retrieveFromLocalStorage() {
            const savedContent = localStorage.getItem("content");
            if (savedContent) {
                (this.$refs["editor"] as HTMLElement).innerHTML = savedContent;
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
