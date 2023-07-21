<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    import { inview } from 'svelte-inview';
  
    let isInView: boolean;
    export let renderAnyways: boolean = false;
    export let heading: string = "default title";
    export let textBody: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, adipisci nihil iste."

    function fadeSlide(node: any, options: any) {
		const slideTrans = slide(node, options)
		return {
			duration: options.duration,
			css: t => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
	}
  </script>
  
  <div
    class="wrapper"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >

    {#if isInView || renderAnyways}
      <div in:fadeSlide="{{duration: 750}}" class="box">
        <h3>{heading}</h3>
        <p>{textBody}</p>
      </div>
    {/if}
  </div>
  
  <style>
    .wrapper {
      margin-top: 10px;
    }
  
    .box {
      width: 75vw;
      border: 1px solid rgb(221, 221, 221);
      padding: 25px;
      border-radius: 10px;
    }

    h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
  }
  </style>
  