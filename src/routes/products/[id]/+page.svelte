<script lang="ts">
import { goto } from '$app/navigation';
export let data;
</script>

<div class="flex justify-between items-center">
	<p class="px-2 py-3 text-5xl font-bold">Product - {data.selectedProduct?.name}</p>
	<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1" on:click={() => goto(`/add-edit-product?id=${data.selectedProduct.id}`)}>Edit Product</button>
</div>
