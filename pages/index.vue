<script setup lang="ts">
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from "@radix-icons/vue";
import { BackpackIcon, BarChartIcon, CodeIcon, RocketIcon } from "@radix-icons/vue";


</script>
<template>
	<h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
	<section class="space-y-4 pt-6">
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">
						Total Revenue
					</CardTitle>
					<BarChartIcon class="ml-2 h-4 w-4 shrink-0" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-xs text-muted-foreground">
						+20.1% from last month
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">
						Cryptocurency
					</CardTitle>
					<CodeIcon class="ml-2 h-4 w-4 shrink-0" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">
						+180.1% from last month
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Income</CardTitle>
					<ArrowTopRightIcon class="ml-2 h-4 w-4 shrink-0" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs text-muted-foreground">
						+19% from last month
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">
						Outcome
					</CardTitle>
					<ArrowBottomLeftIcon class="ml-2 h-4 w-4 shrink-0" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs text-muted-foreground">
						+201 since last hour
					</p>
				</CardContent>
			</Card>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
			<Card class="col-span-4">
				<CardHeader>
					<CardTitle>Overview</CardTitle>
				</CardHeader>
				<CardContent class="pl-2">
					<Total />
				</CardContent>
			</Card>
			<Card class="col-span-4 md:col-span-4 lg:col-span-3">
				<CardHeader>
					<CardTitle>Recent Sales</CardTitle>
					<CardDescription>
						You made 265 sales this month.
					</CardDescription>
				</CardHeader>
				<CardContent>
					sales
				</CardContent>
			</Card>
		</div>
	</section>
</template>