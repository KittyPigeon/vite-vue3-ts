<template>
	<div>登录</div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { getBarList } from "@/data-source/bar";
axios.get("/api/test").then(res => {
	console.log(res);
});
axios.post("/api/text").then(res => {
	console.log(res);
});
getBarList().then(data => {
	console.log(data);
});
</script>
<style lang="scss" scoped></style>
