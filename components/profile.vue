<template>
    <div>

        <div class="w-full mx-auto bg-white shadow-sm rounded-lg p-6 mt-2" v-if="loading">
        <div class="flex space-x-8 border-b pb-2">
            <div class="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
            <div class="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
            <div class="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
            <div class="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div class="mt-4">
            <div class="h-4 w-32 bg-gray-300 rounded animate-pulse mb-2"></div>

            <div class="grid grid-cols-2 gap-6">
                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                    <div class="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
                    <div class="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div class="flex items-center space-x-2">
                    <div class="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>

    <div >
        <div class="flex items-center sm:hidden rounded-lg p-1" style="border: 1px solid gainsboro;">
            <select v-model="selectedTab" aria-label="Select a tab"
                class="col-start-1 row-start-1 w-full outline-none appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900   ">
                <option value="myaccount"> My Account</option>
                <option value="company">Company</option>
                <option value="teammember">Team Members</option>
                <option value="billing">Billing</option>

            </select>
            <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd" />
            </svg>
        </div>

        <!-- Desktop Tabs -->
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a href="#" @click.prevent="changeTab('myaccount')" class="flex gap-2 text-l" :class="[
                        selectedTab === 'myaccount'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                    ]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd" />
                        </svg>


                        My Account
                    </a>

                    <a href="#" @click.prevent="changeTab('company')" class="flex gap-2 text-l" :class="[
                        selectedTab === 'company'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                    ]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                        </svg>
                        Company
                    </a>

                    <a href="#" @click.prevent="changeTab('teammember')" class="flex gap-2 text-l" :class="[
                        selectedTab === 'teammember'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                    ]">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                        </svg>
                        Team Members
                    </a>

                    <a href="#" @click.prevent="changeTab('billing')" class="flex gap-2 text-l" :class="[
                        selectedTab === 'billing'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                    ]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
                        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                        </svg>
                        Billing
                    </a>
                </nav>

            </div>
        </div>

        <div class="mt-2 p-1 " v-if="selectedTab === 'myaccount'">
             
        </div>
        <div class="mt-2 p-1 " v-if="selectedTab === 'company'">
            <h2 class="text-sm ">Company</h2>
        </div>
        <div class="mt-2 p-1 " v-if="selectedTab === 'teammember'">
            <h2 class="text-sm ">Team Members</h2>
        </div>
        <div class="mt-2 p-1 " v-if="selectedTab === 'billing'">
            <h2 class="text-sm ">Billing</h2>
        </div>




    </div>

           </div>




  

     
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({ customValue: String });

const clientname=ref('')
const mobileno=ref('')
const client_email=ref('')
const client_pan=ref('')
const companycode=ref('')
const micrcode=ref('')
const bank_accno=ref('')
const bank_name=ref('')

const selectedTab = ref('myaccount');
const changeTab = (tab) => {
    selectedTab.value = tab;
};

const ledgerResponseData=ref([])

const getLedgerDate = async () => {
  const ledgerApi = `https://backoffice.w3webtechnologies.co.in/bo-api/api-client-info-data.php?clientCode=${props.customValue}`;
  try {
    const response = await fetch(ledgerApi, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Your request failed with status ${response.status}`);
    }
    const data = await response.json();
    if (data.status === 'ok') {
      ledgerResponseData.value = data;
      personaldatafun()

    } else {
      toast.add({ severity: 'error', summary: 'Error Message', detail: 'Data does not exist', life: 3000 });
    }
  } catch (error) {
    console.log(error.message)
    //toast.add({ severity: 'error', summary: 'Error Message', detail: error.message, life: 3000 });
  } finally {
   
  }
};

getLedgerDate()

const personaldatafun=()=>{
    console.log(ledgerResponseData.value)
}

</script>

<style scoped>
.text-m{
    font-size: 14px !important;
}
.text-l{
    font-size: 16px !important;
}
</style>