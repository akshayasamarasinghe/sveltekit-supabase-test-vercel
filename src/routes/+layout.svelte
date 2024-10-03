<script>
	import '../app.css';
</script>

<div class="flex justify-between">
	<div class="w-4/12 nav-bar flex justify-center text-center" id="logo">
		<p>Vibes</p>
	</div>
	<nav class="flex nav-bar items-center w-8/12">
		<a class="nav-link px-10 py-6" href="/">Home</a>
		<a class="nav-link px-10 py-6" href="/products">Products</a>
		<a class="nav-link px-10 py-6" href="/about">About</a>
		<a class="nav-link px-10 py-6" href="/settings">Settings</a>
	</nav>
</div>

<section class="container mx-auto">
	<slot></slot>
</section>

<style>
    .nav-link {
        color: black;
        font-size: 1rem;
        font-weight: 600;
        background-color: rgb(229, 255, 229);
        cursor: pointer;
    }

    .nav-bar {
        color: black;
        background-color: rgb(177, 223, 177);
    }

    .nav-link:hover {
        color: black;
        font-size: 1rem;
        font-weight: 600;
        background-color: rgb(177, 223, 177);
        cursor: pointer;
    }

    #logo {
        color: black;
        font-size: 3rem;
        font-weight: 800;
    }
</style>
