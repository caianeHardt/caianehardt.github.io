const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 2000,
    reset: true,
  });

sr.reveal("#apresentacaoFoto", { delay: 200 });
sr.reveal("#apresentacaoTexto", { delay: 400 });

sr.reveal("#quem-sou", { delay: 600 });
sr.reveal(".conhecimentos", { delay: 400 });

sr.reveal(".contatos", { delay: 400 });