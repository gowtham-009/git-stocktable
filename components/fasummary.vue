<template>
    <div>

        <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="px-4 py-5 sm:p-6">
                <h1 class="text-center text-xl">FA-Summary</h1>
                <ul class="mt-2">
                    <li v-for="(item, index) in data" :key="index">
                      <div class="w-full flex">
                        <div class="w-2/5 p-1 text-slate-600" > {{ item[2] }} {{ item[4] }}</div>
                        <div class="w-full p-1 text-slate-600" >{{ item[3] }}</div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
       
       
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref([]);

const fetchData = async () => {
    try {
        const res = await fetch("/summary.json");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const response = await res.json();
        data.value = response.DATA; // Extracting only DATA array

        console.log(data.value);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style >

</style>
