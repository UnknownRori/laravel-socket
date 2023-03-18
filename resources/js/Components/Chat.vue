<template>
    <!-- Todo : Properly style this shit -->
    <div>
        {{ auth.getUserName }}
        <form @submit.prevent='submit'>
            <input type="text" name="content" id="content" v-model='form.content'>
            <input type="submit" value="Submit">
        </form>
        <h2>Online user</h2>
        <ul>
            <li v-for='user in usersList'>
                {{ user.name }}
            </li>
        </ul>
        <br>
        <h2>Message</h2>
        <ul>
            <li v-for='message in messageList'>
                {{ message.content }} | {{ message.user.name }}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
// Todo : Clean up this shit
import axios, { AxiosResponse } from 'axios';
import { Ref, ref, onMounted } from 'vue';

import { echo } from '../bootstrap/echo';
import useAuth from '../Store/useAuth';
import Message from '../types/Message';
import User from '../types/User';

const auth = useAuth();

const form = ref({
    content: '',
});

const messageList: Ref<Array<Message>> = ref([]);
const usersList: Ref<Array<User>> = ref([]);

type SendChatListenEvent = {
    user: User,
    message: Message,
};

async function submit() {
    if (auth.user == null || auth.user == undefined) {
        return
    }

    const result: AxiosResponse<Message> = await axios.post('/api/message', form.value, { headers: { Authorization: `Bearer ${auth.token}` } });
    messageList.value.push(result.data);
}

onMounted(async () => {
    let result: AxiosResponse<Array<Message>> = await axios.get('/api/message', {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    });
    console.log(result);
    for (let i of result.data) {
        messageList.value.push(i);
    }

    echo.join('chat')
        .here((users: Array<User>) => {
            usersList.value = users;
        })
        .joining((user: User) => {
            console.log(user);
            usersList.value.push(user);
        })
        .leaving((user: User) => {
            console.log(user);
            console.log(auth.user);
            usersList.value = usersList.value.filter((u: User) => u.id != user.id);
        })
        .listen('.send-chat', (event: SendChatListenEvent) => {
            messageList.value.push({
                id: event.message.id,
                content: event.message.content,
                user: event.user,
            })
        });
})
</script>
