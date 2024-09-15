<template>
  <main>
    <slot />
    <footer class="footer">
      <div class="center">
        <h2 class="cursor-pointer">Desenvolvido Por Will Code Systems | 2024 ®</h2>
      </div>
    </footer>
  </main>
</template>

<script setup></script>

<style>
main {
  width: 100%;
}

section.page {
  min-height: calc(100vh - 55px);
}

footer.footer {
  width: 100%;
  padding: 15px 0;
  background: hsl(var(--card-bg));
  box-shadow: 0 5px 10px hsl(var(--shadow));
  text-align: center;
}

footer.footer h2 {
  font-weight: 400;
  color: hsl(var(--foreground));
}
</style>
