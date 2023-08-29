<script setup>
// import ref
import { ref } from "vue";
// import components
import ItemCard from "@/components/ItemCard.vue";

const items = ref([
    { id: 1, title: "Mobile     UI Kit", description: 'Mobile UI Kit', image: "items-1.jpg" },
    { id: 2, title: "Online Doctor Consultation", description: 'Mobile UI Kit', image: "items-2.jpg" },
    { id: 3, title: "Bank Crypto", description: 'Mobile UI Kit', image: "items-3.jpg" },
    
])

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- cuting-main -->
            <ItemCard
            v-for="item in items" 
            :key="item.id" 
            :title="item.title" 
            :description="item.description" 
            :image="item.image"/>

            <!-- <CategoriesCard title="Mobile UI Kit" :count="731" image="categories-2.jpg"/>
            <CategoriesCard title="Fonts" :count="657" image="categories-2.jpg"/>
            <CategoriesCard title="Icon Sets" :count="83559" image="categories-3.jpg"/>
            <CategoriesCard title="Mobile UI Kit" :count="4500" image="categories-4.jpg"/> -->
            <!-- <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <a href="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder" class="block w-full h-auto" src="@/assets/img/categories-1.jpg" />
                        </div>
                    </a>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <a class="font-semibold text-black no-underline hover:underline" href="#">
                                Mobile UI Kit
                            </a>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            731 items
                        </span>
                    </header>
                </div>
            </div>

            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <a href="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder" class="block w-full h-auto" src="@/assets/img/categories-2.jpg" />
                        </div>
                    </a>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <a class="font-semibold text-black no-underline hover:underline" href="#">
                                Fonts
                            </a>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            657 items
                        </span>
                    </header>
                </div>
            </div>

            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <a href="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder" class="block w-full h-auto" src="@/assets/img/categories-3.jpg" />
                        </div>
                    </a>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <a class="font-semibold text-black no-underline hover:underline" href="#">
                                Icon Set
                            </a>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            83,559 items
                        </span>
                    </header>
                </div>
            </div>

            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <a href="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img alt="Placeholder" class="block w-full h-auto" src="@/assets/img/categories-4.jpg" />
                        </div>
                    </a>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <a class="font-semibold text-black no-underline hover:underline" href="#">
                                Website UI Kit
                            </a>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            4,500 items
                        </span>
                    </header>
                </div>
            </div> -->
        </div>
    </div>
</template>