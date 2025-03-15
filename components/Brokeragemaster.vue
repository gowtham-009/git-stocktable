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

      <Column v-if="visibleColumns.includes('FROM_PRICE')" sortable field="FROM_PRICE" header="From Price" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.FROM_PRICE }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minfpri" :max="maxfpri"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minfpri }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxfpri }}</span>
            </div>
            </template>
      </Column>

    

        <Column v-if="visibleColumns.includes('SCRIP_SYMBOL')" sortable field="SCRIP_SYMBOL" header="Script Symbol">
          <template #body="{ data }">
          <span >{{ data.SCRIP_SYMBOL }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by ClientCode" />
          </template>
        </Column>

     

        <Column v-if="visibleColumns.includes('ONESIDEPER')" sortable field="ONESIDEPER" header="One Sideper" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.ONESIDEPER }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minop" :max="maxop"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minop }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxop }}</span>
            </div>
            </template>
        </Column>
        <Column v-if="visibleColumns.includes('ONESIDEMIN')" sortable field="ONESIDEMIN" header="One Sidemin" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.ONESIDEMIN }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minom" :max="maxom"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minom }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxom }}</span>
            </div>
            </template>
        </Column>
     

        <Column v-if="visibleColumns.includes('OTHERSIDEPER')" sortable field="OTHERSIDEPER" header="Other Sideper" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.ONESIDEMIN }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minos" :max="maxos"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minos }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxos }}</span>
            </div>
            </template>
        </Column>

        <Column v-if="visibleColumns.includes('OTHERSIDEMIN')" sortable field="OTHERSIDEMIN" header="Other Sidemin" :showFilterOperator="false" :showFilterMatchModes="false">
          <template #body="{ data }">
            <span > {{ data.OTHERSIDEMIN }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="minsm" :max="maxsm"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : minsm }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxsm }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('DELIVERYPER')" sortable field="DELIVERYPER" header="Delivery Per" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
            <span > {{ data.DELIVERYPER }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="mindp" :max="maxdp"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : mindp }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxdp }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('DELIVERYMIN')" sortable field="DELIVERYMIN" header="Delivery Min" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
            <span > {{ data.DELIVERYMIN }}</span>
            </template>
            <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-4" :min="mindm" :max="maxdm"></Slider>
            <div class="flex items-center justify-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : mindm }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : maxdm }}</span>
            </div>
            </template>
      </Column>

      <Column v-if="visibleColumns.includes('COMPANY_CODE')" sortable field="COMPANY_CODE" header="Company Code" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
          <span >{{ data.COMPANY_CODE }}</span>
          </template>
          <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by ClientCode" />
          </template>
      </Column>

      <Column v-if="visibleColumns.includes('LASTCHANGEAT')" sortable field="LASTCHANGEAT" header="Last Change Eat" :showFilterOperator="false" :showFilterMatchModes="false">
        <template #body="{ data }">
          <span >{{ data.LASTCHANGEAT }}</span>
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
                            <div class="w-full p-1"><span class="text-sm text-gray-500">{{ selectedRow.clientCode}}</span></div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">FROM_PRICE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.FROM_PRICE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TO_PRICE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.TO_PRICE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">SCRIP_SYMBOL</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.SCRIP_SYMBOL }}</div>
                        </div>

                        
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">LASTCHANGEAT</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.LASTCHANGEAT }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">DELPER</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.DELPER }}</div>
                        </div>

                       
                    </div>

                    <div class="w-full p-2 rounded-lg bg-slate-50">
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">TURNOVER_TYPE</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.TURNOVER_TYPE }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ONESIDEPER</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.ONESIDEPER }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">ONESIDEMIN</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.ONESIDEMIN }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">OTHERSIDEPER</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.OTHERSIDEPER }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">DELmin</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.DELmin }}</div>
                        </div>
                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">DELPERLOT</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.DELPERLOT }}</div>
                        </div>
                    </div>
                    <div class="w-full p-1 rounded-lg bg-slate-50" >
                      <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">OTHERSIDEMIN</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.OTHERSIDEMIN }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">DELIVERYPER</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.DELIVERYPER }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">DELIVERYMIN</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.DELIVERYMIN }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">EntryDateTime</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.EntryDateTime }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1" ><span class="text-sm text-gray-500">IBT</span></div>
                            <div class="w-full p-1" ><span class="text-sm text-gray-500"></span>{{ selectedRow.IBT }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">Prd_Id</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.Prd_Id }}</div>
                        </div>

                        <div class="w-full flex">
                            <div class="w-full p-1"><span class="text-sm text-gray-500">entryDateTime</span></div>
                            <div class="w-full p-1"><span class="text-sm text-gray-500"></span>{{ selectedRow.entryDateTime }}</div>
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

const minfpri = ref(0);
const maxfpri = ref(0);


const minop = ref(0);
const maxop = ref(0);
const minom = ref(0);
const maxom = ref(0);
const minos = ref(0);
const maxos = ref(0);
const minsm = ref(0);
const maxsm = ref(0);
const mindp = ref(0);
const maxdp = ref(0);
const mindm = ref(0);
const maxdm = ref(0);

const getLedgerDate = async () => {
  const ledgerApi = 'https://backoffice.w3webtechnologies.co.in/bo-api/api-brokerage-data.php';
  const formdata=new FormData()
  formdata.append('clientCode',props.clientcode)

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
      getdatall()
    } else {
      toast.add({ severity: 'error', summary: 'Error Message', detail: 'Data does not exist', life: 3000 });
    }
  } catch (error) {
    console.log(error.message)
  } finally {
    loading.value = false;
    content.value=true
  }
};

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    FROM_PRICE: { value: [minfpri.value, maxfpri.value], matchMode: FilterMatchMode.BETWEEN },
    SCRIP_SYMBOL: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    COMPANY_CODE: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    LASTCHANGEAT: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

    ONESIDEPER: { value: [minop.value, maxop.value], matchMode: FilterMatchMode.BETWEEN },
    ONESIDEMIN: { value: [minom.value, maxom.value], matchMode: FilterMatchMode.BETWEEN },
    OTHERSIDEPER: { value: [minos.value, maxos.value], matchMode: FilterMatchMode.BETWEEN },
    OTHERSIDEMIN: { value: [minsm.value, maxsm.value], matchMode: FilterMatchMode.BETWEEN },
    DELIVERYPER: { value: [mindp.value, maxdp.value], matchMode: FilterMatchMode.BETWEEN },
    DELIVERYMIN: { value: [mindm.value, maxdm.value], matchMode: FilterMatchMode.BETWEEN },



  };
};
watch([minfpri, maxfpri], initFilters);

watch([minop, maxop], initFilters);
watch([minom, maxom], initFilters);
watch([minos, maxos], initFilters);
watch([minsm, maxsm], initFilters);
watch([mindp, maxdp], initFilters);
watch([mindm, maxdm], initFilters);

const getdatall = () => {
  storedData.value = ledgerResponseData.value.metaData.DATA
    .filter(item => item && item.length > 0) // Ensure item is valid and not empty
    .map(item => ({
      FROM_PRICE: item[1] ,TO_PRICE:item[2],
       SCRIP_SYMBOL:item[3], TURNOVER_TYPE:item[4] ,
        ONESIDEPER:item[5], ONESIDEMIN:item[6],

        // view panel
        clientCode:item[0],
        OTHERSIDEPER:item[7],
        OTHERSIDEMIN:item[8],
        DELIVERYPER:item[9],
        DELIVERYMIN:item[10],
        COMPANY_CODE:item[11],
        LASTCHANGEAT:item[12],
        DELPER:item[13],
        DELmin:item[14],
        DELPERLOT:item[15],
        IBT:item[16],
        Prd_Id:item[17],
        entryDateTime:item[18],
    }));

    noofrows.value=storedData.value.length
    if (storedData.value.length > 0) {
            minfpri.value = Math.min(...storedData.value.map(item => item.FROM_PRICE));
            maxfpri.value = Math.max(...storedData.value.map(item => item.FROM_PRICE));

         
           
            minop.value = Math.min(...storedData.value.map(item => item.ONESIDEPER));
            maxop.value = Math.max(...storedData.value.map(item => item.ONESIDEPER));
           
            minom.value = Math.min(...storedData.value.map(item => item.ONESIDEMIN));
            maxom.value = Math.max(...storedData.value.map(item => item.ONESIDEMIN));
           
            minos.value = Math.min(...storedData.value.map(item => item.OTHERSIDEPER));
            maxos.value = Math.max(...storedData.value.map(item => item.OTHERSIDEPER));
           
            minsm.value = Math.min(...storedData.value.map(item => item.OTHERSIDEMIN));
            maxsm.value = Math.max(...storedData.value.map(item => item.OTHERSIDEMIN));
           
            mindp.value = Math.min(...storedData.value.map(item => item.DELIVERYPER));
            maxdp.value = Math.max(...storedData.value.map(item => item.DELIVERYPER));
           
            mindm.value = Math.min(...storedData.value.map(item => item.DELIVERYMIN));
            maxdm.value = Math.max(...storedData.value.map(item => item.DELIVERYMIN));
           
         
        }
};






const columns = ref([
{ field: 'FROM_PRICE', header: 'FROM_PRICE' },
{ field: 'SCRIP_SYMBOL', header: 'SCRIP_SYMBOL' },

{ field: 'ONESIDEPER', header: 'ONESIDEPER' },
{ field: 'ONESIDEMIN', header: 'ONESIDEMIN' },
{ field: 'OTHERSIDEPER', header: 'OTHERSIDEPER' },
{ field: 'OTHERSIDEMIN', header: 'OTHERSIDEMIN' },
{ field: 'DELIVERYPER', header: 'DELIVERYPER' },
{ field: 'DELIVERYMIN', header: 'DELIVERYMIN' },

{ field: 'COMPANY_CODE', header: 'COMPANY_CODE' },
{ field: 'LASTCHANGEAT', header: 'LASTCHANGEAT' },



]);

const selectedColumns = ref(columns.value.filter(col => !['FROM_PRICE', 'ONESIDEPER', 'ONESIDEMIN','DELIVERYMIN', 'LASTCHANGEAT'].includes(col.field)));
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