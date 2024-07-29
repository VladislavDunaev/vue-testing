<template>
    <div class="directive w-full">
        <h1>This is a directive page</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Date</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Date"
                    v-model="date"
                    v-mask="'00/00/0000'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Time</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Time"
                    v-model="time"
                    v-mask="'00:00:00'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Date & Time</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Date & Time"
                    v-model="date_time"
                    v-mask="'00/00/0000 00:00:00'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Cep</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Cep"
                    v-model="cep"
                    v-mask="'00000-000'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Phone"
                    v-model="phone"
                    v-mask="'0000-0000'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Phone with ddd</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Phone with ddd"
                    v-model="phone_with_ddd"
                    v-mask="'(00) 0000-0000'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Phone US</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Phone US"
                    v-model="phone_us"
                    v-mask="'(000) 000-0000'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Mixed</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Mixed"
                    v-model="mixed"
                    v-mask="'AAA 000-S0S'"
                    required
                />
            </div>
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">IP Address</label>
                <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="IP Address"
                    v-model="ip_address"
                    v-mask="'000.000.000.000'"
                    required
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data: () => ({
        date: "" as string,
        time: "" as string,
        date_time: "" as string,
        cep: "" as string,
        phone: "" as string,
        phone_with_ddd: "" as string,
        phone_us: "" as string,
        mixed: "" as string,
        ip_address: "" as string,
    }),
});
</script>
