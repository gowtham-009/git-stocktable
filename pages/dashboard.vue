<template>
  <div v-if="isAuthenticated">
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div class="fixed inset-0 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full" enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
              leave-to="-translate-x-full">
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                  enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                  <div class="flex h-16 shrink-0 items-center">
                    <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
                      alt="Your Company" />
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li v-for="item in navigation" :key="item.name">
                            <a href="#" @click.prevent="setActive(item.name)"
                              :class="[activeComponent === item.name ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold']">
                              <component :is="item.icon"
                                :class="['w-6 h-6 shrink-0', activeComponent === item.name ? 'text-white' : 'text-indigo-200 group-hover:text-white']"
                                aria-hidden="true" />
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="mt-auto">
                        <a href="#"
                          class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white">
                          <Cog6ToothIcon class="w-6 h-6 shrink-0 text-indigo-200 group-hover:text-white"
                            aria-hidden="true" />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white"
              alt="Your Company" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li v-for="item in navigation" :key="item.name">
                    <a href="#" @click.prevent="setActive(item.name)"
                      :class="[activeComponent === item.name ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold']">
                      <component :is="item.icon"
                        :class="['w-6 h-6 shrink-0', activeComponent === item.name ? 'text-white' : 'text-indigo-200 group-hover:text-white']"
                        aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </li>

              <li class="mt-auto">
                <a href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white">
                  <Cog6ToothIcon class="w-6 h-6 shrink-0 text-indigo-200 group-hover:text-white" aria-hidden="true" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="lg:pl-72">
        <div
          class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="w-6 h-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form class="grid flex-1 grid-cols-1" action="#" method="GET">
              <input type="search" name="search" aria-label="Search"
                class="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
                placeholder="Search" />
              <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 w-6 h-6 self-center text-gray-400"
                aria-hidden="true" />
            </form>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">View notifications</span>
                <BellIcon class="w-6 h-6" aria-hidden="true" />
              </button>

              <!-- Separator -->
              <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

              <!-- Profile dropdown -->
              <Menu as="div" class="relative">
                <MenuButton class="-m-1.5 flex items-center p-1.5">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-10 h-10 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                  <span class="hidden lg:flex lg:items-center">
                    <span class="ml-4 text-sm/6 font-semibold text-gray-900" aria-hidden="true">{{ clientcode }}</span>
                    <ChevronDownIcon class="ml-2 w-10 h-10 text-gray-400" aria-hidden="true" />
                  </span>
                </MenuButton>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a @click="profiledashboard(item)"
                      :class="[active ? 'bg-gray-50 outline-none cursor-pointer' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">{{
                        item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <main class="py-2">

          <div class="px-2">

            <div v-if="activeComponent === 'Ledger'">
              <ledger :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>
            <div v-if="activeComponent === 'FA-Summary'">
              <fasummary :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>
            <div v-if="activeComponent === 'Trades'">
              <trades :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>

            <div v-if="activeComponent === 'Brokerage Master'">
              <Brokeragemaster :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>

            <div v-if="activeComponent === 'CR Sauda'">
              <CRSauda :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>
            <div v-if="activeComponent === 'Holding'">
              <Holding :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>
            <div class="w-full" v-if="activeComponent === 'Global Brokerage'">
              <Global_Brokerage :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>

            <div class="w-full" v-if="activeComponent === 'Payin'">
             <Payin/>
            </div>
            <div class="w-full" v-if="activeComponent === 'Payout'">
             <Payout/>
            </div>
            <div class="w-full" v-if="profilepanel">
              <profile :clientcode="clientcode" :token="token" :session="session" :auth="auth" />
            </div>
           

          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

import ledger from '~/components/leadger.vue'
import fasummary from '~/components/fasummary.vue'
import profile from '~/components/profile.vue'
import trades from '~/components/trades.vue'
import Brokeragemaster from '~/components/Brokeragemaster.vue'
import CRSauda from '~/components/CRSauda.vue'
import Holding from '~/components/Holding.vue'
import Global_Brokerage from '~/components/Global_Brokerage.vue'

import Payin from '~/components/payin.vue'
import Payout from '~/components/payout.vue'
import { useRouter } from "vue-router";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
const clientcode = ref('');
const token = ref('');
const session = ref('');
const auth = ref('');





const isAuthenticated = ref(false);
const router = useRouter();



onBeforeMount(() => {
  const tokentval = localStorage.getItem('token');
  const sessionval = localStorage.getItem('sessionkey')
  const clinetcodeval = localStorage.getItem('clientcode')

  const authval='F2CB3616F1EC269F0BF328CB77FEE4EFCDF5450D7BD21A94721C2F4E49E88F83A4FCE196070903C1BDCAA25F08F037538567D785FC56D139C09A6EC7927D5EFE'

 clientcode.value=clinetcodeval
token.value=tokentval
session.value=sessionval
auth.value=authval

  if (!tokentval || !sessionval || !clinetcodeval) {
    router.replace('/');
  } else {
    isAuthenticated.value = true;

    setInterval(() => {
sessioncheckup()
}, 300000);
  }
});
const profilepanel = ref(false)
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, },
  { name: 'Ledger', href: '#', icon: UsersIcon, },
  { name: 'FA-Summary', href: '#', icon: UsersIcon, },
  { name: 'Trades', href: '#', icon: FolderIcon, },
  { name: 'Brokerage Master', href: '#', icon: CalendarIcon, },
  { name: 'CR Sauda', href: '#', icon: DocumentDuplicateIcon, },
  { name: 'Holding', href: '#', icon: ChartPieIcon, },
  { name: 'Global Brokerage', href: '#', icon: ChartPieIcon, },
  { name: 'Payin', href: '#', icon: ChartPieIcon, },
  { name: 'Payout', href: '#', icon: ChartPieIcon, },
]


const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)


const activeComponent = ref('Ledger')
const setActive = (component) => {
  activeComponent.value = component
  profilepanel.value = false
}


const profiledashboard = (item) => {
  if (item.name == 'Your profile') {
    activeComponent.value = false
    profilepanel.value = true
  }
  else if (item.name == 'Sign out') {
    const token = localStorage.removeItem('token');
    const sessionkey = localStorage.removeItem('sessionkey')
    const clientcode = localStorage.removeItem('clientcode')
    if (!token || !sessionkey || !clientcode) {
      router.replace('/');
    }

  }
}









const sessioncheckup = async () => {
 
const apiUrl = 'https://backoffice.w3webtechnologies.co.in/bo-api/api-session-data.php';
const authorization = 'F2CB3616F1EC269F0BF328CB77FEE4EFCDF5450D7BD21A94721C2F4E49E88F83A4FCE196070903C1BDCAA25F08F037538567D785FC56D139C09A6EC7927D5EFE';
const formData = new FormData();
formData.append('clientCode', localStorage.getItem('clientcode'));

try {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization':authorization,
      'X-Token':localStorage.getItem('token'),
      'X-Session': localStorage.getItem('sessionkey'),
      'X-Client':localStorage.getItem('clientcode')
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  if(data.status=='ok'){
  console.log('page-active')
  }
  else{
    const token = localStorage.removeItem('token');
  const sessionkey = localStorage.removeItem('sessionkey')
  const clientcode = localStorage.removeItem('clientcode')
  if (!token || !sessionkey || !clientcode) {
    router.replace('/');
  }
  }
  
} catch (error) {
  console.error( error);
}
};





</script>