<script setup>
import {ModalsContainer, useModal} from "vue-final-modal";
import Modal from "./Modal.vue";

const { open, close } = useModal({
    component: Modal,
    attrs: {
        title: 'Hello World!',
    },
    slots: {
        default: '<p>The content of the modal</p>',
    },
});

const items = [];
for(let i = 0; i<100;i++ ){
    items.push(i);
}
</script>

<template>
    <div>
        <tabs>
            <tab name="First tab">
                <div v-for="item in items" @click="open">Open</div>
            </tab>
            <tab name="Second tab">
                Second tab content
            </tab>
        </tabs>
    </div>
    <ModalsContainer />
</template>

<style>
</style>