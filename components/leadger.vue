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

<dl class="mx-auto grid grid-cols-1 p-2 gap-px  sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 rounded-lg">
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 animate-pulse">
    <dt class="h-4 w-20 bg-gray-300 rounded"></dt>
    <dd class="h-3 w-10 bg-gray-300 rounded"></dd>
    <dd class="w-full h-8 bg-gray-300 rounded"></dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 animate-pulse">
    <dt class="h-4 w-20 bg-gray-300 rounded"></dt>
    <dd class="h-3 w-10 bg-gray-300 rounded"></dd>
    <dd class="w-full h-8 bg-gray-300 rounded"></dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 animate-pulse">
    <dt class="h-4 w-20 bg-gray-300 rounded"></dt>
    <dd class="h-3 w-10 bg-gray-300 rounded"></dd>
    <dd class="w-full h-8 bg-gray-300 rounded"></dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8 animate-pulse">
    <dt class="h-4 w-20 bg-gray-300 rounded"></dt>
    <dd class="h-3 w-10 bg-gray-300 rounded"></dd>
    <dd class="w-full h-8 bg-gray-300 rounded"></dd>
  </div>
</dl>

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
     
      <div class="relative">
  <button @click="togglePopover" class="p-1 border rounded-lg text-gray-500 hover:bg-indigo-50 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
       stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round"
         d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
     </svg>
      </button>

      <transition name="fade">
    <div v-if="isVisiblecustom" class="popover-box ">
      <div
         class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
         <div class="p-4">
           <span class="text-lg"><i class="pi pi-clock"></i> Frequently used time period</span>
           <div class="w-full p-1 flex gap-2 pl-5">
             <button type="button" @click="getFilteredData('days_7', close)" :class="{'bg-indigo-600 text-white': activedata === 'days_7', 'hover:bg-indigo-50 hover:text-black': activedata == 'days_7'}"
               class="rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">
               7 Days</button>
             <button type="button"  @click="getFilteredData('days_15', close)" :class="{'bg-indigo-600 text-white': activedata === 'days_15', 'hover:bg-indigo-50 hover:text-black': activedata == 'days_15'}"
               class="rounded-md   px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">15
               Days</button>
             <button type="button"  @click="getFilteredData('month_1', close)" :class="{'bg-indigo-600 text-white': activedata === 'month_1', 'hover:bg-indigo-50 hover:text-black': activedata == 'month_1'}"
               class="rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-50 hover:text-black-500">1
               Month</button>
             <button type="button"  @click="getFilteredData('months_3', close)" :class="{'bg-indigo-600 text-white': activedata === 'months_3', 'hover:bg-indigo-50 hover:text-black': activedata == 'months_3'}"
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
    </div>
  </transition>
</div>

 
</div>


  </div>

  <div class="w-full mt-2" >
    <div class="overflow-hidden rounded-lg bg-white shadow  mt-1">
    <div class="px-2 py-2 ">

 <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2  bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Invested Amount</dt>
    <dd class="text-xs font-medium text-gray-700">+4.75%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight  text-gray-900">₹{{ investamount }}</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Current Value</dt>
    <dd class="text-xs font-medium text-rose-600">+54.02%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">₹{{ currentvalue }}</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Overall Gain</dt>
    <dd class="text-xs font-medium text-gray-700">-1.39%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">₹{{ overallgain }}</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Today's Gain</dt>
    <dd class="text-xs font-medium text-rose-600">+10.18%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">₹{{ todaysgain }}</dd>
  </div>
</dl> 
    </div>
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
       filterDisplay="menu" :loading="loading" :globalFilterFields="['clientcode', 'COCD', 'NARRATION', 'CTRCODE', 'DR_AMT']"
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

      <Column v-if="visibleColumns.includes('VOUCHERNO')" sortable field="VOUCHERNO" header="VoucherNo">
          <template #body="{ data }">
          <span >{{ data.VOUCHERNO }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by Vouncher no" />
          </template>
      </Column>

      <Column v-if="visibleColumns.includes('CTRCODE')" sortable field="CTRCODE" header="Type">
          <template #body="{ data }">
          <span >{{ data.CTRCODE }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by CTR code" />
          </template>
      </Column>
      
      <Column v-if="visibleColumns.includes('COCD')" sortable field="COCD" header="Segment">
        <template #body="{ data }">
          <span >{{ data.COCD }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by cocd" />
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

      <Column v-if="visibleColumns.includes('OPENINGBALANCE')" sortable field="OPENINGBALANCE" header="Opening Balance" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
            <span > {{ data.OPENINGBALANCE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minob" :max="maxob"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minob }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxob }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('DR_AMT')" sortable field="DR_AMT" header="Credit Amount" :showFilterOperator="false" :showFilterMatchModes="false">
            <template #body="{ data }">
            <span > {{ data.DR_AMT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minDrAmt" :max="maxDrAmt"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minDrAmt }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxDrAmt }}</span>
            </div>
            </template>
        </Column>

        <Column v-if="visibleColumns.includes('CR_AMT')" sortable field="CR_AMT" header="Debit Amount" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.CR_AMT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minCrAmt" :max="maxCrAmt"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minCrAmt }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxCrAmt }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('NARRATION')" sortable field="NARRATION" header="Narration">
          <template #body="{ data }">
          <span >{{ data.NARRATION }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by ClientCode" />
          </template>
      </Column>
   

    </DataTable>

    <Drawer v-model:visible="visibleRight" header="Stock Details" position="right" class="!w-90 md:!w-80 lg:!w-[80rem] wd">
            <div v-if="selectedRow">
                <div class="w-full flex gap-2">
                    <div class="w-full p-1 bg-slate-50 rounded-lg" >
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ClientCode</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.clientcode}}</span></div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">FromDate</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.fromDate }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ToDate</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.todate }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CTRCODE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.CTRCODE }}</div>
                        </div>

                       
                    </div>

                    <div class="w-full p-2 rounded-lg bg-slate-50">
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">COCD</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.COCD }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERDATEStr</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.voucherdate }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">VOUCHERDATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.VOUCHERDATE }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">NARRATION</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.NARRATION }}</div>
                        </div>
                    </div>
                    <div class="w-full p-1 rounded-lg bg-slate-50" >
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">DR_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.DR_AMT }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CR_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.cr_amt }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">OPENINGBALANCE</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.OPENINGBALANCE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">EntryDateTime</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.etrydatetime }}</div>
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
const isOpen = ref(false)
const noofrows=ref(0)
const loading=ref(true)
const content=ref(false)
const activedata=ref('days_7')
const rangetext=ref('')
const toast = useToast();



const props = defineProps({
  clientcode: String,
  token: String,
  session: String,
  auth: String

});







const storedData = ref([]);
const ledgerResponseData = ref(null);
const filters = ref();

const minDrAmt = ref(0);
const maxDrAmt = ref(0);

const minCrAmt = ref(0);
const maxCrAmt = ref(0);

const minob = ref(0);
const maxob = ref(0);

const startdate = ref('0')
const enddate = ref('0')

const start = ref(null);
const end = ref(null);


const isVisiblecustom = ref(false);

const togglePopover = () => {
isVisiblecustom.value = !isVisiblecustom.value;
};

const getLedgerDate = async () => {
 const formdata=new FormData()
 formdata.append('clientCode',props.clientcode)
  const ledgerApi = "https://backoffice.w3webtechnologies.co.in/bo-api/api-ledger-data.php";
  try {
    const response = await fetch(ledgerApi, 
    { 
      method: 'POST',
      headers: {
        'Authorization':props.auth,
        'X-Token':props.token,
        'X-Session':props.session,
        'X-Client':props.clientcode
      },
      body:formdata
      
     });
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
    console.log(error.message)
    //toast.add({ severity: 'error', summary: 'Error Message', detail: error.message, life: 3000 });
  } finally {
    loading.value = false;
    content.value=true
  }
};

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    VOUCHERNO: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    CTRCODE: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    COCD: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    voucherdate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    DR_AMT: { value: [minDrAmt.value, maxDrAmt.value], matchMode: FilterMatchMode.BETWEEN },
    CR_AMT: { value: [minCrAmt.value, maxCrAmt.value], matchMode: FilterMatchMode.BETWEEN },
   OPENINGBALANCE: { value: [minob.value, maxob.value], matchMode: FilterMatchMode.BETWEEN },

    NARRATION: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },


  };
};

watch([minDrAmt, maxDrAmt], initFilters);
watch([minCrAmt, maxCrAmt], initFilters);
watch([minob, maxob], initFilters);

const formatDater = (date) => {
  return date.toLocaleDateString('en-GB').split('/').join('-'); // Format to dd-mm-yyyy
  };



  const investamount=ref('')
  const currentvalue=ref('')
  const overallgain=ref('')
  const todaysgain=ref('')
  const getFilteredData = (dateFilterValue) => {
    if(dateFilterValue==='days_7'){
      investamount.value='50000'
      currentvalue.value='20000'
      overallgain.value='30000'
      todaysgain.value='45000'
    }
    else if(dateFilterValue==='days_15'){
      investamount.value='25000'
      currentvalue.value='26000'
      overallgain.value='28000'
      todaysgain.value='98000'
    }
    else if(dateFilterValue==='month_1'){
      investamount.value='2000'
      currentvalue.value='27000'
      overallgain.value='38000'
      todaysgain.value='55000'
    }

    else if(dateFilterValue==='months_3'){
      investamount.value='6300'
      currentvalue.value='42000'
      overallgain.value='98000'
      todaysgain.value='78000'
    }

    isVisiblecustom.value=false
    if(dateFilterValue){
      isOpen.value = false
    }
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
          const voucherDate = item[6] ? new Date(item[6]) : null;
          return voucherDate && voucherDate >= startDate && voucherDate <= today;
      }).map(item => ({
          clientcode: item[0], COCD: item[4], voucherdate: item[6] ? new Date(item[6]) : null,  NARRATION: item[8], DR_AMT: item[9], CTRCODE:item[3],
          fromDate:item[1], todate:item[2], voucherdaten:item[7], CR_AMT:item[10], OPENINGBALANCE:item[11],  etrydatetime:item[12], VOUCHERNO:item[5]

      }));

      noofrows.value=storedData.value.length
      console.log(storedData.value)
      if (storedData.value.length > 0) {
            minDrAmt.value = Math.min(...storedData.value.map(item => item.DR_AMT));
            maxDrAmt.value = Math.max(...storedData.value.map(item => item.DR_AMT));

            minCrAmt.value = Math.min(...storedData.value.map(item => item.CR_AMT));
            maxCrAmt.value = Math.max(...storedData.value.map(item => item.CR_AMT));

            minob.value = Math.min(...storedData.value.map(item => item.OPENINGBALANCE));
            maxob.value = Math.max(...storedData.value.map(item => item.OPENINGBALANCE));
           
        }
 
  }

 
};


const formatDate = (date) => {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-GB').format(new Date(date)); // Converts to dd-mm-yyyy
};


const columns = ref([
{ field: 'VOUCHERNO', header: 'Voucherno' },
{ field: 'COCD', header: 'Type' },
{ field: 'CTRCODE', header: 'Segment' },
{ field: 'voucherdate', header: 'Voucher date' },
{ field: 'NARRATION', header: 'Narration' },
{ field: 'DR_AMT', header: 'Credit amount' },
{ field: 'CR_AMT', header: 'Debit amount' },
{ field: 'OPENINGBALANCE', header: 'OPENINGBALANCE' },


]);

const selectedColumns = ref(columns.value.filter(col => !['OPENINGBALANCE','NARRATION'].includes(col.field)));
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
.popover-box {
position: absolute;
top: 30px;
left: 0;

padding: 10px;

z-index: 30;
}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
opacity: 0;
transform: translateY(-10px);
}


</style>