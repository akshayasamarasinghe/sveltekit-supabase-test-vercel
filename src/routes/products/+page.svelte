<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
</script>

<div class="flex justify-between items-center">
	<p class="px-2 py-3 text-5xl font-bold">Products</p>
	<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1" on:click={() => goto("/add-edit-product")}>Add Product</button>
</div>

<div class="grid grid-cols-4 gap-3 px-2">
	{#if (data?.products?.length > 0)}
		{#each data?.products as product}
			<div class="shadow-lg flex flex-col rounded-xl bg-[#E5FFE5] p-3">
				<img src="https://picsum.photos/200/300" class="h-72" alt="" width="100%" />
				<div class="flex flex-col text-xl my-2 px-2">
					<p>{product.name}</p>
					<p class="text-sm">{product.description}</p>
				</div>
				<div class="flex flex-row justify-between px-2">
					<p class="text-md font-semibold">Price</p>
					<p class="text-md">$ {product.price}</p>
				</div>
				<div class="flex gap-2 justify-between">
					<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1" on:click={() => goto(`/products/${product.id}`)}>View</button>
					<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1">Add to cart</button>
				</div>
			</div>
		{/each}
	{:else}
		<div>No data to show yet.</div>
		<!--		<div>{data.result}</div>-->
	{/if}
</div>
