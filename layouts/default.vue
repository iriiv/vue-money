<script setup lang="ts">
</script>

<template>
	<header class="flex items-center gap-5 border-b py-2 px-4">
		<UserSwitcher />
		<MainNav />
		<ThemeSwitcher class='ml-auto' />
	</header>
	<main class="py-6 px-10 max-h-full">
		<slot />
	</main>
</template>