<script lang="ts">
	let url:string;
	const getFeed = async (feed:string) => {
		const response = await fetch(`/api/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ feed })
		});
		const data = await response.json();
		url = await data.match(/<enclosure url="(.*)" length/)[1];
	};
</script>
<div class="fixed z-10 w-full">
	<div class="flex justify-evenly mx-auto">
		<button class="btn dark:text-white btn-ghost w-1/3" on:click={() => getFeed('https://www.tagesschau.de/export/video-podcast/webm/tagesschau_https/')} >Tagesschau</button>
		<button class="btn dark:text-white btn-ghost w-1/3" on:click={() => getFeed('https://www.zdf.de/rss/podcast/video/zdf/kinder/logo')}>Logo</button>
		<button class="btn dark:text-white btn-ghost w-1/3" on:click={() => getFeed('https://mediathekviewweb.de/feed?query=Aktuelles%20journal%20junior')} >Arte</button>
		</div>
	</div>
		<video src={url} autoplay class="h-screen  m-auto" controls >
			<track kind="captions" />
		</video>


