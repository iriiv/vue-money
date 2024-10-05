<script setup lang="ts">
import { ref } from 'vue';
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue';

import { cn } from '@/lib/utils';

const frameworks = [
	{ value: 'Ilgizar Khamidulin', label: 'Ilgizar Khamidulin' },
	{ value: 'Aygul Gafurova', label: 'Aygul Gafurova' },
];

const open = ref(false);
const value = ref('');
</script>

<template>
	<Popover v-model:open="open">
		<PopoverTrigger as-child>
			<Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">
				<Avatar v-if='value' class="mr-2 h-5 w-5">
					<AvatarImage :src="`https://avatar.vercel.sh/${value}.png`" alt="avatar" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				{{ value
					? frameworks.find((framework) => framework.value === value)?.label
					: "Select user..." }}
				<CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</PopoverTrigger>
		<PopoverContent class="w-[200px] p-0">
			<Command>
				<CommandInput class="h-9" placeholder="Search for users..." />
				<CommandEmpty>No user found.</CommandEmpty>
				<CommandList>
					<CommandGroup>
						<CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value" @select="(ev) => {
							if (typeof ev.detail.value === 'string') {
								value = ev.detail.value;
							}
							open = false;
						}">
							<Avatar class="mr-2 h-5 w-5">
								<AvatarImage :src="`https://avatar.vercel.sh/${framework.value}.png`" alt="avatar" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							{{ framework.label }}
							<CheckIcon :class="cn(
								'ml-auto h-4 w-4',
								value === framework.value ? 'opacity-100' : 'opacity-0',
							)" />
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</template>