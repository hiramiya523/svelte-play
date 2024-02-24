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
pnpm install -D prisma @prisma/client

 - cli利用確認
 pnpx prisma 

- Generate Prisma files (default: postgresql)
  pnpx prisma init 


- @prisma/client"' has no exported member 'PrismaClient'. ....
  pnpx prisma generate



 pnpm prisma studio
