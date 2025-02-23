<template>
    <div class="card">
        <DataTable removableSort paginator :rows="10"
            :value="storedData" 
            class="cursor-pointer"
            tableStyle="min-width: 50rem" 
             v-model:filters="filters"
            @row-click="rightcanva"
             filterDisplay="menu" :loading="loading" :globalFilterFields="['cocd', 'cr_amt']"
        >
        <template #header>
            <div class="flex justify-end gap-2 items-center">
            <IconField>
         <InputIcon>
           <i class="pi pi-search" />
         </InputIcon>
         <InputText v-model="filters['global'].value" placeholder="Search stock and company..." />
       </IconField>
       </div>
            </template>

            <template #empty> No customers found. </template>
   <template #loading> Loading customers data. Please wait. </template>

            <Column sortable field="cocd" header="COCD">
                <template #body="{ data }">
      <span >{{ data.cocd }}</span>
     </template>
     <template #filter="{ filterModel }">
       <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
     </template>
            </Column>
            <Column sortable field="dr_amt" header="DR_AMT"></Column>
            <Column sortable field="cr_amt" header="CR_AMT">
              
            </Column>
            <Column sortable field="voucher_date" dataType="date" header="VOUCHERDATE">
                <template #body="{ data }">
                   <span>{{ formatDateDisplay(data.voucher_date) }}</span>
                </template>
                <template #filter="{ filterModel }">
                   <DatePicker v-model="filterModel.value" dateFormat="dd-mm-yyyy" showIcon
                      @update:modelValue="applyDateFilter(filterModel)" />
                </template>
            </Column>
            <Column sortable field="settlement_no" header="SETTLEMENT_NO"></Column>
        </DataTable>

        <Drawer v-model:visible="visibleRight" header="Stock Details" position="right" class="!w-90 md:!w-80 lg:!w-[80rem] wd">
            <div v-if="selectedRow">
                <div class="w-full flex gap-2">
                    <div class="w-full p-1 bg-slate-50 rounded-lg" >
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">COCD</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.cocd  }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CR_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.cr_amt  }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERDATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.voucher_date   }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SETTLEMENT_NO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.settlement_no }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CTRCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.ctr_code }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CTRNAME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.ctr_name }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERNO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.voucher_no }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">NARRATION</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.narration }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">BILLNO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.billno }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CONAME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.co_name }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CHQNO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.cho_no }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">EXPECTED_DATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.expected_date }}</span></div>
                        </div>
                    </div>

                    <div class="w-full p-2 rounded-lg bg-slate-50">
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">TRADING_COCD</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.trading_coco }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">PANNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.pan }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">EMAIL</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.email }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">MANUALVNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.manualvno }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BOOKTYPECODE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.booktypecode }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BILL_DATE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.billdate }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">MKT_TYPE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.mkttype }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">GROUPCODE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.groupcode }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">KINDOFACCOUNT</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.kindofaccount }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BRSFLAG</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.brsflag }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">SETL_PAYINDATE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.setlpay }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">LAST2SETL</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">{{ selectedRow.last2setl }}</span></div>
                        </div>
                    </div>
                    <div class="w-full p-1 rounded-lg bg-slate-50" >
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTCODE1</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.accountcode }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">GATEWAYID</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.gatewayid }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">PUNCH_TIME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.punchtime }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">voctype</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.voctype }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CHQIMAGEPATH</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.chqimagepath }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TRANS_TYPE1</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.transtype1 }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.accountcode }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTNAME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.accountname }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TELNO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.telno }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">FAX</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.fax }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ADDR</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.addr }}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">OPENINGBALANCE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.openingbalance }}</span></div>
                        </div>
                    </div>
                </div>
                       
            </div>
        </Drawer>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const filters = ref();
const storedData = ref([]);
const apiResponse = ref(null);
const visibleRight = ref(false);
const selectedRow = ref(null); // Store clicked row data



const fetchData = async () => {
    try {
        const res = await fetch("/vj.json");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        apiResponse.value = await res.json();
    } catch (error) {
        console.error("Error:", error.message);
    }
};


const initFilters = () => {

filters.value = {
global: { value: null, matchMode: FilterMatchMode.CONTAINS },
cocd: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
voucher_date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
};
};


const formatDateDisplay = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`; // Display format
};

const formatDateForFilter = (date) => {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const applyDateFilter = (filterModel) => {
    if (filterModel.value) {
        filterModel.value = formatDateForFilter(filterModel.value);
    }
};

initFilters()
const processData = () => {
    if (apiResponse.value && apiResponse.value.DATA && Array.isArray(apiResponse.value.DATA)) {
        storedData.value = apiResponse.value.DATA.map(item => ({    
            cocd: item[0], 
            dr_amt: item[1], 
            cr_amt: item[2], 
            voucher_date: item[3], 
            settlement_no: item[4],
            ctr_code: item[5],
            ctr_name: item[6],
            voucher_no: item[7],
            narration: item[8],
            billno: item[9],
            co_name: item[10],
            cho_no: item[11],
            expected_date: item[12],
            trading_coco: item[13],
            pan: item[14],
            email: item[15],
            manualvno: item[16],
            booktypecode: item[17],
            billdate: item[18],
            mkttype: item[19],
            groupcode: item[20],
            kindofaccount: item[21],
            brsflag: item[22],
            setlpay: item[23],
            last2setl: item[24],
            accountcode: item[25],
            gatewayid: item[26],
            punchtime: item[27],
            voctype: item[28],
            chqimagepath: item[29],
            transtype1: item[30],
            accountcode: item[31],
            accountname: item[32],
            telno: item[33],
            fax: item[34],
            addr: item[35],
            openingbalance: item[36],
           
            
        }));
    } else {
        console.error("Invalid data format", apiResponse.value);
    }
};

onMounted(async () => {
    await fetchData();
    processData();
});

const rightcanva = (event) => {
    selectedRow.value = event.data; // Store clicked row data
    visibleRight.value = true;
};
</script>

<style scoped>
.card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
