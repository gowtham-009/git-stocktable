<template>
    <Toast />
   
    <div  class="w-full" v-if="loading">
<div class="p-1 space-y-4">


 <div class="w-full p-4 border border-gray-300 rounded-lg">
<div class="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
<div class="mt-2 flex items-center gap-2">
<div class="h-4 w-40 bg-gray-300 rounded animate-pulse"></div>
<div class="h-6 w-6 bg-gray-300 rounded animate-pulse"></div>
</div>
</div>


<!-- Table Skeleton -->

<div class="border border-gray-200 rounded-lg ">

 <div class="h-20   bg-white animate-pulse rounded-lg flex gap-2 justify-end items-center py-5 p-3">
 <div class="h-12 w-96 bg-gray-200 animate-pulse rounded"></div>
 <div class="h-12 w-8 bg-gray-200 animate-pulse rounded"></div>
 <div class="h-12 w-8 bg-gray-200 animate-pulse rounded"></div>
</div>

   <div class="grid grid-cols-7 bg-gray-100 p-3 font-semibold">
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
       <div class="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
   </div>

   <!-- Table Rows -->
   <div class="divide-y divide-gray-200">
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       <div class="grid grid-cols-7 p-3 animate-pulse">
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
           <div class="h-6 w-20 bg-gray-200 rounded"></div>
       </div>
       
   </div>
</div>

<!-- Pagination Skeleton -->
<div class="flex justify-center space-x-2">
   <div class="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
   <div class="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
   <div class="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
</div>
</div>
</div>
  
   <div v-if="content">
    <div class="w-full p-1 flex gap-2 items-end">
      <div>
      <div class="text-slate-500">Statement For  {{ rangetext }} </div>
      <div class="text-black-500"><span>{{ startdate }}</span> To <span>{{ enddate }}</span></div>
      </div>

      <div>
   <Popover class="relative">
     <PopoverButton class="inline-flex items-center gap-x-1 text-sm/6 font-semibold outline-none text-slate-500 border rounded-lg p-1 hover:bg-indigo-50">

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round"
           d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
       </svg>

     </PopoverButton>

     <transition  enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" 
       enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
       leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
       <PopoverPanel  class="absolute left z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
         <div
           class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
           <div class="p-4">
             <span class="text-lg"><i class="pi pi-clock"></i> Frequently used time period</span>
             <div class="w-full p-1 flex gap-2 pl-5">
               <button type="button" @click="getFilteredData('days_7')" :class="{'bg-indigo-600 text-white': activedata === 'days_7', 'hover:bg-indigo-50 hover:text-black': activedata == 'days_7'}"
                 class="rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">
                 7 Days</button>
               <button type="button"  @click="getFilteredData('days_15')" :class="{'bg-indigo-600 text-white': activedata === 'days_15', 'hover:bg-indigo-50 hover:text-black': activedata == 'days_15'}"
                 class="rounded-md   px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">15
                 Days</button>
               <button type="button"  @click="getFilteredData('month_1')" :class="{'bg-indigo-600 text-white': activedata === 'month_1', 'hover:bg-indigo-50 hover:text-black': activedata == 'month_1'}"
                 class="rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">1
                 Month</button>
               <button type="button"  @click="getFilteredData('months_3')" :class="{'bg-indigo-600 text-white': activedata === 'months_3', 'hover:bg-indigo-50 hover:text-black': activedata == 'months_3'}"
                 class="rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">3
                 Months</button>
             </div>

             <div class="mt-3">
         <span class="text-lg "><i class="pi pi-calendar"></i> Date Range Filter</span>
         <div class="flex justify-center items-center gap-2">
           <div class="w-48">
               <span>Start Date</span><br>
               <DatePicker  v-model="start" dateFormat="dd-mm-yy" showIcon />
           </div>
           <span>To</span>
           <div class="w-48">
               <span>End Date</span><br>
               <DatePicker v-model="end" dateFormat="dd-mm-yy" showIcon />
           </div>
       </div>
        </div>
       <div class="w-full flex justify-start mt-2">
           <button @click="getFilteredData('daterangefilter')"
class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 
      hover:bg-indigo-50 hover:text-black">
Apply filter
</button>

       </div>
           </div>

         </div>
       </PopoverPanel>
     </transition>
   </Popover>
 </div>


    </div>
    <div class="w-full p-1 mt-2" >

      <DataTable 
      ref="dt"
       @row-click="rightcanva"
       v-model:filters="filters"
        paginator :rows="10"
         :value="storedData"
          class="cursor-pointer"
          dataKey="id"
         filterDisplay="menu" :loading="loading" :globalFilterFields="['clientcode', 'cocd', 'settlement_no']"
          removableSort>
          
          <template #paginatorstart>
           <span>No of Rows {{ noofrows }}</span>
       </template>
 
          <template #header>
     <div class="flex justify-end gap-2 items-center">

       <IconField>
         <InputIcon>
           <i class="pi pi-search" />
         </InputIcon>
         <InputText v-model="filters['global'].value" placeholder="Search stock and company..." />
       </IconField>

       <MultiSelect v-model="selectedColumns" :options="columns" optionLabel="header"
         @change="updateVisibleColumns" display="template" :showToggleAll="false" :dropdownIcon="null"
         class="p-0 text-white ml-2 " style="width: 42px; height: 34px; ">
         <template #dropdownicon >
          
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
             class="w-6 h-6 text-slate-500">
             <path fill-rule="evenodd"
               d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z"
               clip-rule="evenodd" />
           </svg>
           
         </template>
         <template #footer v-if="showReset">
         <div class="p-2 w-full flex justify-center">
           <button type="button"  @click="resetColumns"  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 
           hover:bg-indigo-50 hover:text-black">Reset</button>
         </div>

          
         </template>
       </MultiSelect>
      
       <button type="button" @click="exportCSV($event)"
         class="rounded-md ml-2  px-1 py-1 text-sm font-semibold text-slate-500  border-2 hover:bg-indigo-50"><svg
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
           <path fill-rule="evenodd"
             d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
             clip-rule="evenodd" />
         </svg>
       </button>
     </div>
   </template>
   <template #empty> No customers found. </template>
   <template #loading> Loading customers data. Please wait. </template>

        <Column v-if="visibleColumns.includes('clientcode')" sortable field="clientcode" header="Client Code">
            <template #body="{ data }">
            <span >{{ data.clientcode }}</span>
            </template>
            <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" placeholder="Search by ClientCode" />
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('cocd')" sortable field="cocd" header="COCD">
          <template #body="{ data }">
            <span >{{ data.cocd }}</span>
            </template>
            <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" placeholder="Search by cocd" />
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('dr_amt')" sortable field="dr_amt" header="Dr_Amt" :showFilterOperator="false" :showFilterMatchModes="false">
            <template #body="{ data }">
            <span > {{ data.dr_amt }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minDrAmt" :max="maxDrAmt"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minDrAmt }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxDrAmt }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('cr_amt')" sortable field="cr_amt" header="Cr_Amt" :showFilterOperator="false" :showFilterMatchModes="false">
            <template #body="{ data }">
            <span > {{ data.cr_amt }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="mincrAmt" :max="maxcrAmt"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : mincrAmt }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxcrAmt }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('voucherdate')" sortable field="voucherdate" dataType="date" header="Voucher Date">
          <template #body="{ data }">
            {{ formatDate(data.voucherdate) }}
          </template>
          <template #filter="{ filterModel }">
            <Calendar v-model="filterModel.value" dateFormat="dd-mm-yy" />
          </template>
        </Column>
        <Column v-if="visibleColumns.includes('settlement_no')" sortable field="settlement_no" header="Settlement No">
            <template #body="{ data }">
      <span >{{ data.settlement_no }}</span>
     </template>
     <template #filter="{ filterModel }">
       <InputText v-model="filterModel.value" type="text" placeholder="Search by settlement no" />
     </template>
        </Column>

      </DataTable>


      <Drawer v-model:visible="visibleRight" header="Stock Details" position="right" class="!w-90 md:!w-80 lg:!w-[80rem] wd">
            <div v-if="selectedRow">
                <div class="w-full flex gap-2">
                    <div class="w-full p-1 bg-slate-50 rounded-lg" >
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">clientCode</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.clientcode}}</span></div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">fromDate</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.fromDate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">toDate</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.todate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">COCD</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.cocd }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">DR_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.dr_amt }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CR_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.cr_amt }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERDATEStr</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.vochd }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERDATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.voucherdate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SETTLEMENT_NO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.settlement_no }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CTRCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.ctrcode }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CTRNAME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.ctrname }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TRANS_TYPE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.transtype }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.accountcode1 }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTNAME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.accountname }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TELNO</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.telno }}</div>
                        </div>
                    </div>

                    <div class="w-full p-2 rounded-lg bg-slate-50">
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">VOUCHERNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.voucherno }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">NARRATION</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.narration }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BILLNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.billno }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">CONAME</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.coname }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">CHQNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.chqno }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">EXPECTED_DATE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.expecteddate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">TRADING_COCD</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.tradingcocd }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">PANNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.panno }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">EMAIL</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.email }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">MANUALVNO</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.manualvno }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BOOKTYPECODE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.booktypecode }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">BILL_DATE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.billdate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">FAX</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.fax }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">ADDR</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.addr }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">OPENINGBALANCE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.openbal }}</div>
                        </div>
                    </div>
                    <div class="w-full p-1 rounded-lg bg-slate-50" >
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">MKT_TYPE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.mkttype }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">GROUPCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.groupcode }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">KINDOFACCOUNT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.kingdofaccount }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">BRSFLAG</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.brsflag }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SETL_PAYINDATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.setlpayindate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">LAST2SETL</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.last2setl }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ACCOUNTCODE1</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.accountcode }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">GATEWAYID</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.gateway }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">PUNCH_TIME</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.punchtime }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">voctype</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.voctype }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CHQIMAGEPATH</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.chqimagepath }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TRANS_TYPE1</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.transtype1 }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">entryDateTime</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.etrydatetime }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">storeJsonStatus</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.storejson }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">storeJsonDateTime</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.storejosndatetime }}</div>
                        </div>
                    </div>
                </div>
                       
            </div>
        </Drawer>
    </div>
   </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useToast } from 'primevue/usetoast';
  import { defineProps } from 'vue';
  import Toast from 'primevue/toast';
  import Calendar from 'primevue/calendar';
  import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const noofrows=ref(0)
const loading=ref(true)
const content=ref(false)
const activedata=ref('days_7')
const rangetext=ref('')
  const toast = useToast();
 
  const props = defineProps({ customValue: String });

  const storedData = ref([]);
  const ledgerResponseData = ref(null);
  const filters = ref();

  const minDrAmt = ref(0);
  const maxDrAmt = ref(0);

  const mincrAmt = ref(0);
  const maxcrAmt = ref(0);

  const startdate = ref('0')
  const enddate = ref('0')

  const start = ref(null);
const end = ref(null);

  const getLedgerDate = async () => {
    const ledgerApi = `https://backoffice.w3webtechnologies.co.in/bo-api/api-ledger-data.php?clientCode=${props.customValue}`;
    try {
      const response = await fetch(ledgerApi, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Your request failed with status ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 'ok') {
        ledgerResponseData.value = data;
        getFilteredData('days_7');
      } else {
        toast.add({ severity: 'error', summary: 'Error Message', detail: 'Data does not exist', life: 3000 });
      }
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error Message', detail: error.message, life: 3000 });
    } finally {
      loading.value = false;
      content.value=true
    }
  };

  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      clientcode: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      cocd: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      voucherdate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    dr_amt: { value: [minDrAmt.value, maxDrAmt.value], matchMode: FilterMatchMode.BETWEEN },
    cr_amt: { value: [mincrAmt.value, maxcrAmt.value], matchMode: FilterMatchMode.BETWEEN },
    settlement_no: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

    };
  };

  watch([minDrAmt, maxDrAmt], initFilters);
  watch([mincrAmt, maxcrAmt], initFilters);
 
  const formatDater = (date) => {
    return date.toLocaleDateString('en-GB').split('/').join('-'); // Format to dd-mm-yyyy
    };
    const getFilteredData = (dateFilterValue, close) => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    let startDate = new Date(today);
    
    const dateRanges = {
        'days_7': { label: '7 Days', offset: 6 },
        'days_15': { label: '15 Days', offset: 14 },
        'month_1': { label: '1 Month', offsetMonths: 1 },
        'months_3': { label: '3 Months', offsetMonths: 3 }
    };
    
    if (dateRanges[dateFilterValue]) {
        rangetext.value = dateRanges[dateFilterValue].label;
        activedata.value = dateFilterValue;
        
        if (dateRanges[dateFilterValue].offset !== undefined) {
            startDate.setDate(today.getDate() - dateRanges[dateFilterValue].offset);
        } else if (dateRanges[dateFilterValue].offsetMonths !== undefined) {
            startDate.setMonth(today.getMonth() - dateRanges[dateFilterValue].offsetMonths);
        }
        
        startDate.setHours(0, 0, 0, 0);
        startdate.value = formatDater(startDate);
        enddate.value = formatDater(today);
        start.value = startDate;
        end.value = today;
    } else if (dateFilterValue === 'daterangefilter') {
        const startDateVal = new Date(start.value);
        const endDateVal = new Date(end.value);
        startDateVal.setHours(0, 0, 0, 0);
        endDateVal.setHours(23, 59, 59, 999);
        
        startdate.value = formatDater(startDateVal);
        enddate.value = formatDater(endDateVal);
        startDate = startDateVal;
        today.setTime(endDateVal.getTime());
    }

    if (ledgerResponseData.value?.metaData?.DATA) {
        storedData.value = ledgerResponseData.value.metaData.DATA.filter(item => {
            const voucherDate = item[7] ? new Date(item[7]) : null;
            return voucherDate && voucherDate >= startDate && voucherDate <= today;
        }).map(item => ({
            clientcode: item[1], cocd: item[4], dr_amt: item[5],cr_amt: item[6],voucherdate: item[7] ? new Date(item[7]) : null,
            settlement_no: item[9],fromDate:item[2], todate:item[3], vochd:item[8], ctrcode:item[10], ctrname:item[11], transtype:item[12], voucherno:item[13], narration:item[14], billno:item[15], coname:item[16], chqno:item[17], expecteddate:item[18], 
            tradingcocd:item[19], panno:item[20], email:item[21], manualvno:item[22], booktypecode:item[23], billdate:item[24], mkttype:item[25], groupcode:item[26], kingdofaccount:item[27], brsflag:item[28], 
            setlpayindate:item[29], last2setl:item[30],accountcode1:item[31], gateway:item[32], punchtime:item[33], voctype:item[34], chqimagepath:item[35], transtype1:item[36], accountcode:item[37], accountname:item[38], telno:item[39], fax:item[40], addr:item[41],openbal:item[42],
            etrydatetime:item[43], storejson:item[44], storejosndatetime:item[45]

        }));

        noofrows.value=storedData.value.length

        if (storedData.value.length > 0) {
            minDrAmt.value = Math.min(...storedData.value.map(item => item.dr_amt));
            maxDrAmt.value = Math.max(...storedData.value.map(item => item.dr_amt));
            mincrAmt.value = Math.min(...storedData.value.map(item => item.cr_amt));
            maxcrAmt.value = Math.max(...storedData.value.map(item => item.cr_amt));
        }
    }

   
};


  const formatDate = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-GB').format(new Date(date)); // Converts to dd-mm-yyyy
  };


const columns = ref([
{ field: 'clientcode', header: 'CLIENTCODE' },
{ field: 'cocd', header: 'COCD' },
{ field: 'dr_amt', header: 'DRAMT' },
{ field: 'cr_amt', header: 'CRAMT' },
{ field: 'voucherdate', header: 'VOUCHERDATE' },
{ field: 'settlement_no', header: 'SETTLEMENTNO' },


]);

const selectedColumns = ref(columns.value.filter(col => ![].includes(col.field)));
const visibleColumns = ref(selectedColumns.value.map(col => col.field)); // Tracks visibility
const showReset = ref(true); // Ensure reset is visible as some columns are unchecked initially

const updateVisibleColumns = () => {
visibleColumns.value = selectedColumns.value.map(col => col.field);
showReset.value = selectedColumns.value.length < columns.value.length; // Show Reset only when some columns are unchecked
};

const resetColumns = () => {
selectedColumns.value = columns.value.slice(); // Reset to all columns selected
updateVisibleColumns(); // Ensure UI updates
};

watch(selectedColumns, updateVisibleColumns, { deep: true });

const dt = ref()
const exportCSV = () => {
dt.value.exportCSV();
};

initFilters();
  onMounted(() => {
    getLedgerDate();
  });

const visibleRight=ref(false)
const selectedRow = ref(null);
  const rightcanva = (event) => {
    selectedRow.value = event.data; // Store clicked row data
    visibleRight.value = true;
};
  </script>
<style>
.left{
  left: 626% !important;
}
.p-checkbox-checked.p-variant-filled .p-checkbox-box{
    background-color: blue !important;
    border: blue !important;
  }
 
  .p-multiselect.p-variant-filled{
    background: none !important;
   
  }
  .p-multiselect-dropdown{
    border: 2px solid rgb(227, 227, 227);
    border-radius: 5px;
   
  }

  .p-multiselect-dropdown:hover{
    background-color: rgb(239, 239, 250);
  }
  .p-multiselect{
  
    box-shadow: none !important;
  }

</style>