<script setup lang="ts">
import { SunIcon, MoonIcon } from '@radix-icons/vue';

const colorMode = useColorMode();
</script>

<template>
	<Button variant="ghost" class="px-1 h-10 w-10"
		@click="colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'">
		<MoonIcon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
		<SunIcon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		<span class="sr-only">Toggle theme</span>
	</Button>
</template>