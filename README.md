<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1LDNvi7iZpgkpArxnMRTvNRsgl8weK6pN

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `yarn install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `yarn dev`

## Deploy no GitHub Pages

O projeto está configurado para fazer deploy automático no GitHub Pages.

### Configuração Inicial

1. **Habilite o GitHub Pages no repositório:**
   - Vá em Settings → Pages
   - Em "Source", selecione "GitHub Actions"

2. **Ajuste o nome do repositório (se necessário):**
   - Se o nome do seu repositório for diferente de `thiago-bruno-miranda---tech-lead-portfolio`, atualize a variável `repoName` no arquivo `vite.config.ts`

### Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `main`. O workflow do GitHub Actions irá:
- Fazer build do projeto
- Fazer deploy para o GitHub Pages

### Deploy Manual

Para fazer deploy manual:
```bash
yarn deploy
```

Depois faça commit e push das alterações:
```bash
git add .
git commit -m "Deploy"
git push origin main
```

### URL do Site

Após o deploy, seu site estará disponível em:
`https://[seu-usuario].github.io/thiago-bruno-miranda---tech-lead-portfolio/`

**Nota:** Se você renomear o repositório, não esqueça de atualizar o `repoName` no `vite.config.ts`!
