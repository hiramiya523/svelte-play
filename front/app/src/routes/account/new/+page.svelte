<script lang="ts">
	import type { ActionData } from './$types';

	/** @type {import('./$types').ActionData} */
	export let data: ActionData;

	// $: console.log(data);s
</script>

<div>
	<h1>サインアップ</h1>
	{#if data?.message}<span class="invalid">{data.message}</span>{/if}
	{#if true}<p class="error">The email field is required</p>{/if}
	<form method="post">
		<label for="name">ユーザー名</label>
		<input type="text" name="name" />

		<label for="email">メールアドレス</label>
		<input type="text" name="email" />

		<label for="password">パスワード</label>
		<input type="password" name="password" />

		<label for="confirmPassword">パスワード（確認）</label>
		<input type="password" name="confirm" />

		<div><button>サインアップ</button></div>
	</form>
</div>

<style>
	input {
		display: block;
		margin-bottom: 10px;
	}
	.invalid {
		color: red;
	}
</style>
