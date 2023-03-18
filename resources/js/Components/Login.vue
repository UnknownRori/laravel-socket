<template>
    <main class='flex w-screen h-screen justify-center'>
        <div class="flex self-center p-4 rounded shadow-xl bg-gray-50 w-4/12">
            <form @submit.prevent='submit' class='flex flex-col gap-4 w-full'>
                <h2 class='text-center text-4xl'>Login</h2>
                <div class='flex flex-col gap-1'>
                    <label for="email">Email</label>
                    <input type="text" name='email' id='name' v-model='form.email' placeholder='Enter your email'
                        class='w-full border border-gray-300 rounded p-1'>
                </div>
                <div class='flex flex-col gap-1'>
                    <label for="password">Password</label>
                    <input type="Password" name='password' id='password' v-model='form.password'
                        placeholder='Enter your password' class='w-full border border-gray-300 rounded p-1'>
                </div>
                <div>
                    <router-link to='/register' class='underline italic text-blue-500 text-sm'>Create new
                        account</router-link>
                </div>
                <input type="submit" value="Login"
                    class='bg-blue-500 border border-blue-400 rounded-md p-1 text-white cursor-pointer'>
            </form>
        </div>
    </main>
</template>

<script lang='ts' setup>

import { ref } from 'vue';

import router from '../bootstrap/router';
import useAuth from '../Store/useAuth';

const auth = useAuth();

const form = ref({
    email: '',
    password: '',
});

const submit = async (event: Event) => {
    const result = await auth.auth(form.value);
    if (result) {
        router.push({
            path: '/chat'
        });
    }
}

</script>

