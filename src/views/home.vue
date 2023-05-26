<template>
    <div>
        <button v-for="item in routes" :key="item.path" @click="handleClick(item.path)">
            {{ item.name }}
        </button>
        <button @click="add()">添加路由</button>
        <button @click="cal">计算</button>
        <div class="rect">{{store.count}}</div>
        <button class="add" @click="add1">添加</button>
        <Button primary>点击</Button>
    </div>
</template>

<script lang="ts" setup>
    import { GetRoutes } from '../utils/request';
    import { useRouter } from 'vue-router';
    import { useStore } from '../store';
    import { computed } from '@vue/reactivity';
    import { onMounted } from 'vue';
    import lodash from 'lodash';
    import { Button } from 'ant-design-vue'
    const routes = computed(() => store.routes);
    const store = useStore();
    const router = useRouter();
    // 路由按钮点击事件
    const handleClick = (path: string) => {
        router.push({
            path,
        });
    };
    const cal = () => {
        console.log(lodash.chunk(['a', 'b', 'c', 'd'], 2))
    }
    const add1 = () => {
        store.increment();
    }
    const add = () => {

        GetRoutes().then((res: any) => {
            store.addRoutes(res.data.data, router);
        });
    }
</script>
<style lang="less" scoped>
    .rect {
        box-sizing: border-box;
        border-radius: 2px;
    }
</style>