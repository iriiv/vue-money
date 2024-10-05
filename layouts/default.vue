<script setup lang="ts">

</script>

<template>
	<div class='bg-zinc-950 dark:bg-white'>
		<header >
			<NavigationMenu>
				<NavigationMenuList>
						<NavigationMenuLink href="/docs">
							Documentation
						</NavigationMenuLink>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
		<main>
			<slot/>
		</main>
	</div>

</template>