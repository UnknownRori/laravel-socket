<template>
    Hello, {{ name }}
</template>

<script lang='ts' setup>

import { ref } from 'vue';

const name = ref("world!");

</script>

