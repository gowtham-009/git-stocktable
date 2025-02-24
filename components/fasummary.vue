<template>
    <div>

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
const props = defineProps({ customValue: String });

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
        }
    } catch (error) {
        
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
