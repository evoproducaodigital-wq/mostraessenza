# Plano — Biografias nas páginas dos arquitetos

## Alteração pontual

- Usar a fonte central existente de arquitetos e o único modelo já compartilhado pelas páginas individuais.
- Manter o campo opcional `bio?: string`, que já existe; não criar novas estruturas, páginas, rotas ou componentes.
- Inserir exatamente as biografias fornecidas nos 25 perfis correspondentes, associando cada texto pelo slug atual.
- Nos perfis que já possuem biografia, substituir somente o valor de `bio`; nos demais, acrescentar apenas `slug` e `bio` aos dados complementares existentes.
- Não implementar o conteúdo de Aline Azevedo e Bárbara Rigobello, pois não existe perfil correspondente confirmado.

## Exibição

- Mover a única renderização condicional já existente para depois da apresentação do profissional e antes de “Projeto”.
- Alterar o título exibido de “Mini biografia” para “Biografia”.
- Preservar a formatação atual de parágrafos, tipografia, largura, espaçamento, cores e comportamento responsivo.
- Não renderizar título, bloco, espaço ou placeholder quando `bio` estiver ausente.

## Preservação e validação

- Não alterar nomes, fotos, cards, galerias, projetos, descrições, URLs, slugs, página inicial, cabeçalho, rodapé, menu, navegação ou metadados.
- Conferir a associação dos 25 textos aos respectivos perfis e garantir que os demais permaneçam sem a nova seção.
- Validar páginas com e sem biografia em desktop e mobile, confirmar a posição da seção e verificar que o projeto continua compilando sem erros.

## Detalhes técnicos

- Arquivos previstos: `src/data/architect-details.ts` e `src/routes/arquitetos.$slug.tsx`.
- Nenhuma dependência, rota, componente ou asset novo.
