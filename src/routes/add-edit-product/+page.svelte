<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { enhance } from '$app/forms';

	export let data;

	let { selectedProduct, title } = data;

	let name = '';
	let code = '';
	let description = '';
	let price = 0;

	if (selectedProduct) {
		name = selectedProduct?.name;
		code = selectedProduct?.code;
		description = selectedProduct?.description;
		price = selectedProduct?.price;
	}
</script>

<div class="flex justify-between items-center">
	<p class="px-2 py-3 text-5xl font-bold">{title} {selectedProduct ? ` - ${selectedProduct?.name}` : ""}</p>
</div>

<div class="flex">
	<form class="w-1/2 p-3 rounded-lg border-2" method="post"
				use:enhance={({ formData }) => {
					formData.set('name', name);
					formData.set('code', code);
					formData.set('description', description);
					formData.set('price', price);
					// return ({ result }) => {
					// 	if (result.type === 'success') {
					// 		invalidate('/');
					// 		alert('UPDATED!');
					// 	} else {
					// 		alert('ERROR!');
					// 	}
					// };
				}}>

		<p class="mb-1 mt-3">Name</p>
		<Input class="w-full border rounded-md px-2 py-1 mb-3" bind:value={name} type="text" />

		<p class="mb-1">Code</p>
		<Input class="w-full border rounded-md px-2 py-1 mb-3" bind:value={code} type="text" />

		<p class="mb-1">Description</p>
		<Input class="w-full border rounded-md px-2 py-1 mb-3" bind:value={description} type="text" />

		<p class="mb-1">Price</p>
		<Input class="w-full border rounded-md px-2 py-1 mb-3" type="number" bind:value={price} />

		<div class="flex justify-end mb-3">
			<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1">Save</button>
		</div>
	</form>
</div>
