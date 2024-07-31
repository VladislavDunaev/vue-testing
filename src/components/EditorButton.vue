<template>
    <button
        @click="$emit('click')"
        type="button"
        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
    >
        <slot></slot>
        <span class="sr-only">{{ title }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "EditorButton",
    emits: {
        click: null,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
});
</script>
