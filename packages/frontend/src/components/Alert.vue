<script setup>
defineProps(['type']);
</script>

<template>
    <div :class="`alert alert--${type ?? 'error'}`">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 5px;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &--error {
        background-color: #f5c6cb50;
        border: 1px solid #dc3545;
        color: #dc3545;
    }
}
</style>
