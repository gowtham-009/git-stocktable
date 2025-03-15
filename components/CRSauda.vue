<template>
  <Toast />
 
  <div  class="w-full" v-if="loading">
<div class="p-1 space-y-4">




<!-- <dl class="mx-auto grid grid-cols-1 p-2 gap-px  sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 rounded-lg">
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
</dl> -->

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


  <!-- <div class="w-full mt-2" >
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
  </div> -->

  <div class="w-full p-1 mt-2" >

    <DataTable 
    ref="dt"
     @row-click="rightcanva"
     v-model:filters="filters"
      paginator :rows="10"
       :value="storedData"
        class="cursor-pointer"
        dataKey="id"
       filterDisplay="menu" :loading="loading" :globalFilterFields="['SCRIP_SYMBOL']"
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

 <Column v-if="visibleColumns.includes('SCRIP_SYMBOL')" sortable field="SCRIP_SYMBOL" header="Script Symbol">
          <template #body="{ data }">
          <span >{{ data.SCRIP_SYMBOL }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by ClientCode" />
          </template>
      </Column>


      <Column v-if="visibleColumns.includes('open_QUANTITY')" sortable field="open_QUANTITY" header="Open Quantity" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
            <span > {{ data.open_QUANTITY }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minoq" :max="maxoq"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minoq }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxoq }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('CLOSING_AMT')" sortable field="CLOSING_AMT" header="Closing AMT" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
            <span > {{ data.CLOSING_AMT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minca" :max="maxca"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minca }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxca }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('Open_AMOUNT')" sortable field="Open_AMOUNT" header="Open Amount" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.Open_AMOUNT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minoa" :max="maxoa"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minoa }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxoa }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('BUY_QUANTITY')" sortable field="BUY_QUANTITY" header="Buy Quantity":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.BUY_QUANTITY }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minbq" :max="maxbq"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minbq }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxbq }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('BUY_RATE')" sortable field="BUY_RATE" header="Buy Rate":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.BUY_RATE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minbr" :max="maxbr"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minbr }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxbr }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('BUY_AMOUNT')" sortable field="BUY_AMOUNT" header="Buy Amount":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.BUY_AMOUNT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minba" :max="maxba"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minba }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxba }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('SALE_QUANTITY')" sortable field="SALE_QUANTITY" header="Sale Quantity":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.SALE_QUANTITY }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minsa" :max="maxsa"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minsa }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxsa }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('SALE_RATE')" sortable field="SALE_RATE" header="Sale Rate":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.SALE_RATE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minsr" :max="maxsr"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minsr }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxsr }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('SALE_AMOUNT')" sortable field="SALE_AMOUNT" header="Sale Amount":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.SALE_AMOUNT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minsat" :max="maxsat"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minsat }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxsat }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('NET_QUANTITY')" sortable field="NET_QUANTITY" header="Net Quantity":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.NET_QUANTITY }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minnq" :max="maxnq"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minnq }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxnq }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('NET_RATE')" sortable field="NET_RATE" header="Net Rate":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.NET_RATE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minnr" :max="maxnr"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minnr }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxnr }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('NET_AMOUNT')" sortable field="NET_AMOUNT" header="Net Amount":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.NET_AMOUNT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minna" :max="maxna"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minna }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxna }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('CLOSING_PRICE')" sortable field="CLOSING_PRICE" header="Closing Price":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.CLOSING_PRICE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="mincp" :max="maxcp"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : mincp }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxcp }}</span>
            </div>
            </template>
        </Column>

        <Column v-if="visibleColumns.includes('NOT_PROFIT')" sortable field="NOT_PROFIT" header="Not Profit":showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.NOT_PROFIT }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minnp" :max="maxnp"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minnp }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxnp }}</span>
            </div>
            </template>
        </Column>
    

     
     
   

    </DataTable>

   
    <Drawer v-model:visible="visibleRight" header="Stock Details" position="right" class="!w-90 md:!w-80 lg:!w-[80rem] wd">
            <div v-if="selectedRow">
                <div class="w-full flex gap-2">
                    <div class="w-full p-1 bg-slate-50 rounded-lg" >
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">clientCode</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.clientCode}}</span></div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SCRIP_SYMBOL</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.SCRIP_SYMBOL }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">open_QUANTITY</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.open_QUANTITY }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">Open_AMOUNT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.Open_AMOUNT }}</div>
                        </div>

                       
                    </div>

                    <div class="w-full p-2 rounded-lg bg-slate-50">
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">BUY_QUANTITY</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.BUY_QUANTITY }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">BUY_RATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.BUY_RATE }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">BUY_AMOUNT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.BUY_AMOUNT }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">SALE_QUANTITY</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.SALE_QUANTITY }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">NOT_PROFIT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.NOT_PROFIT }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">entryDateTime</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.entryDateTime }}</div>
                        </div>
                    </div>
                    <div class="w-full p-1 rounded-lg bg-slate-50" >
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SALE_RATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.SALE_RATE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SALE_AMOUNT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.SALE_AMOUNT }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">NET_QUANTITY</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.NET_QUANTITY }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">NET_RATE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.NET_RATE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">NET_AMOUNT</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.NET_AMOUNT }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CLOSING_PRICE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.CLOSING_PRICE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">CLOSING_AMT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.CLOSING_AMT }}</div>
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

const toast = useToast();

const minoq = ref(0);
const maxoq = ref(0);

const minca = ref(0);
const maxca = ref(0);
const minoa = ref(0);
const maxoa = ref(0);
const minbq = ref(0);
const maxbq = ref(0);
const minbr = ref(0);
const maxbr = ref(0);
const minba = ref(0);
const maxba = ref(0);
const minsa = ref(0);
const maxsa = ref(0);
const minsr= ref(0);
const maxsr= ref(0);
const minsat = ref(0);
const maxsat = ref(0);
const minnq = ref(0);
const maxnq = ref(0);
const minnr = ref(0);
const maxnr = ref(0);
const minna = ref(0);
const maxna = ref(0);
const mincp = ref(0);
const maxcp = ref(0);
const minnp = ref(0);
const maxnp = ref(0);


const props = defineProps({
  clientcode: String,
  token: String,
  session: String,
  auth: String

});



const storedData = ref([]);
const ledgerResponseData = ref(null);
const filters = ref();

const isVisiblecustom = ref(false);



const getLedgerDate = async () => {
  const formdata=new FormData()
  formdata.append('clientCode',props.clientcode)
  const ledgerApi = 'https://backoffice.w3webtechnologies.co.in/bo-api/api-crsauda-data.php/';
  try {
    const response = await fetch(ledgerApi, { 
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
      getdatall()
    } else {
      toast.add({ severity: 'error', summary: 'Error Message', detail: 'Data does not exist', life: 3000 });
    }
  } catch (error) {
    console.log(error.message)
   // toast.add({ severity: 'error', summary: 'Error Message', detail: error.message, life: 3000 });
  } finally {
    loading.value = false;
    content.value=true
  }
};

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    SCRIP_SYMBOL: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    open_QUANTITY: { value: [minoq.value, maxoq.value], matchMode: FilterMatchMode.BETWEEN },

    CLOSING_AMT: { value: [minca.value, maxca.value], matchMode: FilterMatchMode.BETWEEN },
    Open_AMOUNT: { value: [minoa.value, maxoa.value], matchMode: FilterMatchMode.BETWEEN },
    BUY_QUANTITY: { value: [minbq.value, maxbq.value], matchMode: FilterMatchMode.BETWEEN },
    BUY_RATE: { value: [minbr.value, maxbr.value], matchMode: FilterMatchMode.BETWEEN },
    BUY_AMOUNT: { value: [minba.value, maxba.value], matchMode: FilterMatchMode.BETWEEN },
    SALE_QUANTITY: { value: [minsa.value, maxsa.value], matchMode: FilterMatchMode.BETWEEN },
    SALE_RATE: { value: [minsr.value, maxsr.value], matchMode: FilterMatchMode.BETWEEN },
    SALE_AMOUNT: { value: [minsat.value, maxsat.value], matchMode: FilterMatchMode.BETWEEN },
    NET_QUANTITY: { value: [minnq.value, maxnq.value], matchMode: FilterMatchMode.BETWEEN },
    NET_RATE: { value: [minnr.value, maxnr.value], matchMode: FilterMatchMode.BETWEEN },
    NET_AMOUNT: { value: [minna.value, maxna.value], matchMode: FilterMatchMode.BETWEEN },
    CLOSING_PRICE: { value: [mincp.value, maxcp.value], matchMode: FilterMatchMode.BETWEEN },
    NOT_PROFIT: { value: [minnp.value, maxnp.value], matchMode: FilterMatchMode.BETWEEN },


  };
};

watch([minoq, maxoq], initFilters);
watch([minca, maxca], initFilters);
watch([minoa, maxoa], initFilters);
watch([minbq, maxbq], initFilters);
watch([minbr, maxbr], initFilters);
watch([minba, maxba], initFilters);
watch([minsa, maxsa], initFilters);
watch([minsr, maxsr], initFilters);
watch([minsat, maxsat], initFilters);
watch([minnq, maxnq], initFilters);
watch([minnr, maxnr], initFilters);
watch([minna, maxna], initFilters);
watch([mincp, maxcp], initFilters);
watch([minnp, maxnp], initFilters);

const getdatall = () => {
  storedData.value = ledgerResponseData.value.metaData.DATA
    .filter(item => item && item.length > 0) // Ensure item is valid and not empty
    .map(item => ({
      SCRIP_SYMBOL: item[1], open_QUANTITY:item[2],
      Open_AMOUNT:item[3],
      BUY_QUANTITY:item[4],
      BUY_RATE:item[5],
      BUY_AMOUNT:item[6],
      SALE_QUANTITY:item[7],
      SALE_RATE:item[8],
      SALE_AMOUNT:item[9],
      NET_QUANTITY:item[10],
      NET_RATE:item[11],
      NET_AMOUNT:item[12],
      CLOSING_PRICE:item[13],
      CLOSING_AMT:item[14],
      NOT_PROFIT:item[15],
      entryDateTime:item[16],
      clientCode:item[0]

       
    }));

    noofrows.value=storedData.value.length
      if (storedData.value.length > 0) {
            minoq.value = Math.min(...storedData.value.map(item => item.open_QUANTITY));
            maxoq.value = Math.max(...storedData.value.map(item => item.open_QUANTITY));

            minca.value = Math.min(...storedData.value.map(item => item.CLOSING_AMT));
            maxca.value = Math.max(...storedData.value.map(item => item.CLOSING_AMT));

            minoa.value = Math.min(...storedData.value.map(item => item.Open_AMOUNT));
            maxoa.value = Math.max(...storedData.value.map(item => item.Open_AMOUNT));

            minbq.value = Math.min(...storedData.value.map(item => item.BUY_QUANTITY));
            maxbq.value = Math.max(...storedData.value.map(item => item.BUY_QUANTITY));

            minbr.value = Math.min(...storedData.value.map(item => item.BUY_RATE));
            maxbr.value = Math.max(...storedData.value.map(item => item.BUY_RATE));

            minba.value = Math.min(...storedData.value.map(item => item.BUY_AMOUNT));
            maxba.value = Math.max(...storedData.value.map(item => item.BUY_AMOUNT));

            minsa.value = Math.min(...storedData.value.map(item => item.SALE_QUANTITY));
            maxsa.value = Math.max(...storedData.value.map(item => item.SALE_QUANTITY));

            minsr.value = Math.min(...storedData.value.map(item => item.SALE_RATE));
            maxsr.value = Math.max(...storedData.value.map(item => item.SALE_RATE));

            minsat.value = Math.min(...storedData.value.map(item => item.SALE_AMOUNT));
            maxsat.value = Math.max(...storedData.value.map(item => item.SALE_AMOUNT));

            minnq.value = Math.min(...storedData.value.map(item => item.NET_QUANTITY));
            maxnq.value = Math.max(...storedData.value.map(item => item.NET_QUANTITY));

            minnr.value = Math.min(...storedData.value.map(item => item.NET_RATE));
            maxnr.value = Math.max(...storedData.value.map(item => item.NET_RATE));

            minna.value = Math.min(...storedData.value.map(item => item.NET_AMOUNT));
            maxna.value = Math.max(...storedData.value.map(item => item.NET_AMOUNT));

            mincp.value = Math.min(...storedData.value.map(item => item.CLOSING_PRICE));
            maxcp.value = Math.max(...storedData.value.map(item => item.CLOSING_PRICE));

            minnp.value = Math.min(...storedData.value.map(item => item.NOT_PROFIT));
            maxnp.value = Math.max(...storedData.value.map(item => item.NOT_PROFIT));

        

           
        }
   
};

const columns = ref([
{ field: 'SCRIP_SYMBOL', header: 'Script Symbol' },
{ field: 'open_QUANTITY', header: 'Open Quantity' },
{ field: 'Open_AMOUNT', header: 'Open Amount' },
{ field: 'BUY_QUANTITY', header: 'Buy Quantity' },
{ field: 'BUY_RATE', header: 'Buy Rate' },
{ field: 'BUY_AMOUNT', header: 'Buy Amount' },
{ field: 'SALE_QUANTITY', header: 'Sale Quantity' },
{ field: 'SALE_RATE', header: 'Sale Rate' },
{ field: 'SALE_AMOUNT', header: 'Sale Amount' },
{ field: 'NET_QUANTITY', header: 'Net Quantity' },
{ field: 'NET_RATE', header: 'Net Rate' },
{ field: 'NET_AMOUNT', header: 'Net AMOUNT' },
{ field: 'CLOSING_PRICE', header: 'Closing Price' },
{ field: 'CLOSING_AMT', header: 'Closing Amt' },
{ field: 'NOT_PROFIT', header: 'Not Profit' },





]);

const selectedColumns = ref(columns.value.filter(col => !['NOT_PROFIT','Open_AMOUNT','CLOSING_AMT','SALE_RATE','CLOSING_PRICE', 'SALE_QUANTITY', 'NET_AMOUNT', 'NET_AMOUNT','NET_RATE','NET_QUANTITY','SALE_AMOUNT' ].includes(col.field)));
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