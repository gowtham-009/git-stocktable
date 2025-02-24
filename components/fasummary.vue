<template>
    <Toast />
    <div class="w-full" v-if="loading">
  <div class="animate-pulse flex-col justify-between" >
     <div class="w-full p-1 flex gap-5" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
     <div class="w-full p-1 flex gap-5 mt-3" >
        <div class="h-6 bg-gray-300 rounded w-48"></div>
        <div class="h-6 bg-gray-300 rounded w-40"></div>
     </div>
  </div>
</div>

    <div v-if="content">
        <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="px-4 py-5 sm:p-6">
                <h1 class="text-center text-xl">FA-Summary</h1>
                 <ul class="mt-2">
                    <li v-for="(item, index) in viewData" :key="index">
                      <div class="w-full flex">
                        <div class="w-2/5 p-1 text-slate-600" > {{ item[3] }} {{ item[5] }}</div>
                        <div class="w-full p-1 text-slate-600" >{{ item[4] }}</div>
                      </div>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';
const props = defineProps({ customValue: String });
const toast = useToast();
 const loading=ref(true)
 const content=ref(false)
const summarydata=ref([])
const viewData=ref([])

const getSummarydata = async () => {
    const apiurl=`https://backoffice.w3webtechnologies.co.in/bo-api/api-FASummary-data.php?clientCode=${props.customValue}`
    try {
        const response=await fetch(apiurl,{
            method:'GET'
        })
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else{
            const data=await response.json()
            if(data.status=='ok'){
                summarydata.value=data
                displayedSummarydata()
            }
            else{
                toast.add({ severity: 'error', summary: 'Error Message', detail: 'Exist data', life: 3000 });

            }
        }
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error Message', detail: error.message, life: 3000 });
    }
    finally{
        loading.value=false
        content.value=true
    }
};

onMounted(() => {
    getSummarydata();
});

const displayedSummarydata=()=>{
   viewData.value=summarydata.value.metaData.DATA
}
</script>

<style >

</style>
