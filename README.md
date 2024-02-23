試したい技術があるときに、サクッと環境を用意するためのテンプレです。

# 環境構築、設定
## SvelteKit

pnpm create svelte@latest app
```
server: {
    host: true,
  },
```

pnpm i

pnpm dev

pnpm i -D sveltekit-superforms zod

- prisma
 pnpm add -D prisma && pnpm add @prisma/client

 - cli利用確認
 npx prisma 

- Generate Prisma files (default: postgresql)
  npx prisma init 

 pnpm prisma studio
