<script setup>
import { RouterLink } from "vue-router";
const route = useRoute();

const links = [{
	label: "Dashboard",
	to: "/"
},
{
	label: "Income",
	to: "/income"
},
{
	label: "Outcome",
	to: "/outcome"
},
{
	label: "Investments",
	to: "/investments"
}
];
</script>

<template>
	<nav class="flex item-center space-x-4 lg:space-x-4">
		<RouterLink class='text-sm font-medium transition-colors hover:text-primary'
			:class="route.fullPath !== link.to && 'text-muted-foreground'" v-for='link in links' :key='link.label'
			:to='link.to'>
			{{ link.label }}
		</RouterLink>
	</nav>
</template>

<style></style>