<template>
    <main class='flex w-screen h-screen'>
        <router-view></router-view>
    </main>
</template>

<script lang='ts' setup>

import { Ref, ref } from 'vue';
import User from './types/User';
import Login from './Components/Login.vue';

type UserSession = Ref<User | undefined>;

const user: UserSession = ref();


</script>

