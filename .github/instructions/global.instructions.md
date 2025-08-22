---
applyTo: "**"
---

# Instruções Globais do Projeto

## Importante

- Documentação deve ser consultada sempre.
- Antes de criar um componente, verifique se ele já não existe.
- Sempre verifique os componentes do NUXT UI, para isso verifique em `docs`.

## Padrões Gerais

- O projeto segue os padrões de código **Vue** e **Nuxt 4**.
- Utiliza a biblioteca de componentes **NUXT UI**.
- Documentação oficial: [Nuxt UI](https://ui.nuxt.com/getting-started) e também na pasta `docs`.
- Evite o uso de comentários no código.
- Contrua um código limpo e organizado, seguindo as melhores práticas de desenvolvimento.
- Utilize as melhores práticas de acessibilidade, UX e UI, construindo uma interface limpa, objetiva, se possivel utilize a biblioteca ja instalada `auto-animate` e taticas de css com `tailwind` para animações suaves sempre que possivel.

## Tons de Background

Utilize as seguintes classes para tons de fundo:

- `bg-default`: cor de fundo padrão (geralmente o cinza mais claro ou base)
- `bg-muted`: fundo levemente escurecido, menos proeminente
- `bg-elevated`: fundo ainda mais escuro para áreas destacadas
- `bg-accented`: fundo mais escuro, para realces visuais

## Componentes

1. Antes de criar um componente, verifique se ele já existe.
2. Sempre confira os componentes do **NUXT UI** (consulte a pasta sempre `docs`).
3. Tudo que for solicitado para construir deve ser feito, se possível, com Nuxt UI.

## Formulários

- Componentes `<UInput />`, `<InputNumber />`, `<USelect />` que estejam dentro de um formulário ou tenham propriedades como `name`, `required`, etc, devem ser envolvidos por `<UFormField />`.
- O componente `<UFormField />` deve sempre conter a propriedade `hint` com uma mensagem indicando se o campo é obrigatório ou não. Exemplos:
- Sempre coloque espaçamento entre os campos de formulário, utilizando classes como `mb-4` ou `mb-6` para espaçamento vertical.
- Quando o campo for obrigatório, utilize a propriedade `required` no componente `<UFormField />`, e adicione a propriedade `hint` para indicar que o campo é obrigatório.
- Formulários devem ser organizados de forma clara, com campos agrupados logicamente e espaçamento adequado entre eles.
- Utilize `<UForm />` para envolver todos os campos de formulário, garantindo que o comportamento de validação e envio funcione corretamente.
- Utilize do `zod` para validação de formulários, garantindo que os dados sejam validados antes do envio.
- O componente `<UForm />` deve conter o atributo `:state` para gerenciar o estado do formulário, como `:state="formState"` e o atributo `:schema` para definir o esquema de validação.
- Coloque sempre o `label` dentro do componente `<UFormField />` para garantir que o campo seja acessível e tenha uma descrição clara.
- A propriedades `required` e `hint` devem ser utilizadas para indicar campos obrigatórios e fornecer dicas aos usuários.
- Cuidado para não sobrepor espaçamentos, como passar espaçamento no `<UFormField />` e também no `<UInput />`, isso pode causar problemas de layout.
- Não use espaçamentos maiores que `4` ou `6` para evitar que o formulário fique muito espaçado, a menos que seja necessário para a clareza visual.

```vue
<template>
  <UForm
    class="w-full space-y-4"
    :state="formState"
    :schema="formSchema"
    @error="onError"
    @submit.prevent="handleSubmit"
  >
    <UFormField label="E-mail" required hint="(obrigatório)">
      <UInput
        v-model="formData.email"
        type="email"
        name="email"
        icon="i-heroicons-envelope"
        placeholder="Digite seu email"
      />
    </UFormField>

    <UFormField label="Senha" name="password" required hint="(obrigatório)">
      <UInput
        v-model="formData.password"
        type="password"
        icon="i-heroicons-lock-closed"
        placeholder="Digite sua senha"
      />
    </UFormField>

    <UButton type="submit" icon="i-heroicons-arrow-right" trailing block
      >Enviar</UButton
    >
  </UForm>
</template>

<script setup>
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Email inválido").min(1, "O email é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

const formState = reactive({
  email: "",
  password: "",
});

async function onError(event) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id);
    element?.focus();
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
</script>
```

### Mascaras de Formulário

- É possivel utilizar mascáras de formulário com a lib `v-maska`, que já está instalada no projeto.
- Para utilizar, basta passar a propriedade `v-maska` no componente `<UInput />` com a máscara desejada. Exemplo:

  ```vue
  <UInput
    v-model="formData.phone"
    v-maska="'(##) #####-####'"
    placeholder="Digite seu telefone"
  />
  ```

## Botões

- Utilize o componente `<UButton />` para botões.
- Para que o botão tenha um width de 100%, utilize o atributo `block`, mas só deve ser utilizado se necessário.
- Se utilizar icones, utilize o atributo `trailing` para posicionar o ícone no final do botão.

## Ajustes de Estilo

- Sempre que possível utilize icones da biblioteca `@nuxt/ui-icons`, que ja esta instalada no projeto, as opções de icones diponíveis estão em `https://icones.js.org/`. Utilize icones em campos de formulários, select, botões, etc.
- Não utilize icones de outras bibliotecas, como `heroicons`, `lucide`, etc.
- Existem ajustes de cores e proporções dos componentes em `app/app.config.ts` que devem ser considerados ao utilizar os componentes.
